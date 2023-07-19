import { ManagementClient } from 'auth0';

export const auth0 = new ManagementClient({
    token: process.env.NUXT_AUTH0_MANAGEMENT_API_TOKEN as string,
    domain: process.env.NUXT_PUBLIC_AUTH0_DOMAIN as string,
    scope: 'read:users'
});
