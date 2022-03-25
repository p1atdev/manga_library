import { Site } from "../site"
import { EasySeries } from "./series"

// export interface MajorMangaInfo {
//     detail: MajorMangaDetail
//     meta: MajorMangaMeta
// }

export interface MajorMangaDetail {
    readableProduct: ReadableProduct
}

export interface MajorMangaMeta {
    title: string
    description: string
    author: string
    thumbnail: string
    series: EasySeries
    site: Site
}

export interface ReadableProduct {
    finishReadingNotificationUri: null
    hasPurchased: boolean
    id: string
    imageUrisDigest: string
    isPublic: boolean
    nextReadableProductUri: string
    number: number
    pageStructure: PageStructure
    permalink: string
    prevReadableProductUri: null
    publishedAt: Date
    series: Series
    title: string
    toc: null
    typeName: string
}

export interface PageStructure {
    choJuGiga: string
    pages: Page[]
    readingDirection: string
    startPosition: string
}

export interface Page {
    contentStart?: string
    height?: number
    src?: string
    type: Type
    width?: number
    contentEnd?: string
}

export enum Type {
    BackMatter = "backMatter",
    Link = "link",
    Main = "main",
    Other = "other",
}

export interface Series {
    id: string
    thumbnailUri: string
    title: string
}
