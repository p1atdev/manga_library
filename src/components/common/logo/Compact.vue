<script lang="ts" setup>
const config = useRuntimeConfig()
</script>

<template>
    <NuxtLink to="/">
        <div class="flex items-center px-8">
            <div i-icomoon-free-library class="text-2xl md:text-3xl" />
            <p class="pl-2 text-3xl md:text-4xl font-bold">{{ config.SITE_TITLE }}</p>
        </div>
    </NuxtLink>
</template>
