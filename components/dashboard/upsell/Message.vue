<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    props: {
        context: {
            type: String as PropType<'owner' | 'member'>,
            default: 'owner'
        }
    },
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
            {{ t(`pages.dashboard.upsell.${context}.title`) }}
        </h2>
        <p>
            {{ t(`pages.dashboard.upsell.${context}.description`) }}
        </p>
        <IButton
            v-if="context === 'owner'"
            to="/pricing"
            size="lg"
            color="primary"
            class="_margin-top:1"
        >
            {{ t(`pages.dashboard.upsell.${context}.button`) }}
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
