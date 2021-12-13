<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent } from 'vue';

export default defineComponent({
    setup () {
        const { t } = useI18n();

        return {
            t
        };
    }
});
</script>

<template>
    <div>
        {{ t('not-found') }}
    </div>
</template>

<route lang="yaml">
meta:
    layout: 404
</route>
