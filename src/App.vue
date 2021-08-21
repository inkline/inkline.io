<script lang="ts">
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
    setup() {
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
                    content: 'Inkline is the customizable Vue.js UI/UX Library, designed for creating flawless responsive web applications with the best user and developer experience.'
                },
            ],
        });
    }
});
</script>

<template>
    <router-view />
</template>
