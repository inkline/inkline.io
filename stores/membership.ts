import { defineStore } from 'pinia';
import * as teamsApi from '~/api/teams';
import { computed, ref } from 'vue';
import type { MembershipType, TeamGetResponse, TeamType } from '~/types';
import { useAuthStore } from '~/stores/auth';
import { SERVICE_ACCOUNT } from '~/constants';
import { Ref } from 'vue/dist/vue';
import { TeamsGetResponse } from '~/types';

export const useMembershipStore = defineStore('membership', () => {
    const serviceAccount = ref<string | null>();
    const memberships = ref<MembershipType[]>([]);
    const invites = ref<MembershipType[]>([]);
    const teams = ref<TeamType[]>([]);

    /**
     * Getters
     */

    const ownedTeams = computed(() => teams.value.filter((team) => isTeamOwner(team.id)));
    const ownedMemberships = computed(() =>
        memberships.value.filter((membership) => isOwnMembership(membership.id))
    );

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

    function isOwnMembership(membershipId: string) {
        return membershipById(membershipId)?.userId === useAuthStore().currentUserId;
    }

    function membershipById(id: string) {
        return memberships.value.find((team) => team.id === id);
    }

    function membershipsByTeamId(teamId: string) {
        return memberships.value.filter((membership) => membership.teamId === teamId);
    }

    function teamById(id: string) {
        return teams.value.find((team) => team.id === id);
    }

    /**
     * Actions
     */

    async function getTeams() {
        const { data } = (await teamsApi.useGetTeams()) as { data: Ref<TeamsGetResponse> };

        data.value.teams.forEach((team) => addTeam(team));
        data.value.memberships.forEach((membership) => addMembership(membership));

        return data;
    }

    async function getTeam(id: string) {
        const { data } = (await teamsApi.useGetTeam(id)) as { data: Ref<TeamGetResponse> };

        addTeam(data.value.team);
        data.value.memberships.forEach((membership) => addMembership(membership));

        return data;
    }

    async function createTeam(payload: { name: string; members: string[] }) {
        const data = await teamsApi.createTeam(payload);
        addTeam(data.team);
        addMembership(data.membership);
        setServiceAccount(data.team.id);

        return data;
    }

    async function updateTeam(id: string, payload: { name: string; members: string[] }) {
        const data = await teamsApi.updateTeam(id, payload);

        memberships.value = memberships.value.filter((membership) => membership.teamId === id);
        addTeam(data.team);
        data.memberships.forEach((membership) => addMembership(membership));

        return data;
    }

    async function deleteTeam(id: string) {
        await teamsApi.deleteTeam(id);

        teams.value = teams.value.filter((team) => team.id !== id);
        memberships.value = memberships.value.filter((membership) => membership.teamId !== id);
    }

    async function initializeServiceAccount() {
        if (serviceAccount.value) {
            return;
        }

        const previousServiceAccount = localStorage.getItem('inkline:serviceAccount');
        const currentUserId = useAuthStore().currentUserId;

        if (
            previousServiceAccount &&
            (memberships.value.find((membership) => membership.teamId === previousServiceAccount) ||
                previousServiceAccount === currentUserId)
        ) {
            serviceAccount.value = previousServiceAccount;
        } else if (memberships.value.length > 0) {
            serviceAccount.value = memberships.value[0].teamId;
        } else {
            serviceAccount.value = currentUserId;
        }
    }

    /**
     * Utility functions
     */

    function setServiceAccount(id: string) {
        serviceAccount.value = id;
        localStorage.setItem('inkline:serviceAccount', id);
    }

    function addTeam(team: TeamType) {
        const teamIndex = teams.value.findIndex((t) => t.id === team.id);

        if (teamIndex === -1) {
            teams.value.push(team);
        } else {
            teams.value.splice(teamIndex, 1, {
                ...teams.value[teamIndex],
                ...team
            });
        }
    }

    function addMembership(membership: MembershipType) {
        const membershipIndex = memberships.value.findIndex((t) => t.id === membership.id);

        if (membershipIndex === -1) {
            memberships.value.push(membership);
        } else {
            memberships.value.splice(membershipIndex, 1, {
                ...memberships.value[membershipIndex],
                ...membership
            });
        }
    }

    function addInvite(invite: MembershipType) {
        if (!invites.value.find((i) => i.id === invite.id)) {
            invites.value.push(invite);
        }
    }

    return {
        getTeam,
        getTeams,
        serviceAccount,
        serviceAccountType,
        teams,
        memberships,
        invites,
        ownedTeams,
        ownedMemberships,
        isServiceAccountOwner,
        isPersonalServiceAccount,
        isTeamServiceAccount,
        setServiceAccount,
        initializeServiceAccount,
        membershipById,
        membershipsByTeamId,
        teamById,
        createTeam,
        updateTeam,
        deleteTeam
    };
});
