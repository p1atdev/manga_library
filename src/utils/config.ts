import fs from "fs"
import { resolvePath } from "@nuxt/kit"

export const supportedSites = async () => {
    const sites = fs.readFileSync(await resolvePath("src/public/assets/sites.json"), "utf-8")

    const json = JSON.parse(sites)

    return json
}
