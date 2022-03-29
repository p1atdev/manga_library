import { defineNuxtConfig } from "nuxt3"

const siteName = `漫画図書館 - 無料漫画検索サイト`
const description = `漫画図書館は無料で読める漫画をまとめたサイトです。毎日更新で話題作の漫画を無料で読むことができます。`
const keywords =
    "漫画図書館, 漫画, 図書館, 無料, 無料漫画,  少年ジャンプ, 隣のヤングジャンプ, サンデーうぇぶり, 毎日更新"
const ogImage = "https://raw.githubusercontent.com/p1atdev/manga_library/main/src/public/ogp.png"

export default defineNuxtConfig({
    publicRuntimeConfig: {
        SITE_TITLE: "漫画図書館",
        SITE_URL: process.env.SITE_URL ?? "http://localhost:3000",
    },
    privateRuntimeConfig: {
        VERCEL_ENV: process.env.VERCEL_ENV,
        VERCEL_URL: process.env.VERCEL_URL,
    },
    meta: {
        title: siteName,
        meta: [
            {
                name: "title",
                content: siteName,
            },
            {
                name: "description",
                content: description,
            },
            {
                name: "keywords",
                content: keywords,
            },
            {
                property: "og:title",
                content: siteName,
            },
            {
                property: "og:description",
                content: description,
            },
            {
                property: "og:type",
                content: "website",
            },
            {
                property: "og:url",
                content: "https://mangalib.vercel.app/",
            },
            {
                property: "og:image",
                content: ogImage,
            },
            {
                property: "og:site_name",
                content: siteName,
            },
            {
                name: "twitter:card",
                content: "summary_large_image",
            },
            // {
            //     name: "twitter:site",
            //     content: "@",
            // },
            {
                name: "twitter:title",
                content: siteName,
            },
            {
                name: "twitter:description",
                content: description,
            },
            {
                name: "twitter:image",
                content: ogImage,
            },
        ],
    },
    buildModules: ["@vueuse/nuxt", "@unocss/nuxt", "@pinia/nuxt"],
    vueuse: {
        ssrHandlers: true,
    },
    unocss: {
        uno: true,
        attributify: true,
        preflight: true,
        icons: {
            scale: 1.2,
        },
        shortcuts: [["centerize", "grid grid-cols-1 place-items-center"]],
    },
    srcDir: "./src",
})
