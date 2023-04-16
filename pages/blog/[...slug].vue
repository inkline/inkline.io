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
    <div id="page">
        <ContentDoc v-slot="{ doc }">
            <NuxtPicture v-if="doc.image" class="blog-article-image" :src="doc.image" />
            <ContentRenderer :value="doc" />
        </ContentDoc>
    </div>
</template>
