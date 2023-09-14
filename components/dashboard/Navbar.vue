<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useMembershipStore } from '~/stores/membership';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useSubscriptionStore } from '~/stores';
import { useServiceAccountRoutes } from '~/composables';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const membershipStore = useMembershipStore();
        const subscriptionStore = useSubscriptionStore();
        const { ownedTeams, serviceAccount, isTeamServiceAccount, isPersonalServiceAccount } =
            storeToRefs(membershipStore);
        const { hasSubscription } = storeToRefs(subscriptionStore);
        const { routes } = useServiceAccountRoutes();
        const team = computed(() => membershipStore.teamById(serviceAccount.value as string));

        const canAccessSubscriptionRoutes = computed(() => {
            return isPersonalServiceAccount.value ? hasSubscription.value : team.value?.active;
        });

        return {
            t,
            routes,
            ownedTeams,
            isTeamServiceAccount,
            isPersonalServiceAccount,
            hasSubscription,
            canAccessSubscriptionRoutes
        };
    }
});
</script>
<template>
    <INavbar class="dashboard-navbar" :collapse="false">
        <INavbarCollapsible>
            <INav>
                <FormsTeamSelect />
                <INavItem :to="routes['/']"> {{ t('pages.dashboard.navigation.home') }} </INavItem>
                <INavItem v-if="canAccessSubscriptionRoutes" :to="routes['/installation']">
                    {{ t(`pages.dashboard.navigation.installation`) }}
                </INavItem>
                <INavItem v-if="canAccessSubscriptionRoutes" :to="routes['/token']">
                    {{ t('pages.dashboard.navigation.token') }}
                </INavItem>
                <INavItem v-if="isTeamServiceAccount" :to="routes['/team']">
                    {{ t(`pages.dashboard.navigation.team`) }}
                </INavItem>
                <IButton
                    v-if="hasSubscription && isPersonalServiceAccount && ownedTeams.length === 0"
                    to="/app/team/create"
                    color="primary"
                    class="_margin-left:auto"
                >
                    {{ t('pages.dashboard.navigation.createTeam') }}
                </IButton>
            </INav>
        </INavbarCollapsible>
    </INavbar>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.dashboard-navbar {
    --navbar--light--background: white;

    .container {
        padding: 0;
    }

    .nav {
        width: 100%;

        .nav-item {
            &.router-link-exact-active {
                font-weight: var(--font-weight-semibold);
            }
        }
    }

    .team-select {
        margin-right: var(--margin-right);

        @include breakpoint-down('md') {
            margin-right: 0;
            margin-bottom: var(--margin-bottom);
            width: 100%;
        }
    }
}
</style>
