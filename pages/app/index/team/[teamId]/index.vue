<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useSubscriptionStore } from '~/stores';
import { useMembershipStore } from '~/stores/membership';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const subscriptionStore = useSubscriptionStore();
        const membershipStore = useMembershipStore();
        const router = useRouter();
        const { t } = useI18n();

        const { hasSubscription } = storeToRefs(subscriptionStore);
        const { isPersonalServiceAccount, isServiceAccountOwner, serviceAccount } =
            storeToRefs(membershipStore);
        const team = computed(() => membershipStore.teamById(serviceAccount.value as string));

        onMounted(() => {
            if (isPersonalServiceAccount.value) {
                router.push('/app');
            }
        });

        return { t, team, hasSubscription, isServiceAccountOwner, serviceAccount };
    }
});
</script>
<template>
    <LayoutsCards v-if="team?.active">
        <ICard>
            <h1>{{ t(`pages.dashboard.title`) }}</h1>
            <p class="_margin-bottom:0">
                {{ t(`pages.dashboard.description`) }}
            </p>
        </ICard>
        <DashboardOnboarding />
    </LayoutsCards>
    <DashboardUpsell v-else-if="isServiceAccountOwner" />
    <DashboardUpsellMember v-else />
</template>
