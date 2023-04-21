<script lang="ts">
import { useHead, useSeoMeta } from '#imports';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        useSeoMeta({
            description:
                'Inkline is the intuitive UI Components library for building a high-quality, developer-friendly, configurable, and accessible Vue.js Design System.',
            twitterSite: '@inkline',
            twitterCreator: '@alexgrozav',
            twitterCard: 'summary_large_image',
            ogType: 'website',
            ogImage: 'https://inkline.io/assets/images/og-image.png'
        });

        return {};
    }
});
</script>
<template>
    <main>
        <NuxtLoadingIndicator color="var(--color-primary)" :height="3" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <IToastContainer />
    </main>
</template>
