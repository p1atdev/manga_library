<script lang="ts" setup>
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
</script>

<template>
    <div px="sm:8 md:10">
        <CompactLogo />

        <div px="8" py="12" md="grid grid-cols-7 gap-x-20">
            <div col-span-3>
                <p py-2 text-xl text-semibold opacity-75>{{ meta.site.title }}</p>
                <img class="w-full rounded" :src="meta.thumbnail" />
                <div class="py-2">
                    <p class="pt-4 pb-1 text-3xl font-bold">{{ meta.title }}</p>
                    <p class="opacity-75">{{ meta.author }}</p>
                </div>
                <div py-2>
                    <p text-lg font-semibold>概要</p>
                    <p>{{ meta.description }}</p>
                </div>
                <!-- {{ meta }} -->
            </div>
            <div col-span-4>
                <div>Episodes</div>
                <!-- エピソード一覧 -->
            </div>
        </div>
    </div>
</template>
