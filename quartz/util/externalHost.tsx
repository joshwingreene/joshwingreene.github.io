import { Data } from "vfile"

export const showExternalHost = (page: Data) => {
    return page.frontmatter?.['external-host'] ?
        <p class='external-host'>{ page.frontmatter?.['external-host'] }</p>
        : 
        null;
}