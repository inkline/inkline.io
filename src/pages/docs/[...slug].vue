<script lang="ts" setup>
import { definePageMeta } from '#imports';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { docsEventBus } from '~/utils';

definePageMeta({
    layout: 'docs'
});

onMounted(() => {
    docsEventBus.emit('page:mounted', new Event('page:mounted'));
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
