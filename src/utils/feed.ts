import { ComplexFeed, Feed } from "../types/feed"
import { Site } from "../types/site"
import { supportedSites } from "./config"
import { Parser } from "xml2js"

class FeedParser {
    parser: Parser

    constructor() {
        this.parser = new Parser()
    }

    async parseFrom(url: string) {
        const xml = await fetch(url).then((res) => res.text())

        const feed: ComplexFeed = JSON.parse(JSON.stringify(await this.parser.parseStringPromise(xml))).feed

        return feed
    }
}

export class FeedClient {
    parser: FeedParser

    constructor() {
        this.parser = new FeedParser()
    }

    async getFeeds(count?: number): Promise<Feed[]> {
        const sites = await supportedSites()

        const complexFeeds: ComplexFeed[] = (
            await Promise.all(
                sites.major.flatMap(async (site: Site): Promise<ComplexFeed> => {
                    const complexFeed: ComplexFeed = await this.parser.parseFrom(site.url + "/atom")

                    return complexFeed
                })
            )
        ).flat()

        // console.log(complexFeeds)

        const feeds: Feed[] = complexFeeds.flatMap((feed: ComplexFeed) => {
            return feed.entry.map((entry) => {
                return {
                    siteTitle: feed.title[0],
                    siteUrl: feed.link[0].$.href,
                    siteUpdated: new Date(feed.updated[0]),
                    seriesTitle: entry.content[0]._,
                    mangaTitle: entry.title[0],
                    mangaUrl: entry.link.find((link) => {
                        return link.$.rel == null || link.$.rel == undefined
                    }).$.href,
                    mangaThumbnail: entry.link.find((link) => {
                        return link.$.rel !== null && link.$.rel !== undefined
                    }).$.href,
                    mangaUpdated: new Date(entry.updated[0]),
                    author: entry.author[0].name[0],
                }
            })
        })

        // console.log(feeds.length)

        return count ? feeds.slice(0, count) : feeds
    }
}
