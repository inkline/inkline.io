import { auth0 } from '~/server/utilities';

export async function getUserById(id: string) {
    return auth0.getUser({ id });
}
