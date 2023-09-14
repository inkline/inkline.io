<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useSubscriptionStore } from '~/stores';

const subscriptionStore = useSubscriptionStore();
const hasSubscriptions = computed(() => subscriptionStore.subscriptions.length > 0);

const { t } = useI18n();
</script>
<template>
    <LayoutsCards v-if="hasSubscriptions">
        <ICard>
            <h1>
                {{ t(`pages.dashboard.title`) }}
            </h1>
            <p class="_margin-bottom:0">
                {{ t(`pages.dashboard.description`) }}
            </p>
        </ICard>
        <DashboardOnboarding />
    </LayoutsCards>
    <DashboardUpsell v-else />
</template>
