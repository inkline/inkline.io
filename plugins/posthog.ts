import { defineNuxtPlugin } from '#imports';
import { onNuxtReady } from '#app';
import { ref } from 'vue';
import type { Router } from 'vue-router';
import type { PostHog } from 'posthog-js';

const postHogRef = ref<PostHog | undefined>();
export function getPostHog(): PostHog | undefined {
    return postHogRef.value;
}

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window === 'undefined' || process.env.NODE_ENV === 'development') {
        return;
    }

    onNuxtReady(async () => {
        const { default: postHog } = await import('posthog-js');
        const router = nuxtApp.$router as Router;

        postHogRef.value = postHog;

        /**
         * Initialize PostHog
         */
        postHog.init('phc_wyDIkcdL6Ir4Q4uxKODOIiGo4ydCW6HX27FngTmPnAp', {
            api_host: 'https://eu.posthog.com',
            autocapture: false,
            capture_pageview: false,
            capture_pageleave: false
        });

        /**
         * Add a global beforeRouteLeave hook to capture pageviews
         */
        router.beforeEach((to, from, next) => {
            postHog.capture('$pageleave', {
                $current_url: `${window.location.origin}${from.fullPath}`
            });

            postHog.capture('$pageview', {
                $current_url: `${window.location.origin}${to.fullPath}`
            });

            next();
        });
    });
});
