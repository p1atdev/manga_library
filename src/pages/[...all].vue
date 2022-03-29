<script lang="ts" setup></script>

<template>
    <div text-center>
        <!-- 404 -->
        <div my-10>
            <h1 text-5xl>404 Not Found</h1>
            <p my-8 text-2xl>お探しのページは見つかりませんでした。</p>
            <a px-5 py-3 rounded text-2xl bg="slate-200 dark:slate-500" href="" @click.prevent="$router.back()">
                <span>前のページに戻る</span>
            </a>
        </div>
    </div>
</template>
