<script lang="ts" setup>
import ResultList from "../components/page/search/ResultList.vue"

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
            <ResultList :result="result" />
            <template #fallback>
                <!-- ローディング -->
                <div centerize py-8>
                    <div flex items-center text-3xl>
                        <div i-eos-icons-loading />
                        <p>読み込み中...</p>
                    </div>
                </div>
            </template>
        </ClientOnly>
    </div>
</template>
