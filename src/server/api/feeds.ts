import { useBody, useCookies, useQuery } from "h3"
import type { IncomingMessage, ServerResponse } from "http"
import { Feed } from "~~/src/types/feed"
import { FeedClient } from "~~/src/utils/feed"

export default async (req: IncomingMessage, res: ServerResponse): Promise<Feed[]> => {
    const query = useQuery(req)

    const number = parseInt(query.number as string)

    const client = new FeedClient()

    const feeds = await client.getFeeds(number)

    return feeds
}
