<script lang="ts" setup>
import CompactLogo from "../components/common/logo/Compact.vue"

const route = useRoute()

const searchQuery = route.query.q

// TODO: 検索する
</script>

<template>
    <div>
        <CompactLogo />

        <div>q: {{ searchQuery }}</div>

        <!-- TODO: 検索結果 -->
    </div>
</template>
