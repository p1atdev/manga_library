import { defineNuxtConfig } from "nuxt3"

export default defineNuxtConfig({
    publicRuntimeConfig: {
        SITE_TITLE: "漫画図書館",
    },
    meta: {
        title: "Vitesse Nuxt 3",
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
    // components: {
    //     global: true,
    //     dirs: ["~/components"],
    // },
})
