import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    /**
     * Front Porch 1.0.0 Configuration
     *
     * See https://github.com/DigitalGardeningCollective/front-porch/blob/main/README.md for more information.
     */
    frontPorchVersion: "1.0.0",
    // ** Add your data here **
    githubUsername: "joshwingreene",
    gitHubFrontPorchRepoName: "joshwingreene.github.io",
    landingPageData: {
      authorName: "Joshwin Greene",
      authorImage: "joshwin-professional-photo.jpg",
      intro: {
        title: "Welcome!",
        firstLeadUp: "The name's",
        secondLeadUp: "and I'm a",
        whatIDo: ["Software Developer", "Open-Source Developer", "Digital Gardener"],
      },
      showcaseItems: [
        {
          image: "developer-showcase-image.jpg",
          title: "Software Development Experience",
          description: "I have developed both mobile and web apps",
          pathnameOrUrl: "portfolio/dev",
        },
        {
          image: "designer-showcase-image.jpg",
          title: "UX, UI, and Misc. Design Experience",
          description: "I have designed mobile apps, web apps, websites, miscellanous design assets.",
          pathnameOrUrl: "portfolio/design",
        },
        {
          image: "dgc-showcase-image.png",
          title: "The Digital Gardening Collective",
          description: "A living directory of personal digital gardens and digital gardeners who are willing to trade their time to help others create their own.",
          pathnameOrUrl: "https://www.digitalgardeningcollective.com",
          hasExternalLink: true,
        }
      ],
    },
    gardenPageData: {
      title: "Welcome to my Digital Garden!",
      whatIWriteAbout: {
        leadUp: "I mainly publish notes and essays about",
        topics: ["programming", "politics", "productivity"],
      },
      findMeOnCopy: "You can find me on these platforms:",
      gardenAuthorImage: "joshwin-casual-photo.jpg",
      socialLinks: {
        twitter: "https://twitter.com/Josh_w_G",
        facebook: "https://facebook.com/joshwin.greene",
        github: "https://github.com/joshwingreene",
        linkedin: null,
      },
    },
    enableFooter: true,
    // Only edit if you know what you are doing
    pageTitle: "Front Porch",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "joshwingreene.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["git"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        includeEmptyFiles: false
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
