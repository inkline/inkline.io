import { get, post } from '~/api/generic';
import type { TokenGetResponse, TokenPostResponse } from '~/types';

export async function getToken(query: { teamId?: string } = {}) {
    return get<TokenGetResponse>('/api/token', query);
}

export async function regenerateToken(body: { teamId?: string } = {}) {
    return post<TokenPostResponse>('/api/token', body);
}
