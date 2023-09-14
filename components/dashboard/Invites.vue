<script lang="ts" setup>
import { computed } from 'vue';
import { useMembershipStore } from '~/stores/membership';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useSubscriptionStore } from '~/stores';

const { t } = useI18n();
const membershipStore = useMembershipStore();
const subscriptionStore = useSubscriptionStore();

const { invitesWithTeam } = storeToRefs(membershipStore);
</script>
<template>
    <div class="dashboard-invites _margin-bottom:1">
        <DashboardInvitesCard v-for="invite in invitesWithTeam" :key="invite.id" :invite="invite" />
    </div>
</template>
