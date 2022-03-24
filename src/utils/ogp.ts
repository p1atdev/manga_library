import { DOMParser } from "@xmldom/xmldom"

import { OGP } from "../types/ogp"

export class OGPParser {
    parse(html: string): OGP {
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, "text/html")

        const metaTags = doc.getElementsByTagName("meta")

        const ogp: OGP = {
            title: "",
            description: "",
            image: "",
            url: "",
        }

        for (const meta of Array.from(metaTags)) {
            const property = meta.getAttribute("property")
            const content = meta.getAttribute("content")

            switch (property) {
                case "og:title": {
                    ogp.title = content
                    break
                }
                case "og:description": {
                    ogp.description = content
                    break
                }
                case "og:image": {
                    ogp.image = content
                    break
                }
                case "og:url": {
                    ogp.url = content
                    break
                }

                case "twitter:title": {
                    ogp.title = content
                    break
                }
                case "twitter:description": {
                    ogp.description = content
                    break
                }
                case "twitter:image": {
                    ogp.image = content
                    break
                }

                default: {
                    break
                }
            }
        }

        return ogp
    }
}
