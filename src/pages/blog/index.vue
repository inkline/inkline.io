<script lang="ts">
import { defineComponent } from 'vue';
import { definePageMeta, useSeoMeta } from '#imports';

export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'blog'
        });

        const title = 'Blog - Inkline';
        const description =
            'Discover the latest updates, tips, and insights on Inkline, the intuitive UI Library for Vue.js 3 Design Systems. Stay informed on developer-friendly features, best practices, and the vibrant Inkline community.';

        useSeoMeta({
            title,
            description,
            ogTitle: title,
            ogDescription: description
        });

        return {};
    }
});
</script>

<template>
    <div id="page">
        <h1 class="_margin-bottom:2">Latest posts</h1>
        <section class="blog-feed" role="feed" aria-busy="false">
            <IRow>
                <ContentList path="/blog" :query="{ sort: { date: -1 } }">
                    <template #default="{ list }">
                        <IColumn
                            v-for="(article, index) in list"
                            :key="article._path"
                            :md="article.featured ? '12' : '6'"
                        >
                            <BlogListItem
                                :article="article"
                                :aria-posinset="index + 1"
                                aria-setsize="-1"
                            />
                        </IColumn>
                    </template>
                    <template #not-found>
                        <p>No articles found.</p>
                    </template>
                </ContentList>
            </IRow>
        </section>
    </div>
</template>
