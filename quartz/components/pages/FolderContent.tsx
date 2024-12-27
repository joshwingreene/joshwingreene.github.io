import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import path from "path"

import style from "../styles/listPage.scss"
import { PageList } from "../PageList"
import { stripSlashes, simplifySlug } from "../../util/path"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { i18n } from "../../i18n"
import * as Component from "../../components"
import { ExperienceItem } from "../ExperienceItem"
import { devExperienceItems } from "../../static/dev-experience/experience-history"
import { technicalWritingExperienceItems } from "../../static/technical-writing-experience/technical-writing-history"

interface FolderContentOptions {
  /**
   * Whether to display number of folders
   */
  showFolderCount: boolean
}

const defaultOptions: FolderContentOptions = {
  showFolderCount: true,
}

export default ((opts?: Partial<FolderContentOptions>) => {
  const options: FolderContentOptions = { ...defaultOptions, ...opts }

  const FolderContent: QuartzComponent = (props: QuartzComponentProps) => {
    const { tree, fileData, allFiles, cfg } = props
    const folderSlug = stripSlashes(simplifySlug(fileData.slug!))
    const allPagesInFolder = allFiles.filter((file) => {
      const fileSlug = stripSlashes(simplifySlug(file.slug!))
      const prefixed = fileSlug.startsWith(folderSlug) && fileSlug !== folderSlug
      const folderParts = folderSlug.split(path.posix.sep)
      const fileParts = fileSlug.split(path.posix.sep)
      const isDirectChild = fileParts.length === folderParts.length + 1
      return prefixed && isDirectChild
    })
    const cssClasses: string[] = fileData.frontmatter?.cssclasses ?? []
    const classes = ["popover-hint", ...cssClasses].join(" ")
    const listProps = {
      ...props,
      allFiles: allPagesInFolder,
    }

    return (
        {
          "portfolio/technical-writing": (
            <div style="margin-top: 2rem;display: grid;grid-template-columns: repeat(2, 1fr);grid-template-rows: repeat(2);gap: 36px;">
              { technicalWritingExperienceItems.map((item) => {
                  const ExperienceComponent = Component.ExperienceCard({ experienceItem: item })
                  return <ExperienceComponent { ...props }  />
                  })
              }
            </div>
          ),
          "portfolio/dev": (
            <div id="dev-experience-body">
              { devExperienceItems.map((item) => {
                  const ExperienceComponent = Component.ExperienceItem({ experienceItem: item })
                  return <ExperienceComponent { ...props }  />
                  })
              }
            </div>
          )
        } [folderSlug] || (
          <div class={classes}>
            <div class="page-listing">
              {options.showFolderCount && (
                <p>
                  {i18n(cfg.locale).pages.folderContent.itemsUnderFolder({
                    count: allPagesInFolder.length,
                  })}
                </p>
              )}
              <div>
                <PageList {...listProps} />
              </div>
            </div>
        </div>
      )
    )
  }

  FolderContent.css = style + PageList.css
  return FolderContent
}) satisfies QuartzComponentConstructor
