<script lang="ts">
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
    setup () {
        /**
         * You can use this to manipulate the document head in any components,
         * they will be rendered correctly in the html results with vite-ssg
         *
         * @docs https://github.com/vueuse/head
         */
        useHead({
            title: 'Vue.js UI UX DX Library - Inkline',
            meta: [
                {
                    name: 'description',
                    content: 'Inkline is the intuitive UI UX DX Components library that gives you the foundation for building high-quality, accessible, and customizable Vue.js Design Systems.'
                }
            ]
        });
    }
});
</script>

<template>
    <router-view />
</template>
