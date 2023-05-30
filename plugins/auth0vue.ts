import { defineNuxtPlugin, useRuntimeConfig } from '#imports';
import { createAuth0 } from '@auth0/auth0-vue';

export default defineNuxtPlugin(async (nuxtApp) => {
    if (typeof window === 'undefined') {
        return;
    }

    const runtimeConfig = useRuntimeConfig();
    nuxtApp.vueApp.use(
        createAuth0({
            domain: runtimeConfig.public.auth0.domain,
            clientId: runtimeConfig.public.auth0.clientId,
            useCookiesForTransactions: true,
            authorizationParams: {
                redirect_uri: runtimeConfig.public.auth0.callbackUrl
            }
        })
    );
});
