import { OGP } from "./ogp"
import { Site } from "./site"

export interface Manga extends OGP {
    author: string
    first_episode_url?: string
    last_episode_url?: string
    site: Site
}
