<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<template>
    <LayoutsCards>
        <ICard>
            <h1>
                {{ t(`pages.installation.title`) }}
            </h1>
            <p class="_margin-bottom:0">
                {{ t(`pages.installation.description`) }}
            </p>
        </ICard>
        <ContentLinkCard
            to="/app/installation/vite"
            title="Vite.js Installation"
            subtitle="(Recommended)"
            icon="logos:vitejs"
        ></ContentLinkCard>
        <ContentLinkCard
            to="/app/installation/nuxt"
            title="Nuxt Installation"
            icon="logos:nuxt-icon"
        ></ContentLinkCard>
        <ContentLinkCard
            to="/app/installation/webpack"
            title="Webpack.js Installation"
            icon="logos:webpack"
        ></ContentLinkCard>
        <ContentLinkCard
            to="/app/installation/manual"
            title="Manual Installation"
            icon="logos:npm-2"
        ></ContentLinkCard>
    </LayoutsCards>
</template>
