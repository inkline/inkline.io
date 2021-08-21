<template>
    <main id="index-page">
        <index-header-section />
        <hr>
        <index-design-system-section />
        <index-basic-example-embed-section />
    </main>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const name = ref('');
        const router = useRouter();
        const { t } = useI18n();

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
