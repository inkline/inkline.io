<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent } from 'vue';
import { definePageMeta } from '#imports';

export default defineComponent({
    setup() {
        const { t } = useI18n();

        definePageMeta({
            layout: 'error'
        });

        return {
            t
        };
    }
});
</script>

<template>
    <NuxtLayout>
        <AppError />
    </NuxtLayout>
</template>
