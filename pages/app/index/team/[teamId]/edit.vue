<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore, useMembershipStore } from '~/stores';
import { useI18n } from 'vue-i18n';
import { definePageMeta } from '#imports';
import { useToast } from '@inkline/inkline';
import { storeToRefs } from 'pinia';

export default defineComponent({
    async setup() {
        definePageMeta({
            title: 'Update your team',
            description:
                'Grant your team members access to Inkline Pro and set the foundation for your developer team.',
            sidebar: false
        });

        const { t } = useI18n();
        const toast = useToast();
        const router = useRouter();
        const authStore = useAuthStore();
        const membershipStore = useMembershipStore();

        const team = computed(() =>
            membershipStore.teamById(membershipStore.serviceAccount as string)
        );
        const memberships = computed(() =>
            membershipStore.membershipsByTeamId(team.value?.id as string)
        );

        const { isServiceAccountOwner } = storeToRefs(membershipStore);

        const defaultTeam = computed(() => team.value);
        const defaultMembers = computed(() =>
            memberships.value
                .map((membership) => membership.email)
                .filter((email) => email !== authStore.currentUser?.email)
        );

        onMounted(() => {
            if (!membershipStore.isTeamServiceAccount || !isServiceAccountOwner.value) {
                router.replace('/app');
            }
        });

        await membershipStore.getTeam(membershipStore.serviceAccount as string);

        async function onSubmit(data: { name; members }) {
            const { team } = await membershipStore.updateTeam({
                name: data.name,
                members: data.members
            });

            toast.show({
                title: t('pages.team.create.success.title'),
                message: t('pages.team.create.success.message'),
                color: 'success'
            });

            await router.push(`/app/team/${team.id}`);
        }

        return {
            t,
            defaultTeam,
            defaultMembers,
            onSubmit
        };
    }
});
</script>
<template>
    <LayoutsCards>
        <FormsManageTeam :team="defaultTeam" :members="defaultMembers" :action="onSubmit" />
    </LayoutsCards>
</template>
