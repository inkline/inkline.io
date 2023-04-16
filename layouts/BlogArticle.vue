<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    }
});
</script>

<template>
    <LayoutsContent type="blog-article" :sidebar="false">
        <article class="blog-article">
            <slot />
        </article>
    </LayoutsContent>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

#blog-article-layout {
    transition: background var(--transition-duration) var(--transition-timing-function);

    .light-theme & {
        background: var(--color-white);
    }

    .dark-theme & {
        background: var(--color-dark-shade-100);
    }
}

#blog-article-page {
    display: flex;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
}

.blog-article {
    margin-top: var(--margin-top-2);
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

        .blog-article-image {
            margin-left: 0;
            margin-right: 0;

            img {
                width: 100%;
                max-width: 100%;
            }
        }
    }
}
</style>
