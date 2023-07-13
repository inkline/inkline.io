import { defineStore } from 'pinia';
import { inject } from 'vue';
import { FIREBASE_AUTH_KEY } from '~/plugins/firebase';
import {
    signInWithCustomToken as firebaseSignInWithCustomToken,
    updateProfile as firebaseUpdateProfile
} from 'firebase/auth';
import { AUTH0_INJECTION_KEY } from '@auth0/auth0-vue';
import { getFirebaseToken } from '~/api';

export const useFirebaseStore = defineStore('firebase', () => {
    const auth0 = inject(AUTH0_INJECTION_KEY, null);
    const firebaseAuth = inject(FIREBASE_AUTH_KEY, null);

    async function setAuthToken() {
        if (!auth0?.isAuthenticated.value) {
            return;
        }

        try {
            const { token } = await getFirebaseToken();
            await setToken(token);
            await updateProfile();
        } catch (error) {
            console.log(error);
        }
    }

    async function updateProfile() {
        if (!firebaseAuth?.currentUser || !auth0?.isAuthenticated.value) {
            return;
        }

        await firebaseUpdateProfile(firebaseAuth.currentUser, {
            displayName: auth0.user.value.name,
            photoURL: auth0.user.value.picture
        });
    }

    async function setToken(token: string) {
        if (!firebaseAuth) {
            return;
        }

        await firebaseSignInWithCustomToken(firebaseAuth, token);
    }

    return {
        setAuthToken
    };
});
