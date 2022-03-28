import Parser from "rss-parser"
import { RSS } from "../types/rss"
import { Site } from "../types/site"
import { Suggestion } from "../types/suggestion"
import { supportedSites } from "./config"

export class RSSParser {
    parser: Parser

    constructor() {
        this.parser = new Parser()
    }

    async parseFrom(url: string) {
        const xml = await fetch(url).then((res) => res.text())

        const feed: RSS = JSON.parse(JSON.stringify(await this.parser.parseString(xml)))

        return feed
    }
}

export class SuggestionClient {
    parser: RSSParser

    constructor() {
        this.parser = new RSSParser()
    }

    async get(): Promise<Suggestion[]> {
        const sites = await supportedSites()

        const rssDatas: RSS[] = (
            await Promise.all(
                sites.major.flatMap(async (site: Site): Promise<RSS> => {
                    const rss = await this.parser.parseFrom(site.url + "/atom")

                    return rss
                })
            )
        ).flat()

        // console.log(rssDatas)

        const episodes = rssDatas.flatMap((rssData: RSS) => {
            return rssData.items.map((item) => {
                const suggestion: Suggestion = {
                    ...item,
                    site: {
                        title: rssData.title,
                    },
                }
                return suggestion
            })
        })

        const suggestions: Suggestion[] = []

        episodes.forEach((episode) => {
            const index = suggestions.findIndex((suggestion) => suggestion.content === episode.content)
            if (index === -1) {
                suggestions.push(episode)
            } else if (suggestions[index].isoDate < episode.isoDate) {
                suggestions[index] = episode
            }
        })

        // console.log(suggestions)

        return suggestions
    }
}
