<script lang="ts" setup>
import { OGP } from "~~/src/types/ogp"
import OGPCard from "../../common/ogp/OGPCard.vue"

type Props = {
    url: string
}

const { url } = defineProps<Props>()

const ogp = ref<OGP>({
    title: "",
    description: "",
    image: "",
    url: "",
})
</script>

<template>
    <OGPCard
        :url="url"
        @ogp="
            (value) => {
                ogp = value
            }
        "
    >
        <div>
            <p>Title: {{ ogp.title }}</p>
            <p>Description: {{ ogp.description }}</p>
            <p>Image: <img :src="ogp.image" /></p>
        </div>
    </OGPCard>
</template>
