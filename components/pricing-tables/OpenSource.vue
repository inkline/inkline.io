<script lang="ts">
import { defineComponent } from 'vue';
import { useSubscriptionStore } from '~/stores';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const subscriptionStore = useSubscriptionStore();
        const features = subscriptionStore.tierFeatures.openSource;

        return { t, features };
    }
});
</script>
<template>
    <PricingTable
        :title="t('pages.pricing.plans.free.title')"
        :price="t('pages.pricing.plans.free.price')"
        :features="features"
    >
        <template #interval>
            <br />
            <br />
        </template>
        <template #footer>
            <slot name="footer">
                <IButton block to="/docs">
                    {{ t('pages.pricing.plans.free.action') }}
                </IButton>
            </slot>
        </template>
    </PricingTable>
</template>
<script setup></script>
