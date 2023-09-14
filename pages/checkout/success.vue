<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<template>
    <SectionsComponentsSection color="transparent" size="fullscreen">
        <IRow center>
            <IColumn md="8">
                <SectionsComponentsHeader heading="h1">
                    <template #title>
                        {{ t('pages.checkout.success.title') }}
                    </template>
                    <template #description>
                        {{ t('pages.checkout.success.description') }}
                        <br />
                        <IButton class="_margin-top:2" size="lg" color="primary" to="/app">
                            Get started
                        </IButton>
                    </template>
                </SectionsComponentsHeader>
            </IColumn>
        </IRow>
    </SectionsComponentsSection>
</template>
