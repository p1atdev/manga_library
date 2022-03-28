<script lang="ts" setup>
// console.log(mangaUrl.value)
</script>

<template>
    <div flex px="sm:8 md:12 lg:2" py="2" animate-pulse>
        <div h-40 w-40 object-cover rounded>
            <!-- サムネイル -->
            <div h-40 w-40 rounded bg-slate-500></div>
        </div>

        <div pl-4 w-full>
            <div class="py-1 w-8 h-2 rounded bg-slate-300">
                <!-- サイト名 -->
            </div>

            <div class="py-2 w-12 h-4 rounded-md bg-slate-500">
                <!-- 漫画タイトル -->
            </div>

            <div class="py-1 w-6 h-3 text-slate-400">
                <!-- 著者 -->
            </div>

            <div flex>
                <div grid grid-cols-2 my-2 gap-2>
                    <div class="col-span-2 p-2 px-4 bg-slate-100 dark:bg-slate-500 rounded">
                        <div w-14 h-6>
                            <!-- 詳細ボタン -->
                        </div>
                    </div>

                    <div class="p-2 px-4 bg-slate-200 dark:bg-slate-700 rounded">
                        <div w-8 h-6>
                            <!-- 最新話ボタン -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
