import esbuild from "esbuild"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { Processor, unified } from "unified"
import { Root as MDRoot } from "remark-parse/lib"
import { Root as HTMLRoot } from "hast"
import { ProcessedContent } from "../plugins/vfile"
import { PerfTimer } from "../util/perf"
import { read } from "to-vfile"
import { FilePath, QUARTZ, slugifyFilePath } from "../util/path"
import path from "path"
import workerpool, { Promise as WorkerPromise } from "workerpool"
import { QuartzLogger } from "../util/log"
import { trace } from "../util/trace"
import { BuildCtx } from "../util/ctx"
import rehypeComponents, { ComponentContext } from "rehype-components";
import type { Properties, Root, ElementContent, Element } from "hast";
import { h } from "hastscript";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";

const DocumentationPage = (props: Properties, children: ElementContent[], context: ComponentContext) =>
  h("article.documentation", [
    h("h1", String(props.title || "Default title")),
     ...children
  ]);

const CopyrightNotice = (props: Properties, children: ElementContent[], context: ComponentContext) =>
h("footer.notice", `© ${props.year}`);

const InfoBox = (props: Properties, children: ElementContent[], context: ComponentContext) =>
  h(
    ".infobox", [
      h(".infobox-title", String(props.title || "Info")),
      h(".infobox-body", ...children),
    ]
  );

const ImageGrid = (_props: Properties, children: ElementContent[], _context: ComponentContext) =>
  h("div.image-grid",
    children.map(child => {
      // Ensure child is an Element node with properties
      if (typeof child === "object" && "properties" in child) {
        const { properties } = child as Element;
        return h("div.image", [
          h("img", { src: properties?.src, alt: properties?.alt || "Image" }),
          h("div.image-label", String(properties?.label || "Label"))
        ]);
      }
      return null; // Filter out invalid children
    }).filter(Boolean) // Remove null values
);

interface CustomProperties {
  title?: string;
  color?: string;
}

const CenteredTitle = (props: CustomProperties, children: ElementContent[], context: ComponentContext) =>
  h("p.centered-title", { style: { color: props.color || "black" }}, String(props.title || "Default title"));

export type QuartzProcessor = Processor<MDRoot, MDRoot, HTMLRoot>
export function createProcessor(ctx: BuildCtx): QuartzProcessor {
  const transformers = ctx.cfg.plugins.transformers

  return (
    unified()
      // base Markdown -> MD AST
      .use(remarkParse)
      // MD AST -> MD AST transforms
      .use(
        transformers
          .filter((p) => p.markdownPlugins)
          .flatMap((plugin) => plugin.markdownPlugins!(ctx)),
      )

      .use(remarkDirective)
      .use(remarkDirectiveRehype)

      // MD AST -> HTML AST
      .use(remarkRehype, { allowDangerousHtml: true })

      // Inject rehypeComponents before other HTML transforms
      .use(rehypeComponents, { 
        components: {
          "image-grid": ImageGrid,
          "centered-title": CenteredTitle,
        }
      })

      // HTML AST -> HTML AST transforms
      .use(transformers.filter((p) => p.htmlPlugins).flatMap((plugin) => plugin.htmlPlugins!(ctx)))
  )
}

function* chunks<T>(arr: T[], n: number) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n)
  }
}

async function transpileWorkerScript() {
  // transpile worker script
  const cacheFile = "./.quartz-cache/transpiled-worker.mjs"
  const fp = "./quartz/worker.ts"
  return esbuild.build({
    entryPoints: [fp],
    outfile: path.join(QUARTZ, cacheFile),
    bundle: true,
    keepNames: true,
    platform: "node",
    format: "esm",
    packages: "external",
    sourcemap: true,
    sourcesContent: false,
    plugins: [
      {
        name: "css-and-scripts-as-text",
        setup(build) {
          build.onLoad({ filter: /\.scss$/ }, (_) => ({
            contents: "",
            loader: "text",
          }))
          build.onLoad({ filter: /\.inline\.(ts|js)$/ }, (_) => ({
            contents: "",
            loader: "text",
          }))
        },
      },
    ],
  })
}

export function createFileParser(ctx: BuildCtx, fps: FilePath[]) {
  const { argv, cfg } = ctx
  return async (processor: QuartzProcessor) => {
    const res: ProcessedContent[] = []
    for (const fp of fps) {
      try {
        const perf = new PerfTimer()
        const file = await read(fp)

        // strip leading and trailing whitespace
        file.value = file.value.toString().trim()

        // Text -> Text transforms
        for (const plugin of cfg.plugins.transformers.filter((p) => p.textTransform)) {
          file.value = plugin.textTransform!(ctx, file.value.toString())
        }

        // base data properties that plugins may use
        file.data.filePath = file.path as FilePath
        file.data.relativePath = path.posix.relative(argv.directory, file.path) as FilePath
        file.data.slug = slugifyFilePath(file.data.relativePath)

        const ast = processor.parse(file)
        const newAst = await processor.run(ast, file)
        res.push([newAst, file])

        if (argv.verbose) {
          console.log(`[process] ${fp} -> ${file.data.slug} (${perf.timeSince()})`)
        }
      } catch (err) {
        trace(`\nFailed to process \`${fp}\``, err as Error)
      }
    }

    return res
  }
}

const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(Math.round(num), min), max)
export async function parseMarkdown(ctx: BuildCtx, fps: FilePath[]): Promise<ProcessedContent[]> {
  const { argv } = ctx
  const perf = new PerfTimer()
  const log = new QuartzLogger(argv.verbose)

  // rough heuristics: 128 gives enough time for v8 to JIT and optimize parsing code paths
  const CHUNK_SIZE = 128
  const concurrency = ctx.argv.concurrency ?? clamp(fps.length / CHUNK_SIZE, 1, 4)

  let res: ProcessedContent[] = []
  log.start(`Parsing input files using ${concurrency} threads`)
  if (concurrency === 1) {
    try {
      const processor = createProcessor(ctx)
      const parse = createFileParser(ctx, fps)
      res = await parse(processor)
    } catch (error) {
      log.end()
      throw error
    }
  } else {
    await transpileWorkerScript()
    const pool = workerpool.pool("./quartz/bootstrap-worker.mjs", {
      minWorkers: "max",
      maxWorkers: concurrency,
      workerType: "thread",
    })

    const childPromises: WorkerPromise<ProcessedContent[]>[] = []
    for (const chunk of chunks(fps, CHUNK_SIZE)) {
      childPromises.push(pool.exec("parseFiles", [argv, chunk, ctx.allSlugs]))
    }

    const results: ProcessedContent[][] = await WorkerPromise.all(childPromises).catch((err) => {
      const errString = err.toString().slice("Error:".length)
      console.error(errString)
      process.exit(1)
    })
    res = results.flat()
    await pool.terminate()
  }

  log.end(`Parsed ${res.length} Markdown files in ${perf.timeSince()}`)
  return res
}
