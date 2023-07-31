<script lang="ts">
import { computed, defineComponent, onMounted, PropType } from 'vue';
import { useAuthStore, useSubscriptionStore } from '~/stores';
import { useI18n } from 'vue-i18n';
import { Stripe } from 'stripe';
import { createCheckoutSession } from '~/api';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { PRODUCTS } from '~/constants';

export default defineComponent({
    props: {
        interval: {
            type: String as PropType<Stripe.Price.Recurring.Interval>,
            required: true
        }
    },
    async setup(props) {
        const { t } = useI18n();
        const subscriptionStore = useSubscriptionStore();
        const authStore = useAuthStore();
        const route = useRoute();

        const features = subscriptionStore.tierFeatures.pro;
        const product = computed(() => subscriptionStore.productByName(PRODUCTS.INKLINE_PRO));
        const prices = computed(() =>
            subscriptionStore.pricesAsObjectByProductId(product.value.id)
        );

        const { subscriptions } = storeToRefs(subscriptionStore);
        const subscription = computed(() =>
            subscriptionStore.subscriptionByProductId(product.value.id)
        );

        const price = computed(() =>
            props.interval === 'year'
                ? prices.value[props.interval].unit_amount / 1200
                : prices.value[props.interval].unit_amount / 100
        );

        onMounted(() => {
            if (route.query.checkout) {
                const queryPrice = Object.values(prices.value).find(
                    (price) => price.id === route.query.checkout
                ) as Stripe.Price;

                if (queryPrice) {
                    void subscribe(queryPrice);
                }
            }
        });

        async function subscribe(price: Stripe.Price) {
            if (!authStore.isAuthenticated) {
                await authStore.login({
                    appState: {
                        target: `${route.fullPath}?checkout=${price.id}`
                    }
                });
            }

            const response = await createCheckoutSession(price);
            if (response) {
                window.location.href = response.session.url;
            }
        }

        return {
            t,
            features,
            product,
            price,
            prices,
            subscription,
            subscriptions,
            subscribe
        };
    }
});
</script>
<template>
    <PricingTable
        title="Pro"
        :price="price"
        :currency="prices[interval].currency"
        :features="features"
        featured
    >
        <template #interval>
            {{ t(`pages.pricing.table.interval.${interval}ly`) }}
            <br />
            {{ t('pages.pricing.table.interval.user') }}
        </template>
        <template #footer>
            <IButton v-if="subscription" color="secondary" block to="/app">
                {{ t('pages.pricing.table.current') }}
            </IButton>
            <IButton v-else color="primary" block @click="subscribe(prices[interval])">
                {{ t('pages.pricing.plans.pro.action') }}
            </IButton>
        </template>
    </PricingTable>
</template>
