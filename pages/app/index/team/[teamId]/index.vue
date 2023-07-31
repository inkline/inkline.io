<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useSubscriptionStore } from '~/stores';
import { useMembershipStore } from '~/stores/membership';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const subscriptionStore = useSubscriptionStore();
        const membershipStore = useMembershipStore();

        const { hasSubscription } = storeToRefs(subscriptionStore);
        const { isPersonalServiceAccount } = storeToRefs(membershipStore);

        onMounted(() => {
            if (isPersonalServiceAccount.value) {
            }
        });

        return { hasSubscription };
    }
});
</script>
<template>
    <ICard>
        <h1>Set up</h1>
        <p>
            Example content for a page with a sidebar, a layout typically seen in Documentation
            pages and Web Application dashboards.
        </p>
    </ICard>
</template>
