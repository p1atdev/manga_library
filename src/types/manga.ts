import { OGP } from "./ogp"
export interface Manga extends OGP {
    author: string
    first_episode_url?: string
    last_episode_url?: string
    site_title: string
}
