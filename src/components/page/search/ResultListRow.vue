<script lang="ts" setup>
import { Manga } from "~~/src/types/manga"

type Props = {
    manga: Manga
}

const { manga } = defineProps<Props>()
</script>

<template>
    <NuxtLink to="">
        <div flex px="sm:8 md:12 lg:2" py="2">
            <img class="h-40 w-40 object-cover rounded" :src="manga.image" />
            <div pl-4 w-full>
                <div class="text-sm text-gray-500">{{ manga.site.title }}</div>
                <div class="text-2xl font-semibold">{{ manga.title }}</div>
                <div class="text-gray-500">{{ manga.author }}</div>

                <div flex>
                    <div grid grid-cols-2 my-2 gap-2>
                        <div
                            class="col-span-2 p-2 px-4 bg-slate-100 dark:bg-slate-500 rounded hover:ring-2 hover:shadow-sm"
                        >
                            <a href="/">
                                <div flex class="items-center gap-1">
                                    <div i-bx-detail />
                                    <div>詳細</div>
                                </div>
                            </a>
                        </div>

                        <div
                            v-if="manga.first_episode_url != ''"
                            class="p-2 px-4 bg-slate-200 dark:bg-slate-700 rounded hover:ring-2"
                        >
                            <a :href="manga.first_episode_url" target="_blank">1話</a>
                        </div>
                        <div v-else class="p-2 px-4 bg-slate-200 dark:bg-slate-700 rounded opacity-50">
                            <div>1話</div>
                        </div>

                        <div
                            v-if="manga.last_episode_url != ''"
                            class="p-2 px-4 bg-slate-200 dark:bg-slate-700 rounded hover:ring-2 hover:shadow-sm"
                        >
                            <a :href="manga.last_episode_url" target="_blank">最新話</a>
                        </div>
                        <div v-else class="p-2 px-4 bg-slate-200 dark:bg-slate-700 rounded opacity-50 cursor-default">
                            <div>最新話</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
