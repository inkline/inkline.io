import { defineStore } from 'pinia';
import * as stripeApi from '~/api/stripe';
import { ref } from 'vue';
import { StripeTeamsResponse } from '~/types';

export const useMembershipStore = defineStore('membership', () => {
    const teams = ref<StripeTeamsResponse>([]);

    function teamById(id: string) {
        return teams.value.find((team) => team.id === id);
    }

    function teamByName(name: string) {
        return teams.value.find((team) => team.name === name);
    }

    async function getTeams() {
        // const { data } = await stripeApi.useGetTeams();
        // teams.value = data.value as unknown as StripeTeamsResponse;
        // return data;
    }

    return {
        getTeams,
        teams,
        teamById,
        teamByName
    };
});
