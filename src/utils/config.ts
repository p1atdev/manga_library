export const supportedSites = async () => {
    const config = useRuntimeConfig()

    const url = config.VERCEL_ENV ? "http://localhost:3000" : config.VERCEL_URL ?? window.location.origin

    const json = await fetch(url + "/assets/sites.json").then((res) => res.json())

    return json
}
