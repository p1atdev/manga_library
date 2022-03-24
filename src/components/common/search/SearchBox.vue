<script lang="ts" setup>
const focused = ref(false)
</script>

<template>
    <div centerize pt-4 pb-6>
        <div relative>
            <form action="/search">
                <div
                    class="w-full text-lg"
                    w="sm:md md:xl"
                    :rounded="focused ? 't-3xl' : 'full'"
                    :border="focused ? '' : '1 gray-200 dark:stone-600'"
                    :shadow="focused ? 'md' : ''"
                    :bg="focused ? 'dark:stone-700' : 'dark:hover:stone-700'"
                >
                    <div class="flex items-center py-1 pl-5 relative">
                        <div i-fe-search class="text-gray-400"></div>

                        <input
                            class="appearance-none py-2 pl-2 w-full outline-none placeholder-gray-400 bg-transparent"
                            type="search"
                            name="q"
                            placeholder="タコピーの原罪"
                            autocomplete="off"
                            @focusin="focused = true"
                            @focusout="focused = false"
                        />
                    </div>

                    <div
                        v-if="focused"
                        class="absolute z-10 w-full px-1 rounded-b-3xl border-t shadow"
                        bg="white dark:stone-700"
                        border="gray-200 dark:stone-600 "
                    >
                        <!-- TODO: ここの検索候補部分 -->
                        <div class="h-md">
                            <NuxtLink to="/">
                                <div flex><p py-3 pl-11>タコピー</p></div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
