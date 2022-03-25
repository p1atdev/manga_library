<script lang="ts" setup>
import { format } from "date-fns"
import ja from "date-fns/locale/ja"
import CompactLogo from "../components/common/logo/Compact.vue"

const router = useRouter()

const url = useRoute().query.url as string

if (!url || url.length === 0) {
    router.push("/")
}

// TODO: ここでメジャー漫画サイトかチェック

const { data: meta } = await useFetch("/api/major/manga", {
    method: "GET",
    params: {
        url: url + ".json",
    },
})

const reverse = ref(false)
</script>

<template>
    <div px="sm:8 md:10">
        <div px="8" py="4" md="flex gap-x-10 " lg="gap-x-20">
            <aside
                sticky
                h-screen
                top-0
                pb-40
                overflow-y-scroll
                overscroll-contain
                class="grid place-items-center md:place-items-start no-scrollbar"
                md="max-w-xs"
            >
                <div max-w="sm md:max">
                    <p py-2 text-xl text-semibold opacity-75>{{ meta.site.title }}</p>
                    <img class="w-full rounded" :src="meta.thumbnail" />
                    <div class="py-2">
                        <p class="pt-4 pb-1 text-3xl font-bold">{{ meta.title }}</p>
                        <p class="opacity-75">{{ meta.author }}</p>
                    </div>
                    <div py-2>
                        <p text-lg font-semibold>概要</p>
                        <p overflow="scroll">{{ meta.description }}</p>
                    </div>
                </div>
                <!-- {{ meta }} -->
            </aside>
            <div w-full>
                <div flex items-baseline>
                    <div w-full py-2 text-xl>エピソード一覧</div>
                    <button p-2 @click="reverse = !reverse">
                        <div text-2xl :class="reverse ? 'i-bi-sort-up' : 'i-bi-sort-down'" />
                    </button>
                </div>

                <div class="overflow-y-scroll">
                    <div
                        v-for="episode in reverse
                            ? Array.from(meta.series.feed.entry).reverse()
                            : meta.series.feed.entry"
                        :key="episode.id"
                    >
                        <a
                            :href="
                                episode.link.find((link) => {
                                    return link.type == undefined && link.href !== undefined
                                }).href
                            "
                            target="_target"
                        >
                            <div p-2 px-4 w-full rounded cursor="pointer" hover="bg-gray-100 dark:bg-zinc-800">
                                <div lg:flex gap-x-4 items-top>
                                    <div>
                                        <!-- {{ episode.link }} -->
                                        <img
                                            class="max-w-48 border"
                                            :src="
                                                episode.link.find((link) => {
                                                    return link.type !== undefined && link.href !== undefined
                                                }).href
                                            "
                                        />
                                    </div>
                                    <div>
                                        <div text-2xl font-medium>{{ episode.title }}</div>
                                        <div text-lg opacity-75>
                                            {{ format(new Date(episode.updated), "MMM do (EEE)", { locale: ja }) }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
