<script lang="ts" setup>
import { Ref } from "nuxt3/dist/app/compat/capi"
import { OGP } from "~~/src/types/ogp"

type Props = {
    url: string
}

const { url } = defineProps<Props>()

const { data: ogp } = await useFetch(`/api/ogpcard`, {
    method: "GET",
    params: {
        url: url,
    },
})

const emit = defineEmits<{
    (e: "ogp", ogp: OGP): OGP
}>()

emit("ogp", ogp.value)
</script>

<template>
    <ClientOnly>
        <slot />
    </ClientOnly>
</template>
