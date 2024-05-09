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
        <ContentDoc>
            <template #not-found>
                <AppError />
            </template>
        </ContentDoc>
    </article>
</template>
