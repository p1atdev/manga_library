import { useBody, useCookies, useQuery } from "h3"
import type { IncomingMessage, ServerResponse } from "http"
import { MajorMangaMeta } from "~~/src/types/major/detail"
import { EasySeries } from "~~/src/types/major/series"
import { MajorManga } from "~~/src/utils/major/manga"

export default async (req: IncomingMessage, res: ServerResponse): Promise<MajorMangaMeta> => {
    const query = useQuery(req)

    const url = query.url as string

    const manga = new MajorManga(url)

    const series = await manga.getSeries()

    return series
}
