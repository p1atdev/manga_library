<script lang="ts" setup>
import SearchBox from "../components/common/search/Box.vue"
import CompactLogo from "../components/common/logo/Compact.vue"

const route = useRoute()

const q = route.query.q as string
</script>

<template>
    <div flex flex-col h-screen>
        <header styicky top-0 z-50>
            <div md:flex px-8>
                <div flex-none>
                    <CompactLogo />
                </div>
                <div grow />

                <div shrink>
                    <SearchBox :q="q" />
                </div>
            </div>
        </header>

        <div p-4 flex-1 overflow-y-auto>
            <slot />

            <Footer />
        </div>
    </div>
</template>
