<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { definePageMeta, useSeoMeta } from '#imports';
import { checkout, useGetPrices } from '~/api';
import type { Stripe } from 'stripe';
import { useAuthStore } from '~/stores';
import { useI18n } from 'vue-i18n';

const title = 'Pricing - Inkline';
const description =
    'Choose the perfect Inkline package for your Vue.js project. From Open Source to Pro and Enterprise options, find the features and support you need.';

export default defineComponent({
    async setup() {
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

        const intervalToggle = ref(true);
        const interval = computed<Stripe.Price.Recurring.Interval>(() => {
            return intervalToggle.value ? 'year' : 'month';
        });

        const tierFeatures = {
            openSource: [
                { title: '50+ Components' },
                { title: 'Community Support' },
                { title: 'MIT License' }
            ],
            pro: [
                { title: 'All Features of Free' },
                { title: 'Advanced Components' },
                { title: 'Premium Support' },
                { title: 'Regular Updates' }
            ],
            enterprise: [
                { title: 'All Features of Pro' },
                { title: 'Dedicated Support' },
                { title: 'Custom Integrations' },
                { title: 'SLA Guarantees' }
            ]
        };

        async function subscribe() {
            if (!authStore.isAuthenticated) {
                await authStore.login();
            }

            await checkout();
        }

        return {
            t,
            interval,
            intervalToggle,
            prices,
            tierFeatures,
            subscribe
        };
    }
});
</script>

<template>
    <SectionsComponentsSection color="transparent" size="lg">
        <IRow center>
            <IColumn md="8">
                <SectionsComponentsHeader heading="h1">
                    <template #title>
                        {{ t('pages.pricing.title') }}
                        <span class="_color:primary">{{ t('pages.pricing.titleHighlight') }}</span>
                    </template>
                    <template #description>
                        {{ t('pages.pricing.description') }}
                    </template>
                </SectionsComponentsHeader>

                <IToggle v-model="intervalToggle"></IToggle>
            </IColumn>
        </IRow>
    </SectionsComponentsSection>
    <IContainer>
        <IRow>
            <IColumn>
                <PricingTable title="Free" price="Open Source" :features="tierFeatures.openSource">
                    <template #footer>
                        <IButton block>Get started</IButton>
                    </template>
                </PricingTable>
            </IColumn>
            <IColumn>
                <PricingTable
                    title="Pro"
                    :price="prices[interval].unit_amount"
                    :currency="prices[interval].currency"
                    :features="tierFeatures.pro"
                >
                    <template #footer>
                        <IButton color="primary" block @click="subscribe">Try for free</IButton>
                    </template>
                </PricingTable>
            </IColumn>
            <IColumn>
                <PricingTable
                    title="Enterprise"
                    price="Contact us"
                    action="Contact us"
                    :features="tierFeatures.enterprise"
                >
                    <template #footer>
                        <IButton block>Get started</IButton>
                    </template>
                </PricingTable>
            </IColumn>
        </IRow>
    </IContainer>
</template>
