import { useBody, useCookies, useQuery } from "h3"
import type { IncomingMessage, ServerResponse } from "http"
import { Manga } from "~~/src/types/manga"
import { SearchClient } from "~~/src/utils/search"

export default async (req: IncomingMessage, res: ServerResponse): Promise<Manga[]> => {
    const query = useQuery(req)

    const searchQuery = query.q as string

    const client = new SearchClient(searchQuery)

    const mangas = await client.search()

    return mangas
}
