<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { definePageMeta } from '#imports';
import { useSubscriptionStore } from '~/stores';
import { storeToRefs } from 'pinia';
import { useMembershipStore } from '~/stores/membership';

export default defineComponent({
    async setup() {
        const { t } = useI18n();
        const subscriptionStore = useSubscriptionStore();
        const membershipStore = useMembershipStore();

        const hasSubscriptions = computed(() => subscriptionStore.subscriptions.length > 0);
        const hasTeams = computed(() => membershipStore.teams.length > 0);

        definePageMeta({
            layout: 'dashboard',
            middleware: 'authenticated'
        });

        onMounted(() => {
            membershipStore.initializeServiceAccount();
        });

        await Promise.all([subscriptionStore.getProducts(), membershipStore.getTeams()]);

        return { t, hasTeams, hasSubscriptions };
    }
});
</script>

<template>
    <div id="dashboard-page">
        <SectionsComponentsSection color="transparent" size="md">
            <IRow>
                <IColumn>
                    <SectionsComponentsHeader heading="h1">
                        <template #title>
                            {{ t('pages.dashboard.title') }}
                        </template>
                        <template #description>
                            {{ t('pages.onboarding.description') }}
                        </template>
                    </SectionsComponentsHeader>
                </IColumn>
            </IRow>
            <IRow v-if="hasSubscriptions || hasTeams">
                <IColumn>
                    <ILayout vertical class="_margin-top:2">
                        <DashboardSidebar class="_margin-right:1" />
                        <ILayoutContent>
                            <ICard>
                                <NuxtPage />
                            </ICard>
                        </ILayoutContent>
                    </ILayout>
                </IColumn>
            </IRow>
            <DashboardUpsell v-else class="_margin-top:2" />
        </SectionsComponentsSection>
    </div>
</template>

<style lang="scss">
#dashboard-page {
    flex-grow: 1;

    #current-plan-button {
        pointer-events: none;
    }

    #upsell-message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
    }
}
</style>
