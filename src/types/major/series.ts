export interface EasySeries {
    feed: EasyFeed
}

export interface EasyFeed {
    title: string
    subtitle: string
    updated: Date
    id: string
    link: EasyFeedLink
    entry: EasyEntry[]
}

export interface EasyEntry {
    title: string
    link: EasyLinkElement[]
    id: string
    updated: Date
    content: string
    author: EasyAuthor
}

export interface EasyAuthor {
    name: string
}

export interface EasyLinkElement {
    href: string
    rel?: string
    length?: string
    type?: string
}

export interface EasyFeedLink {
    href: string
}

// 扱いづいらい

export interface Series {
    feed: Feed
}

export interface Feed {
    $: FeedClass
    title: string[]
    subtitle: string[]
    updated: Date[]
    id: string[]
    link: FeedLink[]
    entry: Entry[]
}

export interface FeedClass {
    xmlns: string
    "xmlns:giga": string
}

export interface Entry {
    title: string[]
    link: EntryLink[]
    id: string[]
    updated: Date[]
    "giga:freeTermStartDate": Date[]
    content: ContentElement[]
    author: Author[]
}

export interface Author {
    name: string[]
}

export interface ContentElement {
    _: string
    $: Content
}

export interface Content {
    type: string
}

export interface EntryLink {
    $: Purple
}

export interface Purple {
    href: string
    rel?: string
    length?: string
    type?: string
}

export interface FeedLink {
    $: Fluffy
}

export interface Fluffy {
    href: string
}
