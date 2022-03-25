<script lang="ts" setup>
// import OGPLinkCard from "../components/ui/ogp/OGPLinkCard.vue"
import LogoIcon from "../components/common/logo/Icon.vue"
import LogoTitle from "../components/common/logo/Title.vue"
import SearchBox from "../components/common/search/Box.vue"

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
        </div>
    </NuxtLayout>
</template>
