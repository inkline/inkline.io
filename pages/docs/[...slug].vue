<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { definePageMeta } from '#imports';
import { docsEventBus } from '~/utils';

export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'docs'
        });

        onMounted(() => {
            docsEventBus.emit('page:mounted', new Event('page:mounted'));
        });

        return {};
    }
});
</script>

<template>
    <article id="page">
        <ContentDoc />
    </article>
</template>
