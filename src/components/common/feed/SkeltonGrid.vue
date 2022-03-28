<script lang="ts" setup>
import SkeltonCell from "./SkeltonCell.vue"
</script>

<template>
    <div lg="grid grid-cols-2">
        <div v-for="index of Array(4)" :key="index">
            <SkeltonCell />
        </div>
    </div>
</template>
