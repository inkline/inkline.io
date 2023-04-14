<script lang="ts">
import { defineComponent } from 'vue';
import { definePageMeta } from '#imports';

export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'blog'
        });

        return {};
    }
});
</script>

<template>
    <NuxtLayout>
        <h1 class="_margin-bottom:2">Latest posts</h1>
        <section class="blog-feed" role="feed" aria-busy="false">
            <IRow>
                <ContentList path="/blog">
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
    </NuxtLayout>
</template>
