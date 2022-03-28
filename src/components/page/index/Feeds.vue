<script lang="ts" setup>
import { Feed } from "~~/src/types/feed"
import FeedCell from "../../common/feed/FeedCell.vue"

type Props = {
    feeds: Feed[]
}

const { feeds } = defineProps<Props>()
</script>

<template>
    <div lg="grid grid-cols-2">
        <div v-for="feed of feeds" :key="feed.mangaTitle">
            <FeedCell :feed="feed" />
        </div>
    </div>
</template>
