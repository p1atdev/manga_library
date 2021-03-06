export interface RSS {
    items: RSSItem[]
    link: string
    title: string
    lastBuildDate: Date
}

export interface RSSItem {
    title: string
    link: string
    pubDate: string
    author: string
    content: string
    contentSnippet: string
    id: string
    isoDate: string
}
