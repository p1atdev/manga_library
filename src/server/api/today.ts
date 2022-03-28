import { useBody, useCookies, useQuery } from "h3"
import type { IncomingMessage, ServerResponse } from "http"
import { Feed } from "~~/src/types/feed"
import { FeedClient } from "~~/src/utils/feed"

export default async (req: IncomingMessage, res: ServerResponse): Promise<Feed[]> => {
    const client = new FeedClient()

    const feeds = await client.getFeeds()

    const todayFeeds = feeds.filter((feed) => {
        return feed.mangaUpdated.getDate() == new Date().getDate()
    })

    return todayFeeds
}
