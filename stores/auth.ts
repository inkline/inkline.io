import { defineStore } from 'pinia';
import { inject, ref, watch } from 'vue';
import { AUTH0_INJECTION_KEY } from '@auth0/auth0-vue';
import type { User } from '@auth0/auth0-spa-js';
import { RedirectLoginOptions } from '@auth0/auth0-vue/src/interfaces/auth0-vue-client-options';
import { AppState } from '@auth0/auth0-vue/src/interfaces/app-state';
import { useRoute } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
    const auth0 = inject(AUTH0_INJECTION_KEY, undefined);
    const isAuthenticated = ref();
    const currentUser = ref<User>();
    const route = useRoute();

    if (auth0?.isAuthenticated) {
        watch(auth0.isAuthenticated, (value) => {
            isAuthenticated.value = value;
        });
    }

    if (auth0?.user) {
        watch(auth0.user, (value) => {
            currentUser.value = value;
        });
    }

    async function handleRedirectCallback() {
        return auth0?.handleRedirectCallback();
    }

    async function login() {
        return auth0?.loginWithRedirect({
            appState: {
                target: route.fullPath
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
