<script lang="ts">
import { defineComponent } from 'vue';
import { definePageMeta } from '#imports';

export default defineComponent({
    setup() {
        definePageMeta({
            meta: {
                description: {
                    content:
                        'Inkline is the intuitive UI Components library for building a high-quality, developer-friendly, configurable, and accessible Vue.js Design System.'
                }
            },
            layout: 'default'
        });

        return {};
    }
});
</script>

<template>
    <NuxtLayout>
        <HeadersIndexPage />
        <SectionsUIUXDX />
    </NuxtLayout>
</template>
