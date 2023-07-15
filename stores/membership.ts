import { defineStore } from 'pinia';
import * as firebaseApi from '~/api/firebase';
import { computed, ref } from 'vue';
import type { TeamType } from '~/types';
import { useAuthStore } from '~/stores/auth';
import { SERVICE_ACCOUNT } from '~/constants';

export const useMembershipStore = defineStore('membership', () => {
    const serviceAccount = ref<string | null>();
    const teams = ref<TeamType[]>([]);

    const ownedTeams = computed(() => teams.value.filter((team) => isTeamOwner(team.id)));

    const serviceAccountType = computed(() =>
        serviceAccount.value === useAuthStore().currentUserId
            ? SERVICE_ACCOUNT.PERSONAL
            : SERVICE_ACCOUNT.TEAM
    );

    const isPersonalServiceAccount = computed(
        () => serviceAccountType.value === SERVICE_ACCOUNT.PERSONAL
    );

    const isTeamServiceAccount = computed(() => serviceAccountType.value === SERVICE_ACCOUNT.TEAM);

    const isServiceAccountOwner = computed(
        () =>
            serviceAccountType.value === SERVICE_ACCOUNT.PERSONAL ||
            isTeamOwner(serviceAccount.value as string)
    );

    function isTeamOwner(teamId: string) {
        return teamById(teamId)?.ownerId === useAuthStore().currentUserId;
    }

    function teamById(id: string) {
        return teams.value.find((team) => team.id === id);
    }

    function teamByName(name: string) {
        return teams.value.find((team) => team.name === name);
    }

    async function getTeams() {
        const { data } = await firebaseApi.useGetTeams();
        teams.value = data.value as unknown as TeamType[];
        return data;
    }

    async function initializeServiceAccount() {
        const previousServiceAccount = localStorage.getItem('inkline:serviceAccount');
        const currentUserId = useAuthStore().currentUserId;

        if (
            previousServiceAccount &&
            (teams.value.find((team) => team.id === previousServiceAccount) ||
                previousServiceAccount === currentUserId)
        ) {
            serviceAccount.value = previousServiceAccount;
        } else if (teams.value.length > 0) {
            serviceAccount.value = teams.value[0].id;
        } else {
            serviceAccount.value = currentUserId;
        }
    }

    function setServiceAccount(id: string) {
        serviceAccount.value = id;
        localStorage.setItem('inkline:serviceAccount', id);
    }

    async function createTeam(payload: { name: string; members: string[] }) {
        const { team, membership } = await firebaseApi.createTeam(payload);
        teams.value.push(team);
        setServiceAccount(team.id);
    }

    return {
        getTeams,
        serviceAccount,
        serviceAccountType,
        teams,
        ownedTeams,
        isServiceAccountOwner,
        isPersonalServiceAccount,
        isTeamServiceAccount,
        setServiceAccount,
        initializeServiceAccount,
        teamById,
        teamByName,
        createTeam
    };
});
