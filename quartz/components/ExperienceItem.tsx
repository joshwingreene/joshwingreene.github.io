// import { ShowcaseItem } from "../cfg"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const isObject = (value: unknown): value is Record<string, unknown> => {
    return value !== null && typeof value === 'object';
};

type Item = {
    title: string
    subItems?: string[]
}

type Section = {
    title: string
    items: Item[] 
}

export type ExperienceItem = {
    image: string
    title: string
    description: string
    duration: string
    responsibilitiesAndWins: unknown[]
    githubURL?: string
    learnMoreURL?: string // Used to put a link to the right of the description
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

export default ((userOpts?: Options) => {
    function ExperienceItem({ fileData, cfg, displayClass }: QuartzComponentProps) {
        const { experienceItem } = {  ...userOpts }

        if (experienceItem) {
            return (
                <div class="experience-item responsive"> 
                    <div class="experience-info">
                        <h3>{experienceItem.title}</h3>
                        <h4>{experienceItem.duration}</h4>
                        <p><span style={{ fontWeight: "bold" }}>Description:</span> {experienceItem.description}</p>
                        <ul>
                            {experienceItem.responsibilitiesAndWins.map((item) => {
                                if (isSection(item)) {
                                    return (
                                        <li>
                                            <h4>{item.title}</h4>
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
                                } else if (isItem(item)) {
                                    return (
                                       <li>
                                          <p>{item.title}</p>
                                          { item.subItems &&
                                                <ul>
                                                    {item.subItems.map((subItem) => {
                                                        return <li>{subItem}</li>
                                                    })}
                                                </ul>
                                          }
                                       </li>
                                    )
                                } else {
                                    return <li>Unknown</li>
                                }
                            })}
                        </ul>
                    </div>
                    <image class="experience-img" src={`../../static/dev-experience/${experienceItem.image}`} alt={`${experienceItem.title} Preview Image`} />
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

        div {
            display: flex;
            flex-direction: column;
            flex: 3;

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
            width: 200px;
            height: 200px;
            padding: 0 1rem;
            flex: 2;
        }
    }
    `

    return ExperienceItem
}) satisfies QuartzComponentConstructor



