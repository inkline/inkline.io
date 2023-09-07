<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { t } = useI18n();
const nextRoute = ref('');

function setNextRoute(route: string) {
    nextRoute.value = route;
}
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
        <Transition name="fade-transition" mode="out-in">
            <LayoutsCards v-if="!nextRoute">
                <ContentLinkCard
                    title="Vite.js Installation"
                    subtitle="(Recommended)"
                    icon="logos:vitejs"
                    @click="setNextRoute('/app/installation/vite')"
                ></ContentLinkCard>
                <ContentLinkCard
                    title="Nuxt Installation"
                    icon="logos:nuxt-icon"
                    @click="setNextRoute('/app/installation/nuxt')"
                ></ContentLinkCard>
                <ContentLinkCard
                    title="Webpack.js Installation"
                    icon="logos:webpack"
                    @click="setNextRoute('/app/installation/webpack')"
                ></ContentLinkCard>
                <ContentLinkCard
                    title="Manual Installation"
                    icon="logos:npm-2"
                    @click="setNextRoute('/app/installation/manual')"
                ></ContentLinkCard>
            </LayoutsCards>
            <LayoutsCards v-else>
                <ContentLinkCard
                    title="I want to create a new Inkline project"
                    icon="fluent-emoji-flat:magic-wand"
                    :to="`${nextRoute}-new`"
                ></ContentLinkCard>
                <ContentLinkCard
                    title="I have an existing Inkline project"
                    icon="fluent-emoji-flat:gear"
                    :to="nextRoute"
                ></ContentLinkCard>
            </LayoutsCards>
        </Transition>
    </LayoutsCards>
</template>
