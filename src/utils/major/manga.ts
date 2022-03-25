import { parseURL } from "ufo"
import { MajorMangaDetail, MajorMangaMeta } from "~~/src/types/major/detail"
import xml2js from "xml2js"
import { EasySeries, Series } from "~~/src/types/major/series"
import { supportedSites } from "../config"
import { Site } from "~~/src/types/site"

export class MajorManga {
    url: string
    parser: xml2js.Parser

    constructor(url: string) {
        this.url = url
        // this.parser = new RSSParser()
        this.parser = new xml2js.Parser()
    }

    async getSeries(): Promise<MajorMangaMeta> {
        const detail: MajorMangaDetail = await fetch(this.url).then((res) => res.json())

        const seriesId = detail.readableProduct.series.id

        const seriesFeedUrl = `https://${parseURL(this.url).host!}/atom/series/${seriesId}`

        const xml = await fetch(seriesFeedUrl).then((res) => res.text())

        const json: Series = await this.parser.parseStringPromise(xml)

        const series = {} as EasySeries
        series.feed = {
            title: json.feed.title[0],
            subtitle: json.feed.subtitle[0],
            updated: json.feed.updated[0],
            id: json.feed.id[0],
            link: {
                href: json.feed.link[0].$.href,
            },
            entry: json.feed.entry.map((entry) => {
                return {
                    title: entry.title[0],
                    link: entry.link.map((link) => {
                        return { href: link.$.href, type: link.$.type, rel: link.$.rel, length: link.$.length }
                    }),
                    id: entry.id[0],
                    updated: entry.updated[0],
                    content: entry.content[0]._,
                    author: { name: entry.author[0].name[0] },
                }
            }),
        }

        const sites = (await supportedSites()).major

        const site = sites.find((site) => {
            return parseURL(site.url).host! === parseURL(this.url).host!
        })

        return {
            title: detail.readableProduct.series.title,
            description: series.feed.subtitle,
            author: series.feed.entry.find((entry) => {
                return entry.author.name !== null
            }).author.name,
            thumbnail: detail.readableProduct.series.thumbnailUri,
            series: series,
            site: site,
        }
    }
}
