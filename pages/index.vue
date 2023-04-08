<script lang="ts">
import { defineComponent } from 'vue';
import { definePageMeta, useSeoMeta } from '#imports';

export default defineComponent({
    setup() {
        useSeoMeta({
            title: 'Inkline - Vue.js Design System',
            description:
                'Inkline is the intuitive UI Components library for building a high-quality, developer-friendly, configurable, and accessible Vue.js Design System.'
        });

        definePageMeta({
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
