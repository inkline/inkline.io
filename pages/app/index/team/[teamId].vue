<script setup>
import { useRoute } from 'vue-router';
import { useMembershipStore } from '~/stores';
import { onMounted } from 'vue';

const route = useRoute();
const membershipStore = useMembershipStore();

onMounted(() => {
    if (membershipStore.serviceAccount !== route.params.teamId) {
        membershipStore.setServiceAccount(route.params.teamId);
    }
});
</script>
<template>
    <div class="team-page">
        <NuxtPage />
    </div>
</template>
