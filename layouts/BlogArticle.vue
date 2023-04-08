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
    <LayoutsContent type="blog-article" :sidebar="false">
        <article class="blog-article">
            <NuxtPicture v-if="article" class="blog-article-image" :src="article.image" />
            <slot />
        </article>
    </LayoutsContent>
</template>

<style lang="scss">
#blog-article-page {
    display: flex;
    justify-content: center;
}

.blog-article {
    font-size: var(--font-size-lg);
    line-height: 1.65;
    max-width: 720px;

    .blog-article-image {
        margin-left: -80px;
        margin-right: -80px;

        img {
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            max-width: calc(100% + 160px);
            margin-bottom: var(--margin-bottom-3);
        }
    }

    h1 {
        margin-bottom: var(--margin-bottom-3);

        &::after {
            display: none !important;
        }
    }
}
</style>
