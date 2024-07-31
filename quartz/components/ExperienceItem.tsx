// import { ShowcaseItem } from "../cfg"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const isObject = (value: unknown): value is Record<string, unknown> => {
    return value !== null && typeof value === 'object';
};

type Link = {
    title: string
    url: string
    prefixText?: string
}

type Item = {
    title: string
    subItems?: string[] | Link[]
}

type Section = {
    title: string
    items: Item[] 
    techStack: string[]
}

type ImageData = {
    name: string
    isSquare: boolean
    hasBorder?: boolean
}

export type ExperienceItem = {
    image: ImageData
    title: string
    description: string
    duration: string
    responsibilitiesAndWins: unknown[]
    githubURL?: string
    learnMoreURL?: string // Used to put a link to the right of the description
    techStack?: string[]
}

interface Options {
    experienceItem: ExperienceItem
}

const isSection = (data: unknown): data is Section => {
    return  isObject(data) && data.items !== undefined;
}

const isItem = (data: unknown): data is Item => {
    return isObject(data) && data.items === undefined;
}

const isLink = (data: unknown): data is Link => {
    return isObject(data) && data.url !== undefined;
}

export default ((userOpts?: Options) => {
    function ExperienceItem({ fileData, cfg, displayClass }: QuartzComponentProps) {
        const { experienceItem } = {  ...userOpts }

        if (experienceItem) {
            return (
                <div class="experience-item responsive"> 
                    <div class="experience-info">
                        <h3>{experienceItem.title}</h3>
                        <p class="experience-duration">{experienceItem.duration}</p>
                        <p><span style={{ fontWeight: "bold" }}>Description:</span> {experienceItem.description}</p>
                        { experienceItem.techStack && <p><span style={{ fontWeight: "bold" }}>Technologies: </span>{experienceItem.techStack.join(', ')}</p> }
                        <ul>
                            {experienceItem.responsibilitiesAndWins.map((item) => {
                                if (isSection(item)) {
                                    return (
                                        <li>
                                            <h4>{item.title}</h4>
                                            { item.techStack && <p><span style={{ fontWeight: "bold" }}>Technologies: </span>{item.techStack.join(', ')}</p> }
                                            <ul>
                                                {item.items.map((i) => {
                                                    return (
                                                        <div>
                                                            <li>{i.title}</li>
                                                            { i.subItems &&
                                                                <ul>
                                                                    {i.subItems.map((subItem) => {
                                                                        return <li>{subItem}</li>
                                                                    })}
                                                                </ul>
                                                            }
                                                        </div>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                    )
                                } else if (isLink(item)) {
                                    return item.prefixText && (
                                        <li>{ item.prefixText }{` `}<a href={item.url} target="_target">{ item.title }</a></li>
                                    )
                                } else if (isItem(item)) {
                                    return (
                                       <li>
                                          <p>{item.title}</p>
                                          { item.subItems &&
                                                <ul>
                                                    {item.subItems.map((subItem) => {
                                                        if (isLink(subItem)) {
                                                            return <li><a href={subItem.url} target="_target">{ subItem.title }</a></li>
                                                        } else {
                                                            return <li>{subItem}</li>
                                                        }
                                                    })}
                                                </ul>
                                          }
                                       </li>
                                    )
                                }  else {
                                    return <li>Unknown</li>
                                }
                            })}
                        </ul>
                    </div>
                    <image 
                        class={`experience-img ${experienceItem.image.isSquare ? 'img-squared' : 'img-not-squared'}
                                ${experienceItem.image.hasBorder ? 'img-with-border' : ''}
                            `} 
                        src={`../../static/dev-experience/${experienceItem.image.name}`} 
                        alt={`${experienceItem.title} Preview Image`} 
                    />
                </div>
            )                
        } else {
            return null
        }      
    }

    ExperienceItem.css = `
    .experience-item {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 1rem;

        .experience-info {
            display: flex;
            flex: 3;
            margin-right: 1rem;
        }

        h3, h4, p, ul {
            margin-top: .5rem;
            margin-bottom: .5rem;
        }

        .experience-duration {
            font-style: italic;
            font-size: 1.1rem;
        }

        div {
            display: flex;
            flex-direction: column;

            h3, p {
                color: var(--dark);
            }

            ul {
                margin: 0;
                padding: 0 0 0 1rem;
            }
        }

        img {
            display: flex;
            padding: 0;
            flex: 2;
        }

        .img-squared {
            width: 250px;
            height: 250px;
        }

        .img-not-squared {
            width: 250px;
            margin: 0 auto;
        }

        .img-with-border {
            border: 1px solid #ccc;
        }
    }
    `

    return ExperienceItem
}) satisfies QuartzComponentConstructor



