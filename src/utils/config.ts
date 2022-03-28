// import fs from "fs"
// import { resolvePath } from "@nuxt/kit"

export const supportedSites = async () => {
    const url = process.env.VERCEL_ENV ? "http://localhost:3000" : process.env.VERCEL_URL ?? window.location.origin

    // const sites = fs.readFileSync(await resolvePath(`public/assets/sites.json`), "utf-8")
    // const

    // const json = JSON.parse(sites)

    const json = await fetch(url + "/assets/sites.json").then((res) => res.json())

    return json
}
