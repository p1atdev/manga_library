<script lang="ts" setup>
import CompactLogo from "../components/common/logo/Compact.vue"
import OGPLinkCard from "../components/ui/ogp/OGPLinkCard.vue"
import SearchBox from "../components/common/search/SearchBox.vue"

const route = useRoute()

const searchQuery = route.query.q as string

// TODO: 検索する
const { data: results } = await useFetch("/api/search", {
    params: {
        q: searchQuery,
    },
})

// console.log("results:", results)
</script>

<template>
    <div px="sm:8 md:10">
        <CompactLogo />

        <div ml="8">
            <SearchBox :q="searchQuery" />
        </div>

        <!-- TODO: 検索結果 -->
        <ClientOnly>
            <div lg="grid grid-cols-2">
                <div v-for="manga of results">
                    <div flex px="sm:12 md:20 lg:2" py="2">
                        <img class="h-36 w-36 object-cover md:h-36 rounded" :src="manga.image" />
                        <div pl-4>
                            <div class="text-sm text-gray-500">{{ manga.site_title }}</div>
                            <div class="text-2xl font-semibold">{{ manga.title }}</div>
                            <div class="text-gray-500">{{ manga.author }}</div>
                            <div flex py-2 gap-x-2>
                                <!-- <div p-2 bg-gray-200 rounded hover:ring> -->
                                <div
                                    v-if="manga.first_episode_url != ''"
                                    class="p-2 bg-slate-200 dark:bg-slate-700 rounded hover:ring-2"
                                >
                                    <a :href="manga.first_episode_url" target="_blank">1話から読む</a>
                                </div>
                                <div v-else class="p-2 bg-slate-200 dark:bg-slate-700 rounded opacity-50">
                                    <div>1話から読む</div>
                                </div>

                                <!-- </div> -->

                                <div
                                    v-if="manga.last_episode_url != ''"
                                    class="p-2 bg-slate-200 dark:bg-slate-700 rounded hover:ring-2 hover:shadow-sm"
                                >
                                    <a :href="manga.last_episode_url" target="_blank"> 最新話を読む </a>
                                </div>
                                <div v-else class="p-2 bg-slate-200 dark:bg-slate-700 rounded opacity-50">
                                    <div>最新話を読む</div>
                                </div>

                                <!-- </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ClientOnly>
    </div>
</template>
