import { get } from '~/api/generic';
import type { TokenGetResponse } from '~/types';

export async function getToken(query: { teamId?: string } = {}) {
    return get<TokenGetResponse>('/api/token', query);
}
