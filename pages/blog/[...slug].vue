<script lang="ts">
import { defineComponent } from 'vue';
import { definePageMeta } from '#imports';

export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'blog-article'
        });

        return {};
    }
});
</script>

<template>
    <article id="page">
        <ContentDoc v-slot="{ doc }">
            <NuxtPicture
                v-if="doc.image"
                class="blog-article-image"
                :src="doc.image.src"
                :alt="doc.image.alt"
            />
            <ContentRenderer :value="doc" />
        </ContentDoc>
    </article>
</template>
