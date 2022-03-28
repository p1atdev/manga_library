<script lang="ts" setup>
type Props = {
    show: boolean
    // searchQuery: string
}

const { show } = defineProps<Props>()

const { data: suggestions } = await useFetch("/api/suggestions")

const router = useRouter()

// console.log(suggestions.value)
</script>

<template>
    <div
        v-if="show"
        class="absolute z-10 w-full rounded-b-3xl shadow-md"
        bg="white dark:zinc-700"
        border="t gray-200 dark:stone-600 "
    >
        <div class="max-h-md overflow-auto">
            <div v-for="suggestion of suggestions" :key="suggestion.content">
                <button
                    appearance-none
                    w-full
                    type="button"
                    @click="
                        () => {
                            $emit('suggest', suggestion.content)
                            router.push({
                                path: '/search',
                                query: {
                                    q: suggestion.content,
                                },
                            })
                        }
                    "
                >
                    <div class="hover:bg-gray-100 hover:dark:bg-zinc-800">
                        <div flex px-11>
                            <p align="left" py-3 w-full userselect-none cursor="pointer">{{ suggestion.content }}</p>
                            <!-- <button
                                py-2
                                @click="
                                    (event) => {
                                        $emit('suggest', suggestion.content)
                                    }
                                "
                                type="button"
                            >
                                <div i-ph-arrow-up-left />
                            </button> -->
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>
