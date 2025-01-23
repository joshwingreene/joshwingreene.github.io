import { Data } from "vfile"
import { resolveRelative } from "./path"

export const showExternalOrLocalLink = (title: string, fileData: Data, page: Data) => {
    if (page && page.frontmatter && page.frontmatter?.['external-host'] && page.frontmatter?.['external-link']) {
      return (
        <a href={`${page.frontmatter?.['external-link']}`} class="external" target="_blank">
          {title}
        </a>
      )
    } else {
      return (
        <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
          {title}
        </a>
      )
    }
  }