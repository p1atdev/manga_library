import { Manga } from "../types/manga"
import { Site } from "../types/site"
import { supportedSites } from "./config"
import { DOMParser } from "@xmldom/xmldom"
import xml2js from "xml2js"
// import htmlparser2 from "htmlparser2"
import { XMLParser } from "fast-xml-parser"
import { JSDOM } from "jsdom"

export class SearchClient {
    // domParser: DOMParser
    xmlParser: XMLParser //xml2js.Parser

    q: string

    constructor(q: string) {
        this.q = q
        this.xmlParser = new XMLParser()
    }

    async search(): Promise<Manga[]> {
        const sites = await supportedSites()

        return (
            await Promise.all(
                sites.major.map(async (site: Site) => {
                    const html = await fetch(site.url + `/search?q=${this.q}`).then((res) => res.text())

                    const doc = new JSDOM(html).window.document

                    const resultItems = doc.querySelectorAll(`ul.${site.search_result_class} li`)

                    const mangaDatas = Array.from(resultItems.values()).map((item) => {
                        const manga = {} as Manga
                        try {
                            manga.site = site
                            manga.title = (() => {
                                const title = item.querySelector("div.title-box p[class='series-title']")
                                return title ? title.innerHTML : ""
                            })()
                            manga.url = (() => {
                                const a = item.querySelector("div.thmb-container a")
                                return a ? a.getAttribute("href") : ""
                            })()
                            manga.image = (() => {
                                const img = item.querySelector("div.thmb-container a img")
                                return img ? img.getAttribute("src") : ""
                            })()
                            // // manga.description = item.querySelector("p[class='series-synopsis']").textContent
                            manga.author = (() => {
                                const author = item.querySelector("div.title-box p[class='author']")

                                return author ? author.textContent : ""
                            })()
                            manga.first_episode_url = (() => {
                                const a = item.querySelector("div.title-box a[class='main-link']")

                                return a ? a.getAttribute("href") : ""
                            })()
                            manga.last_episode_url = (() => {
                                const a = item.querySelector("div.title-box a[class='sub-link']")

                                return a ? a.getAttribute("href") : ""
                            })()
                        } catch (e) {
                            console.log("error:", e)
                        }

                        return manga
                    })

                    return mangaDatas
                })
            )
        ).flat()

        // return mangas
    }
}
