<script lang="ts" setup>
import { definePageMeta, useSeoMeta } from '#imports';

definePageMeta({
    layout: 'default'
});

const title = 'Vue.js UI UX DX Library - Inkline';
const description =
    'Inkline is the intuitive UI Components library for building a high-quality, developer-friendly, configurable, and accessible Vue.js Design System.';

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description
});
</script>

<template>
    <div>
        <HeadersIndexPage />
        <SectionsUIUXDX />
        <SectionsNewsletter />
        <SectionsSponsors />
    </div>
</template>
