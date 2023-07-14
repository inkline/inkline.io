import { post, useGet } from '~/api/generic';

export async function getFirebaseToken() {
    return post<{ token: string }>('/api/firebase');
}

export async function useGetTeams() {
    return useGet('/api/firebase/teams');
}
