<script lang="ts" setup>
import ResultList from "../components/page/search/ResultList.vue"
import SkeltonGrid from "../components/common/feed/SkeltonGrid.vue"

const route = useRoute()

const searchQuery = route.query.q as string

// 検索する
const { data: result } = await useFetch("/api/search", {
    params: {
        q: searchQuery,
    },
})

// console.log("results:", results)
</script>

<template>
    <div px="sm:8 md:10">
        <!-- TODO: 検索結果 -->
        <ClientOnly>
            <div v-if="result">
                <ResultList :result="result" />
            </div>
            <div v-else>
                <SkeltonGrid />
            </div>

            <template #fallback>
                <SkeltonGrid />
            </template>
        </ClientOnly>
    </div>
</template>
