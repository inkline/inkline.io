import { addRouteMiddleware, defineNuxtPlugin, useRuntimeConfig } from '#imports';
import { createAuth0 } from '@auth0/auth0-vue';
import { useRoute } from 'vue-router';
import { abortNavigation, navigateTo } from '#app';

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

    addRouteMiddleware('authenticated', async (to) => {
        if (typeof window !== 'undefined') {
            await auth0.checkSession();
            if (!auth0.isAuthenticated.value) {
                await auth0.loginWithRedirect({
                    appState: {
                        target: to.fullPath
                    }
                });
                return abortNavigation();
            }
        }
    });
});
