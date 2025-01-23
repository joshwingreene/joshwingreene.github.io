import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { getWhatIDoStr } from "../util/author";

interface Options {
  useConfig?: boolean
}

export default ((opts?: Options) => {
  function Subtitle({ fileData, cfg, displayClass }: QuartzComponentProps) {        
    const options = opts;
    let subtitle = undefined;

    if (options && options.useConfig) {
      subtitle = getWhatIDoStr(cfg.landingPageData.intro.whatIDo);
    } else {
      subtitle = fileData.frontmatter?.description;
    }
    
    if (subtitle) {
      return <p class={classNames(displayClass, "subtitle")}>{subtitle}</p>
    } else {
      return null
    }
  }
  
  Subtitle.css = `
  .subtitle {
    margin: .5rem 0 .5rem 0;
    color: var(--darkgray);
    font-weight: bold;
  }
  `

  return Subtitle
}) satisfies QuartzComponentConstructor
