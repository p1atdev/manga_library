<script lang="ts" setup>
import ResultList from "../components/page/search/ResultList.vue"

const route = useRoute()

const searchQuery = route.query.q as string

// TODO: 検索する
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
            <ResultList :result="result" />
        </ClientOnly>
    </div>
</template>
