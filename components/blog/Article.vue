<script lang="ts">
import { defineComponent } from 'vue';
import { useContent, useContentHead } from '#imports';

export default defineComponent({
    setup() {
        const { page: article } = useContent();
        useContentHead(article);

        return {
            article
        };
    }
});
</script>

<template>
    <article class="blog-article">
        <NuxtPicture v-if="article" class="blog-article-image" :src="article.image" />
        <slot />
    </article>
</template>

<style lang="scss">
.blog-article {
    font-size: var(--font-size-lg);
    max-width: 720px;

    .blog-article-image img {
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        max-width: 100%;
        margin-bottom: var(--margin-bottom-2);
    }
}
</style>
