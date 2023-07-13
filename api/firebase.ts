import { post } from '~/api/generic';

export async function getFirebaseToken() {
    return post<{ token: string }>('/api/firebase');
}
