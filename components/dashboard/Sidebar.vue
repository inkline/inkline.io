<script lang="ts">
import { defineComponent } from 'vue';
import { useMembershipStore } from '~/stores/membership';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useSubscriptionStore } from '~/stores';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const membershipStore = useMembershipStore();
        const subscriptionStore = useSubscriptionStore();
        const { ownedTeams, isTeamServiceAccount, isPersonalServiceAccount } =
            storeToRefs(membershipStore);
        const { hasSubscription } = storeToRefs(subscriptionStore);

        return {
            t,
            ownedTeams,
            isTeamServiceAccount,
            isPersonalServiceAccount,
            hasSubscription
        };
    }
});
</script>
<template>
    <ISidebar class="dashboard-sidebar" :collapse="false">
        <FormsTeamSelect />
        <INav vertical>
            <INavItem to="/dashboard"> {{ t('pages.dashboard.navigation.setup') }} </INavItem>
            <INavItem v-if="hasSubscription" to="/dashboard/token">
                {{ t('pages.dashboard.navigation.token') }}
            </INavItem>
            <INavItem v-if="isTeamServiceAccount" to="/dashboard/team">
                {{ t(`pages.dashboard.navigation.team`) }}
            </INavItem>
        </INav>
        <IButton
            v-if="hasSubscription && isPersonalServiceAccount && ownedTeams.length === 0"
            to="/dashboard/team/create"
            class="_margin-top:2"
            color="primary"
            block
        >
            {{ t('pages.dashboard.navigation.createTeam') }}
        </IButton>
    </ISidebar>
</template>

<style lang="scss">
.dashboard-sidebar {
    --sidebar--width: 300px;
    --sidebar--light--background: white;

    overflow: visible;

    .sidebar {
        height: auto;

        .sidebar-content {
            overflow: visible;
        }
    }

    .nav {
        .nav-item {
            &.router-link-exact-active {
                font-weight: var(--font-weight-semibold);
            }
        }
    }
}
</style>
