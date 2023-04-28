<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const timeline = [
            {
                title: t('roadmap.inkline4Release.title'),
                description: t('roadmap.inkline4Release.description'),
                date: t('roadmap.inkline4Release.date')
            },
            {
                title: t('roadmap.inklineProRelease.title'),
                description: t('roadmap.inklineProRelease.description'),
                date: t('roadmap.inklineProRelease.date')
            }
        ];

        return {
            timeline
        };
    }
});
</script>

<template>
    <div class="_display:flex _justify-content:center">
        <Timeline :data="timeline" />
    </div>
</template>
