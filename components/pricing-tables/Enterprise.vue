<script lang="ts">
import { defineComponent } from 'vue';
import { useSubscriptionStore } from '~/stores';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const subscriptionStore = useSubscriptionStore();
        const features = subscriptionStore.tierFeatures.enterprise;

        return { features, t };
    }
});
</script>
<template>
    <PricingTable
        :title="t('pages.pricing.plans.enterprise.title')"
        :price="t('pages.pricing.plans.enterprise.price')"
        :features="features"
    >
        <template #interval>
            <br />
            <br />
        </template>
        <template #footer>
            <IButton block>
                {{ t('pages.pricing.plans.enterprise.action') }}
            </IButton>
        </template>
    </PricingTable>
</template>
<script setup></script>
