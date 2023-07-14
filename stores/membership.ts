import { defineStore } from 'pinia';
import * as firebaseApi from '~/api/firebase';
import { ref } from 'vue';
import { StripeTeamsResponse } from '~/types';
import { useAuthStore } from '~/stores/auth';

export const useMembershipStore = defineStore('membership', () => {
    const serviceAccount = ref<string | null>();
    const teams = ref<StripeTeamsResponse>([]);

    function teamById(id: string) {
        return teams.value.find((team) => team.id === id);
    }

    function teamByName(name: string) {
        return teams.value.find((team) => team.name === name);
    }

    async function getTeams() {
        const { data } = await firebaseApi.useGetTeams();
        teams.value = data.value as unknown as StripeTeamsResponse;
        return data;
    }

    async function initializeServiceAccount() {
        const previousServiceAccount = localStorage.getItem('inkline:serviceAccount');

        if (
            previousServiceAccount &&
            teams.value.find((team) => team.id === previousServiceAccount)
        ) {
            serviceAccount.value = previousServiceAccount;
        } else if (teams.value.length > 0) {
            serviceAccount.value = teams.value[0].id;
        } else {
            serviceAccount.value = useAuthStore().currentUserId;
        }
    }

    function setServiceAccount(id: string) {
        serviceAccount.value = id;
        localStorage.setItem('inkline:serviceAccount', id);
    }

    return {
        getTeams,
        serviceAccount,
        teams,
        setServiceAccount,
        initializeServiceAccount,
        teamById,
        teamByName
    };
});
