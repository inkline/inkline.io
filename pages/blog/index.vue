<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { definePageMeta, queryContent } from '#imports';
import { Article } from '~/types/blog';

export default defineComponent({
    setup() {
        const articles = ref<Article[]>([]);

        definePageMeta({
            layout: 'blog'
        });

        onMounted(async () => {
            try {
                articles.value = (await queryContent('blog')
                    .only(['title', 'slug', 'date', 'tags', 'featured', 'image'])
                    .find()) as Article[];
            } catch (error) {
                console.log(error);
            }
        });

        return {
            articles
        };
    }
});
</script>

<template>
    <NuxtLayout>
        <h1 class="_margin-bottom:2">Latest posts</h1>
        <section class="blog-feed" role="feed" aria-busy="false">
            <IRow>
                <IColumn
                    v-for="(article, index) in articles"
                    :key="article.slug"
                    :md="article.featured ? '12' : '6'"
                >
                    <BlogListItem :article="article" :aria-posinset="index + 1" aria-setsize="-1" />
                </IColumn>
            </IRow>
        </section>
    </NuxtLayout>
</template>
