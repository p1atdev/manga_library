import { useBody, useCookies, useQuery } from "h3"
import type { IncomingMessage, ServerResponse } from "http"
import { Suggestion } from "~~/src/types/suggestion"
import { RSSClient } from "~~/src/utils/rss"

export default async (req: IncomingMessage, res: ServerResponse): Promise<Suggestion[]> => {
    const client = new RSSClient()

    // const mangas = await client.search()

    const suggestions = await client.get()

    return suggestions
}
