export interface Feed {
    siteTitle: string
    siteUrl: string
    siteUpdated: Date
    seriesTitle: string
    mangaTitle: string
    mangaUrl: string
    mangaThumbnail: string
    mangaUpdated: Date
    author: string
}

export interface ComplexFeed {
    // $: ComplexFeedClass
    title: string[]
    subtitle: string[]
    updated: Date[]
    id: string[]
    link: ComplexFeedLink[]
    entry: ComplexEntry[]
}

// export interface ComplexFeedClass {
//     xmlns: string
//     "xmlns:giga": string
// }

export interface ComplexEntry {
    title: string[]
    link: ComplexEntryLink[]
    id: string[]
    updated: Date[]
    // "giga:freeTermStartDate"?: Date[]
    content: ComplexContentElement[]
    author: ComplexAuthor[]
}

export interface ComplexAuthor {
    name: string[]
}

export interface ComplexContentElement {
    _: string
    $: ComplexContent
}

export interface ComplexContent {
    type: string
}

export interface ComplexEntryLink {
    $: ComplexPurple
}

export interface ComplexPurple {
    href: string
    rel?: string // "enclosure"
    length?: string
    type?: string // "image/jpeg"
}

export interface ComplexFeedLink {
    $: ComplexFluffy
}

export interface ComplexFluffy {
    href: string
}
