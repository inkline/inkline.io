<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import { useMembershipStore } from '~/stores/membership';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const membershipStore = useMembershipStore();

        onBeforeMount(() => {
            if (!membershipStore.isTeamServiceAccount) {
                router.replace('/dashboard');
            }
        });

        return {};
    }
});
</script>
<template>
    <ICard>
        <h1>Team</h1>
        <p>
            Example content for a page with a sidebar, a layout typically seen in Documentation
            pages and Web Application dashboards.
        </p>
    </ICard>
</template>
