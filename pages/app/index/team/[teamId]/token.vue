<script setup>
import { computed } from 'vue';
import { useMembershipStore } from '~/stores';
import { definePageMeta } from '#imports';

definePageMeta({
    title: 'Auth Token',
    description:
        'Grant your team members access to Inkline Pro and set the foundation for your developer team.'
});

const membershipStore = useMembershipStore();
const teamId = computed(() => membershipStore.serviceAccount);
</script>
<template>
    <DashboardAuthToken :team-id="teamId" />
</template>
