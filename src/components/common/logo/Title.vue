<script lang="ts" setup>
import Icon from "./Icon.vue"

const config = useRuntimeConfig()
</script>

<template>
    <p class="font-bold text-4xl sm:text-5xl text-center">
        {{ config.SITE_TITLE }}
    </p>
</template>
