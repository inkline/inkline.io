<script lang="ts">
import { useHead } from '#imports';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        useHead({
            titleTemplate: (titleChunk) => {
                return titleChunk ? `${titleChunk} - Inkline` : 'Inkline';
            },
            meta: [{ name: 'description', content: 'My amazing site.' }]
        });

        return {};
    }
});
</script>
<template>
    <main>
        <NuxtPage />
    </main>
</template>
