<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();

        return {
            t
        };
    }
});
</script>

<template>
    <SectionsComponentsSection class="newsletter-section">
        <NuxtImg
            class="newsletter-image"
            src="/images/illustrations/pro-preview.svg"
            alt="Inkline Pro - Preview"
        />
        <IRow>
            <IColumn lg="6">
                <SectionsComponentsHeader>
                    <template #title>
                        {{ t('sections.newsletter.title') }}
                    </template>
                    <template #description>
                        {{ t('sections.newsletter.description') }}
                    </template>
                </SectionsComponentsHeader>
            </IColumn>
        </IRow>
        <IRow class="_margin-top:2">
            <IColumn lg="6">
                <FormsNewsletter />
            </IColumn>
        </IRow>
    </SectionsComponentsSection>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.newsletter-section {
    padding-top: var(--section--padding-top);
    padding-bottom: var(--section--padding-bottom);
    overflow: hidden;
}

.newsletter-image {
    width: 100%;
    height: auto;
    margin-bottom: var(--margin-bottom-4);

    @include breakpoint-up('lg') {
        position: absolute;
        top: var(--margin-top-2);
        left: 50%;
        margin-left: var(--margin-left-2);
        height: calc(100% - var(--margin-top-2) - var(--margin-bottom-2));
        width: auto;
    }
}
</style>
