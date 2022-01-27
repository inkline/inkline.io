<script lang="ts">
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup () {
        const route = useRoute();

        /**
         * You can use this to manipulate the document head in any components,
         * they will be rendered correctly in the html results with vite-ssg
         *
         * @docs https://github.com/vueuse/head
         */
        useHead({
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
                {
                    property: 'og:image',
                    content: 'https://inkline.io/assets/images/og-image.png'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                {
                    name: 'twitter:site',
                    content: '@inkline'
                },
                {
                    name: 'twitter:creator',
                    content: '@alexgrozav'
                },
                {
                    property: 'og:url',
                    content: `https://inkline.io${route.fullPath}`
                }
            ]
        });
    }
});
</script>

<template>
    <router-view />
</template>
