<script lang="ts" setup>
// import OGPLinkCard from "../components/ui/ogp/OGPLinkCard.vue"
import LogoIcon from "../components/common/logo/Icon.vue"
import LogoTitle from "../components/common/logo/Title.vue"
import SearchBox from "../components/common/search/Box.vue"
import Feeds from "../components/page/index/Feeds.vue"
import { format } from "date-fns"
import ja from "date-fns/locale/ja/index.js"

// TODO: 本日更新のフィードを取得

const { data: feeds } = await useFetch("/api/today")

// console.log(feeds)

// 曜日を取得 例: "月"
const weekDay = format(new Date(), "eeee", { locale: ja })

definePageMeta({
    layout: false,
})
</script>

<template>
    <NuxtLayout name="index">
        <div>
            <div mt="20">
                <LogoIcon />
                <LogoTitle my="2" />
            </div>

            <div centerize>
                <SearchBox />
            </div>

            <div my-20 mx="4 sm:8 md:16 lg:24 xl:36">
                <div p-4 text-4xl font-semibold>
                    🔥本日更新🔥<span px-2 text-3xl>({{ weekDay }})</span>
                </div>
                <Feeds :feeds="feeds" />
            </div>
        </div>
    </NuxtLayout>
</template>
