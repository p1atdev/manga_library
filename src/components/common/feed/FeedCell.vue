<script lang="ts" setup>
import { Feed } from "~~/src/types/feed"

type Props = {
    feed: Feed
}

const { feed } = defineProps<Props>()

const mangaUrl = ref(`/manga?url=${feed.mangaUrl}`)

// console.log(mangaUrl.value)
</script>

<template>
    <div flex px="sm:8 md:12 lg:2" py="2">
        <div h-40 w-40 object-cover rounded>
            <NuxtLink :to="mangaUrl">
                <a h-40 w-40>
                    <img min-w-40 min-h-40 object="cover" rounded :src="feed.mangaThumbnail" />
                </a>
            </NuxtLink>
        </div>

        <div pl-4 w-full>
            <!-- サイト名 -->
            <div class="text-sm text-gray-500">{{ feed.siteTitle }}</div>
            <NuxtLink :to="mangaUrl">
                <a>
                    <div class="text-2xl font-semibold">{{ feed.mangaTitle }}</div>
                </a>
            </NuxtLink>

            <div class="text-gray-500">{{ feed.author }}</div>

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
                                <div w-full />
                            </a>
                        </NuxtLink>
                    </div>

                    <a
                        v-if="feed.mangaUrl != ''"
                        class="p-2 px-4 bg-slate-200 dark:bg-slate-700 rounded hover:ring-2 hover:shadow-sm"
                        :href="feed.mangaUrl"
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
