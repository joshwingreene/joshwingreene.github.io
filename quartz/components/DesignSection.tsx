import { resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { GlobalConfiguration } from "../cfg"

export function byDate(
  cfg: GlobalConfiguration,
): (f1: QuartzPluginData, f2: QuartzPluginData) => number {
  return (f1, f2) => {
    if (f1.dates && f2.dates) {
      // sort descending
      return f2.dates.published.getTime() - f1.dates.published.getTime()
    } else {
        return 1;
    }
  }
}

type Props = {
  limit?: number
} & QuartzComponentProps

export const DesignSection: QuartzComponent = ({ cfg, fileData, allFiles, limit }: Props) => {
  let list = allFiles.sort(byDate(cfg))
  if (limit) {
    list = list.slice(0, limit)
  }

  return (
    <div class="responsive">
      <div class="design-container">

        {list.map((page) => {
            const title = page.frontmatter?.title
            const hoverImage = page.frontmatter?.["hover-image"];
            const coverImageAltText = page.frontmatter?.["cover-image-alt-text"];

            return (
                <div>
                    <a href={resolveRelative(fileData.slug!, page.slug!)}>
                        <img 
                            class="design-img" 
                            src={`../../static/item-cover/${hoverImage}`} 
                            alt={`${coverImageAltText && typeof coverImageAltText === "string" ? 
                                coverImageAltText : 
                                `Photo of ${title}`
                            }`} 
                        />
                    </a>
                </div>
            )
        })}
      </div>
    </div>
  )
}


DesignSection.css = `
    .design-img {
        width: 100%;
        height: auto;
        display: block;
        background-size: cover;
        background-position: center;
    }
`

export default (() => DesignSection) satisfies QuartzComponentConstructor
