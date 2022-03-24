<script lang="ts" setup>
type Props = {
    show: boolean
    // searchQuery: string
}

const { show } = defineProps<Props>()

const emit = defineEmits<{
    onSelect: (value: string) => void
}>()
</script>

<template>
    <div
        v-if="show"
        class="absolute z-10 w-full rounded-b-3xl shadow-md"
        bg="white dark:zinc-700"
        border="t gray-200 dark:stone-600 "
    >
        <!-- TODO: ここの検索候補部分 -->
        <div class="h-md">
            <button
                appearance-none
                w-full
                @click="
                    () => {
                        $emit('suggest', 'タコピー')
                    }
                "
            >
                <div class="hover:bg-gray-100 hover:dark:bg-zinc-800">
                    <div flex px-11>
                        <p align="left" py-3 w-full userselect-none cursor="pointer">タコピー</p>
                        <button
                            py-2
                            @click="
                                (event) => {
                                    event.preventDefault()
                                    $emit('suggest', 'タコピー')
                                }
                            "
                        >
                            <div i-ph-arrow-up-left />
                        </button>
                    </div>
                </div>
            </button>
        </div>
    </div>
</template>
