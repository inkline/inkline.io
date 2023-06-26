<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { definePageMeta, useSeoMeta } from '#imports';
import { createCheckoutSession, useGetPrices } from '~/api';
import type { Stripe } from 'stripe';
import { useAuthStore } from '~/stores';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const title = 'Pricing - Inkline';
const description =
    'Choose the perfect Inkline package for your Vue.js project. From Open Source to Pro and Enterprise options, find the features and support you need.';

export default defineComponent({
    async setup() {
        const route = useRoute();
        const { t } = useI18n();
        const authStore = useAuthStore();

        useSeoMeta({
            title,
            description,
            ogTitle: title,
            ogDescription: description
        });

        definePageMeta({
            layout: 'default'
        });

        const { data: prices } = await useGetPrices();

        if (route.query.checkout) {
            console.log(prices.value, Object.values(prices.value));
            const price = Object.values(prices.value).find(
                (price) => price.id === route.query.checkout
            ) as Stripe.Price;
            if (price) {
                await subscribe(price);
            }
        }

        const isYearlyBillingInterval = ref(true);
        const interval = computed<Stripe.Price.Recurring.Interval>(() => {
            return isYearlyBillingInterval.value ? 'year' : 'month';
        });

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

        const billingIntervalOptions = [
            {
                id: 'monthly',
                label: t('pages.pricing.interval.monthly'),
                value: false,
                buttonProps: {
                    color: 'primary'
                }
            },
            {
                id: 'yearly',
                label: t('pages.pricing.interval.yearly'),
                value: true,
                buttonProps: {
                    color: 'primary'
                }
            }
        ];

        async function subscribe(price: Stripe.Price) {
            if (!authStore.isAuthenticated) {
                await authStore.login({
                    appState: {
                        target: `${route.fullPath}?checkout=${price.id}`
                    }
                });
            }

            const response = await createCheckoutSession(price);
            console.log(response);
            if (response) {
                window.location.href = response.session.url;
            }
        }

        return {
            t,
            interval,
            billingIntervalOptions,
            isYearlyBillingInterval,
            prices,
            tierFeatures,
            subscribe
        };
    }
});
</script>

<template>
    <div id="pricing-page">
        <SectionsComponentsSection color="transparent" size="lg" class="_padding-bottom:3!">
            <IRow center>
                <IColumn md="8">
                    <SectionsComponentsHeader heading="h1">
                        <template #title>
                            {{ t('pages.pricing.title') }}
                            <span class="_color:primary">{{
                                t('pages.pricing.titleHighlight')
                            }}</span>
                        </template>
                        <template #description>
                            {{ t('pages.pricing.description') }}
                        </template>
                    </SectionsComponentsHeader>
                </IColumn>
            </IRow>
        </SectionsComponentsSection>
        <SectionsComponentsSection color="transparent" size="lg" class="_padding-top:3!">
            <IRow center class="_margin-bottom:2">
                <IColumn md="4">
                    <div id="savings-wrapper" class="_margin-bottom:1">
                        <IBadge color="secondary" size="lg"> Save 17% </IBadge>
                        <Icon id="savings-arrow" name="ph:arrow-arc-right-thin" size="50" />
                    </div>
                    <IRadioButtons
                        v-model="isYearlyBillingInterval"
                        :options="billingIntervalOptions"
                    />
                </IColumn>
            </IRow>
            <IRow>
                <IColumn md="4">
                    <PricingTable
                        title="Free"
                        price="Open Source"
                        :features="tierFeatures.openSource"
                    >
                        <template #interval>
                            <br />
                            <br />
                        </template>
                        <template #footer>
                            <IButton block>Get started</IButton>
                        </template>
                    </PricingTable>
                </IColumn>
                <IColumn>
                    <PricingTable
                        title="Pro"
                        :price="
                            isYearlyBillingInterval
                                ? prices[interval].unit_amount / 1200
                                : prices[interval].unit_amount / 100
                        "
                        :currency="prices[interval].currency"
                        :features="tierFeatures.pro"
                        featured
                    >
                        <template #footer>
                            <IButton color="primary" block @click="subscribe(prices[interval])">
                                {{ t('pages.pricing.plans.pro.action') }}
                            </IButton>
                        </template>
                        <template #interval>
                            {{
                                t(
                                    `pages.pricing.table.interval.${
                                        isYearlyBillingInterval ? 'yearly' : 'monthly'
                                    }`
                                )
                            }}
                            <br />
                            {{ t('pages.pricing.table.interval.user') }}
                        </template>
                    </PricingTable>
                </IColumn>
                <IColumn md="4">
                    <PricingTable
                        title="Enterprise"
                        price="Contact us"
                        action="Contact us"
                        :features="tierFeatures.enterprise"
                    >
                        <template #interval>
                            <br />
                            <br />
                        </template>
                        <template #footer>
                            <IButton block>Contact us</IButton>
                        </template>
                    </PricingTable>
                </IColumn>
            </IRow>
        </SectionsComponentsSection>
    </div>
</template>

<style lang="scss">
#savings-wrapper {
    position: relative;
    width: 200px;
    margin-left: auto;
    margin-right: auto;

    #savings-arrow {
        width: 55px;
        height: auto;
        color: var(--color-secondary);
        position: absolute;
        right: 0;
        top: -3px;
        transform: rotate(60deg);
    }
}
</style>
