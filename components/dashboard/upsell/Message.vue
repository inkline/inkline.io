<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    async setup() {
        const { t } = useI18n();

        return { t };
    }
});
</script>

<template>
    <div id="upsell-message" class="_height:100%">
        <NuxtImg
            height="80"
            width="80"
            src="/images/icons/icon-lock.svg"
            alt="Upgrade to Inkline Pro"
            class="_margin-bottom:2"
        />
        <h2>
            {{ t('pages.dashboard.upsell.title') }}
        </h2>
        <p>
            {{ t('pages.dashboard.upsell.description') }}
        </p>
        <IButton to="/pricing" size="lg" color="primary" class="_margin-top:1">
            {{ t('pages.dashboard.upsell.button') }}
        </IButton>
    </div>
</template>

<style lang="scss">
#upsell-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}
</style>
