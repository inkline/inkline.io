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
@import '@inkline/inkline/css/mixins';

#blog-article-page {
    display: flex;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
}

.blog-article {
    font-size: var(--font-size-lg);
    line-height: 1.65;
    max-width: 720px;

    .blog-article-image {
        margin-left: -72px;
        margin-right: -72px;

        img {
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            max-width: calc(100% + 144px);
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

@include breakpoint-down('xl') {
    #blog-article-layout {
        .app-docs-page-sidebar {
            display: none;
        }
    }
}

@include breakpoint-down('md') {
    .blog-article {
        max-width: 100%;
        padding: var(--padding);

        .blog-article-image {
            margin-left: 0;
            margin-right: 0;

            img {
                max-width: 100%;
            }
        }
    }
}
</style>
