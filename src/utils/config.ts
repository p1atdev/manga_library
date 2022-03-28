import config from "#config"

export const supportedSites = async () => {
    const url = config.VERCEL_ENV ? "https://" + config.VERCEL_URL ?? window.location.origin : "http://localhost:3000"

    const json = await fetch(url + "/assets/sites.json").then((res) => res.json())

    return json
}
