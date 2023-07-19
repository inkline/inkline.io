import { defineStore } from 'pinia';
import * as firebaseApi from '~/api/firebase';
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
        const { data } = (await firebaseApi.useGetTeams()) as { data: Ref<TeamsGetResponse> };

        data.value.teams.forEach((team) => addTeam(team));
        data.value.memberships.forEach((membership) => addMembership(membership));

        return data;
    }

    async function getTeam(id: string) {
        const { data } = (await firebaseApi.useGetTeam(id)) as { data: Ref<TeamGetResponse> };

        addTeam(data.value.team);
        data.value.memberships.forEach((membership) => addMembership(membership));

        return data;
    }

    async function createTeam(payload: { name: string; members: string[] }) {
        const { team, membership } = await firebaseApi.createTeam(payload);
        teams.value.push(team);
        memberships.value.push(membership);
        setServiceAccount(team.id);
    }

    async function initializeServiceAccount() {
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
        if (!teams.value.find((t) => t.id === team.id)) {
            teams.value.push(team);
        }
    }

    function addMembership(membership: MembershipType) {
        if (!memberships.value.find((m) => m.id === membership.id)) {
            memberships.value.push(membership);
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
        createTeam
    };
});
