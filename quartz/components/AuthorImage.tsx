import { classNames } from "../util/lang";
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function AuthorImage({ displayClass, cfg }: QuartzComponentProps) {
    const { landingPageData: { authorImage, authorName } } = cfg;
    
    return (
        <img class={classNames(displayClass, "author-img")} src={`../../static/author-image/${authorImage}`} alt={`Photo of ${authorName}`} />
    )
  }

  return AuthorImage
}) satisfies QuartzComponentConstructor
