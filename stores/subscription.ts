import { defineStore } from 'pinia';
import * as stripeApi from '~/api/stripe';
import { computed, ref } from 'vue';
import { StripeProductsResponse, StripeSubscriptionsResponse } from '~/types';

export const useSubscriptionStore = defineStore('subscription', () => {
    const tierFeatures = {
        openSource: [
            { title: '25+ Basic Components' },
            { title: '10+ Form Components' },
            { title: 'Form Validation' },
            { title: 'Utility Classes' },
            { title: 'Community Support' },
            { title: 'Regular Updates' }
        ],
        pro: [
            { title: 'All Features of Open Source' },
            { title: 'Autocomplete Component' },
            { title: 'Data Table Component' },
            { title: 'Date Picker Component' },
            { title: 'Premium Support' }
        ],
        enterprise: [
            { title: 'All Features of Pro' },
            { title: 'Custom Integrations' },
            { title: 'Custom Components' },
            { title: 'Dedicated Support' }
        ]
    };

    const products = ref<StripeProductsResponse>([]);
    const subscriptions = ref<StripeSubscriptionsResponse>([]);

    const seatCount = computed(() =>
        subscriptions.value.reduce((acc, subscription) => {
            acc += subscription.data.reduce((itemAcc, item) => {
                if (item.quantity) {
                    itemAcc += item.quantity;
                }

                return itemAcc;
            }, 0);
            return acc;
        }, 0)
    );

    function productById(id: string) {
        return products.value.find((product) => product.id === id);
    }

    function productByName(name: string) {
        return products.value.find((product) => product.name === name);
    }

    function pricesByProductId(id: string) {
        const product = productById(id);
        return product?.prices;
    }

    function pricesAsObjectByProductId(id: string) {
        const product = productById(id);
        const prices = product?.prices;

        return prices?.reduce<Record<string, StripeProductsResponse[0]['prices'][0]>>(
            (acc, price) => {
                acc[price.recurring.interval] = price;
                return acc;
            },
            {}
        );
    }

    function subscriptionByProductId(productId: string) {
        return subscriptions.value.find((subscription) =>
            subscription.data.find((item) => item.product === productId)
        );
    }

    async function getProducts() {
        const { data } = await stripeApi.useGetProducts();
        products.value = data.value as unknown as StripeProductsResponse;
        return data;
    }

    async function getSubscriptions() {
        const data = await stripeApi.getSubscriptions();
        subscriptions.value = data || [];
        return data;
    }

    return {
        getProducts,
        getSubscriptions,
        seatCount,
        products,
        productById,
        productByName,
        pricesByProductId,
        pricesAsObjectByProductId,
        subscriptionByProductId,
        subscriptions,
        tierFeatures
    };
});
