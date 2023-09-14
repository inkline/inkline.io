<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getToken, regenerateToken } from '~/api';
import { useMembershipStore } from '~/stores';
import { useModal, useToast } from '@inkline/inkline';
import { useServiceAccountRoutes } from '~/composables';
import { useI18n } from 'vue-i18n';

const props = defineProps({
    teamId: {
        type: String,
        default: undefined
    }
});

const membershipStore = useMembershipStore();
const toast = useToast();
const modal = useModal();
const { t } = useI18n();
const { routes } = useServiceAccountRoutes();

const token = ref('');

onMounted(async () => {
    try {
        const data = await getToken(props.teamId ? { teamId: props.teamId } : {});
        token.value = data.token;
    } catch (error) {
        toast.show({
            title: 'Failed to get token',
            message: error.message,
            color: 'danger'
        });
    }
});

async function onRegenerateToken() {
    try {
        const confirmed = await modal.confirm({
            title: t('pages.token.regenerateConfirm.title'),
            message: t('pages.token.regenerateConfirm.message')
        });

        if (confirmed) {
            const data = await regenerateToken(props.teamId ? { teamId: props.teamId } : {});
            token.value = data.token;

            toast.show({
                message: t('pages.token.regenerateConfirm.success.title'),
                color: 'success'
            });
        }
    } catch (error) {
        toast.show({
            title: t('pages.token.regenerateConfirm.error.title'),
            message: error.message,
            color: 'danger'
        });
    }
}
</script>
<template>
    <LayoutsCards>
        <ICard>
            <h1>{{ t('pages.token.title') }}</h1>
            <p>
                {{ t('pages.token.description') }}
                <NuxtLink :to="routes['/']">{{ t('pages.token.descriptionAction') }}</NuxtLink>
            </p>
            <IRow>
                <IColumn class="_display:flex">
                    <FormsCopyToClipboardInput
                        type="password"
                        :model-value="token"
                        :placeholder="t('pages.token.fetching')"
                        class="_flex:1 _margin-right:1"
                    />
                    <IButton @click="onRegenerateToken">
                        <Icon name="mdi:sync" size="18" class="_margin-right:1/2" />
                        {{ t('pages.token.regenerate') }}
                    </IButton>
                </IColumn>
            </IRow>
        </ICard>

        <AppAlert color="info">
            <strong>{{ t('pages.token.alerts.confidential.title') }}</strong>
            {{ t('pages.token.alerts.confidential.description') }}
        </AppAlert>
    </LayoutsCards>
</template>
