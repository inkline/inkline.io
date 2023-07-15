import { post, useGet } from '~/api/generic';
import { TeamsPostResponse } from '~/types';

export async function getFirebaseToken() {
    return post<{ token: string }>('/api/firebase');
}

export async function useGetTeams() {
    return useGet('/api/firebase/teams');
}

export async function createTeam(payload: { name: string; members: string[] }) {
    return post<TeamsPostResponse>('/api/firebase/teams', payload);
}
