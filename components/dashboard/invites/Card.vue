<script lang="ts" setup>
import type { PropType } from 'vue';
import type { MembershipType } from '~/types';
import { useI18n } from 'vue-i18n';
import { useMembershipStore } from '~/stores';
import { useModal, useToast } from '@inkline/inkline';
import { useRouter } from 'vue-router';
import { useServiceAccountRoutes } from '~/composables';

const props = defineProps({
    invite: {
        type: Object as PropType<MembershipType>,
        required: true
    }
});

const modal = useModal();
const membershipStore = useMembershipStore();
const { t } = useI18n();
const router = useRouter();
const { routes } = useServiceAccountRoutes();

async function onDecline() {
    const confirmed = await modal.confirm({
        title: t('pages.team.invite.card.declineConfirm.title'),
        message: t('pages.team.invite.card.declineConfirm.message'),
        confirmButtonText: t('pages.team.invite.card.declineConfirm.confirmButtonText')
    });

    if (confirmed) {
        await membershipStore.declineInvite(props.invite.id);
    }
}

async function onAccept() {
    await membershipStore.acceptInvite(props.invite.id);
    await membershipStore.setServiceAccount(props.invite.teamId);
    await router.push(routes.value['/']);
}
</script>
<template>
    <ICard>
        <div class="_display:flex _align-items:center">
            <Icon
                name="material-symbols:person-celebrate"
                size="32"
                class="_margin-right:1 _color:primary"
            />
            <i18n-t keypath="pages.team.invite.card.title" tag="div">
                <template #team>
                    <strong>{{ invite.teamName }}</strong>
                </template>
            </i18n-t>
            <div class="_margin-left:auto">
                <IButton class="_margin-right:1/2" size="sm" @click="onDecline">
                    {{ t('pages.team.invite.card.decline') }}
                </IButton>
                <IButton color="primary" size="sm" @click="onAccept">
                    {{ t('pages.team.invite.card.accept') }}
                </IButton>
            </div>
        </div>
    </ICard>
</template>
