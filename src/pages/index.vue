<template>
    <main id="index-page">
        <index-header-section />
        <index-os-awards-section class="_lg:hidden" />
        <hr>
        <index-ui-ux-dx-section />
        <index-sponsors-section />
        <index-design-system-section />
        <!--<index-example-embed-section />-->
    </main>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';

export default defineComponent({
    setup () {
        const name = ref('');
        const router = useRouter();
        const { t } = useI18n();

        const title = 'Vue.js UI UX DX Library - Inkline';
        const description = 'Inkline is the intuitive UI Components library that gives you a developer-friendly foundation for building high-quality, accessible, and customizable Vue.js 3 Design Systems.';

        useHead({
            title,
            meta: [
                {
                    name: 'og:title',
                    content: title
                },
                {
                    name: 'description',
                    content: description
                },
                {
                    name: 'og:description',
                    content: description
                }
            ]
        });

        return {
            name,
            router,
            t
        };
    }
});
</script>

<route lang="yaml">
meta:
    layout: home
</route>
