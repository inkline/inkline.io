import { defineNuxtPlugin, useRuntimeConfig } from '#imports';
import { createAuth0 } from '@auth0/auth0-vue';
import { watch } from 'vue';
import { useAuthStore } from '~/stores';

export default defineNuxtPlugin(async (nuxtApp) => {
    if (typeof window === 'undefined') {
        return;
    }

    const runtimeConfig = useRuntimeConfig();
    const auth0 = createAuth0({
        domain: runtimeConfig.public.auth0.domain,
        issuer: runtimeConfig.public.auth0.issuerBaseURL,
        clientId: runtimeConfig.public.auth0.clientId,
        useCookiesForTransactions: true,
        cacheLocation: 'localstorage',
        authorizationParams: {
            audience: runtimeConfig.public.auth0.audience,
            redirect_uri: runtimeConfig.public.auth0.callbackUrl
        }
    });

    nuxtApp.vueApp.use(auth0);
    //
    // const authStore = useAuthStore();
    // watch(auth0.isAuthenticated, (value) => {
    //     authStore.isAuthenticated.value = value;
    // });
});
