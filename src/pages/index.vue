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

        useHead({
            title: 'Vue.js UI UX DX Library - Inkline',
            meta: [
                {
                    name: 'description',
                    content: 'Inkline is the intuitive UI UX DX Components library that gives you the foundation for building high-quality, accessible, and customizable Vue.js Design Systems.'
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
