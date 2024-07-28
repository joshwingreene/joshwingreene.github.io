// import { ShowcaseItem } from "../cfg"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export type ExperienceItem = {
    image: string
    title: string
    description: string
    responsibilitiesAndWins: string[]
    githubURL: string
}

interface Options {
    experienceItem: ExperienceItem
}

export default ((userOpts?: Options) => {
    function ExperienceItem({ fileData, cfg, displayClass }: QuartzComponentProps) {
        const { experienceItem } = {  ...userOpts }

        if (experienceItem) {
            return (
                <div class="experience-item responsive"> 
                    <div class="experience-info">
                        <h3>{experienceItem.title}</h3>
                        <p>{experienceItem.description}</p>
                        <ul>
                            {experienceItem.responsibilitiesAndWins.map((item) => {
                                return <li>{item}</li>
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
            padding: 0 1rem;
            flex: 2;
        }
    }
    `

    return ExperienceItem
}) satisfies QuartzComponentConstructor



