<script setup>
import { onMounted, ref } from 'vue';
import { getToken } from '~/api';
import { useMembershipStore } from '~/stores';
import { useToast } from '@inkline/inkline';

const membershipStore = useMembershipStore();
const toast = useToast();

const token = ref('');

onMounted(async () => {
    try {
        const data = await getToken({ teamId: membershipStore.serviceAccount });
        token.value = data.token;
    } catch (error) {
        toast.show({
            title: 'Failed to get token',
            message: error.message,
            color: 'danger'
        });
    }
});
</script>
<template>
    <ICard>
        <h1>Auth token</h1>
        <p>
            Example content for a page with a sidebar, a layout typically seen in Documentation
            pages and Web Application dashboards.
        </p>
        <IInput type="password" :model-value="token" />
    </ICard>
</template>
