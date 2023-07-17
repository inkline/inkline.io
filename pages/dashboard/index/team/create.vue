<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useMembershipStore } from '~/stores';
import { useI18n } from 'vue-i18n';
import { definePageMeta } from '#imports';

export default defineComponent({
    async setup() {
        definePageMeta({
            title: 'Create a team',
            description:
                'Grant your team members access to Inkline Pro and set the foundation for your developer team.',
            sidebar: false
        });

        const { t } = useI18n();
        const router = useRouter();
        const membershipStore = useMembershipStore();

        async function onSubmit(data: { name; members }) {
            await membershipStore.createTeam({
                name: data.name,
                members: data.members
            });

            await router.push('/dashboard');
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
        <FormsManageTeam :action="onSubmit" />
    </LayoutsCards>
</template>

<style lang="scss">
.billing-changes-summary {
    text-align: right;
    border-right: 4px solid var(--color-primary);
    padding-right: var(--padding-right);
    margin-top: var(--margin-top);
}
</style>
