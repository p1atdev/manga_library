<script lang="ts" setup>
import SearchSuggestions from "./Suggestions.vue"

type Props = {
    q?: string
}

const { q } = defineProps<Props>()

const target = ref()

const focused = ref(false)
const canFocusout = ref(false)
</script>

<template>
    <div
        mt-4
        pb-6
        max-w="sm:lg md:xl lg:2xl"
        min-w="full md:md lg:lg xl:xl"
        px="0 sm:12 md:0"
        @mouseenter="canFocusout = false"
        @mouseleave="canFocusout = true"
    >
        <div relative>
            <form action="/search">
                <div
                    class="w-full text-lg"
                    :rounded="focused ? 't-3xl' : 'full'"
                    :border="focused ? '1 transparent' : '1 gray-200 dark:stone-600'"
                    :shadow="focused ? 'md' : ''"
                    :bg="focused ? 'dark:zinc-700' : 'dark:hover:zinc-700'"
                >
                    <div class="flex items-center py-1 pl-5 w-full relative">
                        <div i-fe-search class="text-gray-400"></div>

                        <input
                            class="appearance-none py-2 pl-2 w-full outline-none placeholder-gray-400 bg-transparent"
                            type="search"
                            name="q"
                            v-model="q"
                            placeholder="タコピーの原罪"
                            autocomplete="off"
                            tabindex="0"
                            ref="target"
                            @focusin="focused = true"
                            @focusout="focused = !canFocusout"
                        />
                    </div>

                    <SearchSuggestions
                        :show="focused"
                        @suggest="
                            (value) => {
                                q = value
                                target.focus()
                            }
                        "
                    />
                </div>
            </form>
        </div>
    </div>
</template>
