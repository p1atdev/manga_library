<script lang="ts" setup>
import { Manga } from "~~/src/types/manga"

type Props = {
    manga: Manga
}

const { manga } = defineProps<Props>()

const mangaUrl = ref(`/manga?url=${manga.url}`)

// console.log(mangaUrl.value)
</script>

<template>
    <div flex px="sm:8 md:12 lg:2" py="2">
        <!-- <div h-40 w-40 object-cover rounded> -->
        <NuxtLink :to="mangaUrl">
            <a h-40 w-40>
                <img object-cover rounded :src="manga.image" />
            </a>
        </NuxtLink>
        <!-- </div> -->

        <div pl-4 w-full>
            <div class="text-sm text-gray-500">{{ manga.site.title }}</div>
            <NuxtLink :to="mangaUrl">
                <a>
                    <div class="text-2xl font-semibold">{{ manga.title }}</div>
                </a>
            </NuxtLink>

            <div class="text-gray-500">{{ manga.author }}</div>

            <div flex>
                <div grid grid-cols-2 my-2 gap-2>
                    <div
                        class="col-span-2 p-2 px-4 bg-slate-100 dark:bg-slate-500 rounded hover:ring-2 hover:shadow-sm"
                    >
                        <NuxtLink :to="mangaUrl">
                            <a w-full h-full>
                                <div flex class="items-center gap-1">
                                    <div i-bx-detail />
                                    <div>詳細</div>
                                </div>
                            </a>
                        </NuxtLink>
                    </div>

                    <a
                        v-if="manga.first_episode_url != ''"
                        class="p-2 px-4 bg-slate-200 dark:bg-slate-700 rounded hover:ring-2"
                        :href="manga.first_episode_url"
                        target="_blank"
                    >
                        <div>1話</div>
                    </a>
                    <div v-else class="p-2 px-4 bg-slate-200 dark:bg-slate-700 rounded opacity-50">
                        <div>1話</div>
                    </div>

                    <a
                        v-if="manga.last_episode_url != ''"
                        class="p-2 px-4 bg-slate-200 dark:bg-slate-700 rounded hover:ring-2 hover:shadow-sm"
                        :href="manga.last_episode_url"
                        target="_blank"
                    >
                        <div>最新話</div>
                    </a>
                    <div v-else class="p-2 px-4 bg-slate-200 dark:bg-slate-700 rounded opacity-50 cursor-default">
                        <div>最新話</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
