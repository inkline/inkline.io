import { defineNuxtPlugin, useRuntimeConfig } from '#imports';
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { InjectionKey } from 'vue';

export const FIREBASE_AUTH_KEY = Symbol('firebase/auth') as InjectionKey<Auth>;
export const FIREBASE_FIRESTORE_KEY = Symbol('firebase/firestore') as InjectionKey<Firestore>;

export default defineNuxtPlugin(async (nuxtApp) => {
    if (typeof window === 'undefined') {
        return;
    }

    const config = useRuntimeConfig();
    const firebaseConfig = {
        apiKey: config.public.firebase.apiKey,
        authDomain: config.public.firebase.authDomain,
        projectId: config.public.firebase.projectId,
        storageBucket: config.public.firebase.storageBucket,
        messagingSenderId: config.public.firebase.messagingSenderId,
        appId: config.public.firebase.appId,
        measurementId: config.public.firebase.measurementId
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    // const firestore = getFirestore(app);

    // nuxtApp.vueApp.provide(FIREBASE_AUTH_KEY, auth);
    // nuxtApp.vueApp.provide(FIREBASE_FIRESTORE_KEY, firestore);
});
