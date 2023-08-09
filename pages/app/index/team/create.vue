<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useMembershipStore, useSubscriptionStore } from '~/stores';
import { useI18n } from 'vue-i18n';
import { definePageMeta } from '#imports';
import { useToast } from '@inkline/inkline';
import { useRouteGuard } from '~/composables/navigation/useRouteGuard';

export default defineComponent({
    async setup() {
        definePageMeta({
            title: 'Create a team',
            description:
                'Grant your team members access to Inkline Pro and set the foundation for your developer team.'
        });

        const { t } = useI18n();
        const toast = useToast();
        const router = useRouter();
        const membershipStore = useMembershipStore();
        const subscriptionStore = useSubscriptionStore();

        await useRouteGuard(() => subscriptionStore.hasSubscription);

        async function onSubmit(data: { name; members }) {
            const { team } = await membershipStore.createTeam({
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
            onSubmit
        };
    }
});
</script>
<template>
    <LayoutsCards>
        <ICard>
            <h1>{{ t('pages.team.create.title') }}</h1>
            <p class="_margin-bottom:0">{{ t('pages.team.create.description') }}</p>
        </ICard>
        <FormsManageTeam :action="onSubmit" />
    </LayoutsCards>
</template>
