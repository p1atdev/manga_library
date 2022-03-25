import { RSS, RSSItem } from "./rss"
import { Site } from "./site"

export interface Suggestion extends RSSItem {
    site: {
        title: string
    }
}
