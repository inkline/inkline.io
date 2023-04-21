<script lang="ts">
import { defineComponent } from 'vue';
import { definePageMeta, useSeoMeta } from '#imports';

export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'default'
        });

        const title = 'Vue.js UI UX DX Library';
        const description =
            'Inkline is the intuitive UI Components library for building a high-quality, developer-friendly, configurable, and accessible Vue.js Design System.';

        useSeoMeta({
            title,
            description,
            ogTitle: title,
            ogDescription: description
        });

        return {};
    }
});
</script>

<template>
    <div>
        <HeadersIndexPage />
        <SectionsUIUXDX />
        <SectionsSponsors />
    </div>
</template>
