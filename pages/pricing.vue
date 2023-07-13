<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref } from 'vue';
import { definePageMeta, useSeoMeta } from '#imports';
import type { Stripe } from 'stripe';
import { useSubscriptionStore } from '~/stores';
import { useI18n } from 'vue-i18n';

const title = 'Pricing - Inkline';
const description =
    'Choose the perfect Inkline package for your Vue.js project. From Open Source to Pro and Enterprise options, find the features and support you need.';

export default defineComponent({
    async setup() {
        const { t } = useI18n();
        const subscriptionStore = useSubscriptionStore();

        useSeoMeta({
            title,
            description,
            ogTitle: title,
            ogDescription: description
        });

        definePageMeta({
            layout: 'default'
        });

        await subscriptionStore.getProducts();

        const isYearlyBillingInterval = ref(true);
        const interval = computed<Stripe.Price.Recurring.Interval>(() => {
            return isYearlyBillingInterval.value ? 'year' : 'month';
        });

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

        return {
            t,
            interval,
            billingIntervalOptions,
            isYearlyBillingInterval,
            tierFeatures: subscriptionStore.tierFeatures
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
            <IRow id="pricing-tables">
                <IColumn lg="4">
                    <PricingTablesOpenSource />
                </IColumn>
                <IColumn lg="4">
                    <Suspense>
                        <PricingTablesPro :interval="interval" />
                    </Suspense>
                </IColumn>
                <IColumn lg="4">
                    <PricingTablesEnterprise />
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

#pricing-tables {
    > .column {
        margin-bottom: var(--margin-bottom);
    }
}
</style>
