import Parser from "rss-parser"
import { RSS } from "../types/rss"

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
