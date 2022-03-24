import { useBody, useCookies, useQuery } from "h3"
import type { IncomingMessage, ServerResponse } from "http"
import { OGPParser } from "../../utils/ogp"
import { OGP } from "../../types/ogp"

export default async (req: IncomingMessage, res: ServerResponse): Promise<OGP> => {
    const query = useQuery(req)

    const url = query.url

    if (!url) {
        res.statusCode = 400
        return
    }

    const parser = new OGPParser()

    switch (typeof url) {
        case "string": {
            const html = await fetch(url).then((r) => r.text())
            const ogp = parser.parse(html)

            return ogp
        }

        case "object": {
            console.log(url)
            console.log(typeof url)

            break
        }

        default: {
            break
        }
    }

    res.statusCode = 400
    return
}
