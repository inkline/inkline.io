<script lang="ts" setup>
import { definePageMeta } from '#imports';

definePageMeta({
    layout: 'blog-article'
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
