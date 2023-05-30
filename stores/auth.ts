import { defineStore } from 'pinia';
import { inject, ref, watch } from 'vue';
import { AUTH0_INJECTION_KEY } from '@auth0/auth0-vue';
import type { User } from '@auth0/auth0-spa-js';

export const useAuthStore = defineStore('auth', () => {
    const auth0 = inject(AUTH0_INJECTION_KEY, undefined);
    const isAuthenticated = ref();
    const currentUser = ref<User>();

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
        return auth0?.loginWithRedirect();
    }

    async function logout() {
        return auth0?.logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });
    }

    return {
        isAuthenticated,
        currentUser,
        handleRedirectCallback,
        login,
        logout
    };
});
