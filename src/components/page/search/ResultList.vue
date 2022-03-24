<script lang="ts" setup>
import { Manga } from "~~/src/types/manga"
import ResultListRow from "./ResultListRow.vue"

type Props = {
    result: Manga[]
}

const { result } = defineProps<Props>()
</script>

<template>
    <div lg="grid grid-cols-2">
        <div v-for="manga of result">
            <ResultListRow :manga="manga" />
        </div>
    </div>
</template>
