import { defineStore } from 'pinia';
import { inject, nextTick, ref, watch } from 'vue';
import { AUTH0_INJECTION_KEY } from '@auth0/auth0-vue';
import type { User } from '@auth0/auth0-spa-js';
import { RedirectLoginOptions } from '@auth0/auth0-vue/src/interfaces/auth0-vue-client-options';
import { useRoute } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
    const auth0 = inject(AUTH0_INJECTION_KEY, null);
    const isAuthenticated = ref();
    const currentUser = ref<User | undefined>();
    const route = useRoute();

    if (auth0) {
        watch(auth0.isAuthenticated, (value) => {
            isAuthenticated.value = value;
        });

        watch(auth0.user, (value) => {
            currentUser.value = value;
        });

        nextTick().then(() => {
            isAuthenticated.value = auth0.isAuthenticated.value;
            currentUser.value = auth0.user.value;
        });
    }

    async function handleRedirectCallback() {
        return auth0?.handleRedirectCallback();
    }

    async function login(options?: RedirectLoginOptions) {
        return auth0?.loginWithRedirect({
            ...options,
            appState: {
                target: route.fullPath,
                ...options?.appState
            }
        });
    }

    async function getAccessToken() {
        return auth0?.getAccessTokenSilently();
    }

    async function logout() {
        return auth0?.logout({
            logoutParams: {
                returnTo: `${window.location.origin}/callback?redirectTo=${route.fullPath}`
            }
        });
    }

    return {
        isAuthenticated,
        currentUser,
        getAccessToken,
        handleRedirectCallback,
        login,
        logout
    };
});
