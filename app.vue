<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore, useFirebaseStore, useMembershipStore, useSubscriptionStore } from '~/stores';

export default defineComponent({
    async setup() {
        const initialized = ref(false);
        const authStore = useAuthStore();

        authStore.initialize();
        if (authStore.isAuthenticated) {
            await initialize();
        }

        async function initialize() {
            if (initialized.value) {
                return;
            }

            const firebaseStore = useFirebaseStore();
            const subscriptionStore = useSubscriptionStore();
            const membershipStore = useMembershipStore();

            await Promise.all([
                firebaseStore.setAuthToken(),
                subscriptionStore.getSubscriptions(),
                membershipStore.getTeams()
            ]);
            await membershipStore.initializeServiceAccount();

            initialized.value = true;
        }

        return {};
    }
});
</script>
<template>
    <main>
        <NuxtLoadingIndicator color="var(--color-primary)" :height="3" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <IToastContainer />
    </main>
</template>
