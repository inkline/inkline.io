<script lang="ts">
import { computed, defineComponent } from 'vue';
import type { PropType } from 'vue';
import { format } from 'date-fns';
import type { Article } from '~/types/blog';

export default defineComponent({
    props: {
        article: {
            type: Object as PropType<Article>,
            required: true
        }
    },
    setup(props) {
        const classes = computed(() => ({
            '-featured': props.article.featured
        }));
        const formattedDate = computed(() => format(new Date(props.article.date), 'MMMM dd, yyyy'));
        const postUrl = computed(() => {
            const date = format(new Date(props.article.date), 'yyyy-MM-dd');

            return `/blog/${date}/${props.article.slug}`;
        });

        return {
            classes,
            formattedDate,
            postUrl
        };
    }
});
</script>

<template>
    <article class="blog-list-item" :class="classes">
        <NuxtLink class="_overlay-link" :to="postUrl" />
        <ICard>
            <template #image>
                <NuxtPicture
                    v-if="article.image"
                    sizes="xs:720px xl:920px"
                    :src="article.image.src"
                    :alt="article.image.alt"
                />
            </template>
            <div class="blog-list-item-tags">
                <span v-for="tag in article.tags" :key="tag" class="blog-list-item-tag">
                    {{ tag }}
                </span>
            </div>
            <h2 class="blog-list-item-title">{{ article.title }}</h2>
            <span class="blog-list-item-date">{{ formattedDate }}</span>
        </ICard>
    </article>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.blog-list-item {
    position: relative;

    &.-featured {
        .card {
            .card-body {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                background: none;
                border: none;
            }
        }

        .blog-list-item-title {
            color: var(--color-white);
            font-size: calc(var(--font-size) * 2);
            margin-bottom: var(--margin-bottom);
            min-height: 0;
        }

        .blog-list-item-tag,
        .blog-list-item-date {
            color: hsla(var(--color-white-h), var(--color-white-s), var(--color-white-l), 0.75);
        }

        @include breakpoint-down('sm') {
            height: 480px;

            .card {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            picture,
            img {
                height: 100%;
                width: 1024px;
            }
        }
    }

    .card {
        z-index: 0;
        overflow: hidden;
        border-radius: var(--border-radius);
    }

    img {
        width: 100%;
        max-width: 100%;
        transition: transform var(--transition-duration) var(--transition-timing-function);
    }

    .card-body {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        z-index: 1;
    }

    &:hover {
        img {
            transform: scale(1.05);
        }
    }
}

.blog-list-item-title {
    min-height: calc(var(--margin-bottom) + 56px);
    font-size: calc(var(--font-size) * 1.5);
    font-weight: var(--font-weight-semibold);
}

.blog-list-item-tag {
    text-transform: uppercase;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    color: var(--text-color-weaker);
    margin-right: var(--margin-right-sm);
}

.blog-list-item-date {
    font-size: var(--font-size-sm);
    color: var(--text-color-weaker);
    margin-top: var(--margin-top-sm);
}
</style>
