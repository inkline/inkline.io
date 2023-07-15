<script lang="ts">
import { defineComponent } from 'vue';
import { useSubscriptionStore } from '~/stores';
import { useMembershipStore } from '~/stores/membership';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const subscriptionStore = useSubscriptionStore();
        const membershipStore = useMembershipStore();

        const { hasSubscription } = storeToRefs(subscriptionStore);
        const { isPersonalServiceAccount } = storeToRefs(membershipStore);

        return { hasSubscription, isPersonalServiceAccount };
    }
});
</script>
<template>
    <div v-if="!hasSubscription && isPersonalServiceAccount">
        <DashboardUpsellMessage class="_padding-y:4" />
    </div>
    <div v-else>
        <h1>Set up</h1>
        <p>
            Example content for a page with a sidebar, a layout typically seen in Documentation
            pages and Web Application dashboards.
        </p>
    </div>
</template>
