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

export type TechnicalWritingItem = {
    title: string
    description: string
    duration: string
    selectedDeliverables?: Link[]
    learnMoreURL?: string
}

interface Options {
    experienceItem: TechnicalWritingItem
}

export default ((userOpts?: Options) => {
    function ExperienceCard({ fileData, cfg, displayClass }: QuartzComponentProps) {
        const { experienceItem } = {  ...userOpts }

        if (experienceItem) {
            return (
                <div class="technical-writing-card"> 
                    <h3 style="margin-top: 0;">{ experienceItem.title }</h3>
                    <h5>{ experienceItem.duration }</h5>
                    <p>{ experienceItem.description }{' '}{ experienceItem.learnMoreURL && <a href={experienceItem.learnMoreURL} target="_target">Learn More...</a> }</p>
                    {
                        experienceItem.selectedDeliverables ? 
                            <ul style="margin: 0;list-style-type: none;padding-inline-start: 0;">
                                { experienceItem.selectedDeliverables.map((deliverable) => {
                                    return (
                                        <li><a href={deliverable.url} target="_target">{ deliverable.title }</a></li>
                                    )
                                })}
                            </ul> 
                        : null
                    }
                </div>
            )                
        } else {
            return null
        }      
    }

    ExperienceCard.css = `
    .technical-writing-card {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
        padding: 15px;
        border: 1px solid #e0e0e0;
    }
    `

    return ExperienceCard
}) satisfies QuartzComponentConstructor