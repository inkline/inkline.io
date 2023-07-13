<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, watch } from 'vue';
import { useAuthStore, useFirebaseStore, useSubscriptionStore } from '~/stores';

export default defineComponent({
    async setup() {
        const initialized = ref(false);
        const authStore = useAuthStore();

        onMounted(async () => {
            authStore.initialize();
            if (authStore.isAuthenticated) {
                await initialize();
            }
        });

        async function initialize() {
            if (initialized.value) {
                return;
            }

            void useFirebaseStore().setAuthToken();
            void useSubscriptionStore().getSubscriptions();

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
