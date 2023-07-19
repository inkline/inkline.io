<script lang="ts">
import { computed, defineComponent, onBeforeMount, onMounted } from 'vue';
import { useMembershipStore } from '~/stores/membership';
import { useRouter } from 'vue-router';

export default defineComponent({
    async setup() {
        const router = useRouter();
        const membershipStore = useMembershipStore();
        const team = computed(() =>
            membershipStore.teamById(membershipStore.serviceAccount as string)
        );
        const memberships = computed(() =>
            membershipStore.membershipsByTeamId(team.value?.id as string)
        );

        onMounted(() => {
            if (!membershipStore.isTeamServiceAccount) {
                router.replace('/dashboard');
            }

            membershipStore.getTeam(membershipStore.serviceAccount as string);
        });

        return { team, memberships };
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
        {{ team }}
        {{ memberships }}
    </ICard>
</template>
