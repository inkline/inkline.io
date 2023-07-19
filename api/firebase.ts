import { post, useGet } from '~/api/generic';
import type {TeamsEstimatePostResponse, TeamsPostResponse} from '~/types';

export async function getFirebaseToken() {
    return post<{ token: string }>('/api/firebase');
}

export async function useGetTeams() {
    return useGet('/api/teams');
}

export async function useGetTeam(id: string) {
    return useGet(`/api/teams/${id}`);
}

export async function createTeam(payload: { name: string; members: string[] }) {
    return post<TeamsPostResponse>('/api/teams', payload);
}

export async function createTeamEstimate(payload: { members: string[] }) {
    return post<TeamsEstimatePostResponse>('/api/teams/estimate', payload);
}
