import { defineNuxtPlugin, useRuntimeConfig } from '#imports';
import { createAuth0Client } from '@auth0/auth0-spa-js';
import { AUTH0_SYMBOL } from '~/constants';

export default defineNuxtPlugin(async (nuxtApp) => {
    if (typeof window === 'undefined' || true) {
        return;
    }

    const runtimeConfig = useRuntimeConfig();
    const client = await createAuth0Client({
        domain: runtimeConfig.public.auth0.domain,
        clientId: runtimeConfig.public.auth0.clientId,
        useCookiesForTransactions: true,
        authorizationParams: {
            redirect_uri: runtimeConfig.public.auth0.callbackUrl
        }
    });

    nuxtApp.vueApp.provide(AUTH0_SYMBOL, client);
});
