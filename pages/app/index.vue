<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { definePageMeta } from '#imports';
import { useSubscriptionStore } from '~/stores';
import { useMembershipStore } from '~/stores/membership';
import { useRoute } from 'vue-router';

export default defineComponent({
    async setup() {
        const { t } = useI18n();
        const subscriptionStore = useSubscriptionStore();
        const membershipStore = useMembershipStore();
        const route = useRoute();

        const hasSubscriptions = computed(() => subscriptionStore.subscriptions.length > 0);
        const hasTeams = computed(() => membershipStore.memberships.length > 0);

        definePageMeta({
            layout: 'dashboard',
            middleware: 'authenticated'
        });

        return { t, route, hasTeams, hasSubscriptions };
    }
});
</script>

<template>
    <div id="dashboard-page">
        <SectionsComponentsSection color="transparent" size="md">
            <IRow v-if="hasSubscriptions || hasTeams">
                <IColumn>
                    <ILayout>
                        <DashboardNavbar class="_margin-bottom:1" />
                        <ILayoutContent>
                            <NuxtPage />
                            <DashboardNeedHelp />
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
