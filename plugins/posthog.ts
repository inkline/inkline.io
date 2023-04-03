import posthog from 'posthog-js';
import { defineNuxtPlugin } from '#imports';
import { onBeforeRouteLeave } from 'vue-router';

export default defineNuxtPlugin(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV === 'development') {
        return;
    }

    /**
     * Initialize PostHog
     */
    posthog.init('phc_wyDIkcdL6Ir4Q4uxKODOIiGo4ydCW6HX27FngTmPnAp', {
        api_host: 'https://eu.posthog.com',
        autocapture: false
    });

    /**
     * Add a global beforeRouteLeave hook to capture pageviews
     */
    onBeforeRouteLeave((to, from, next) => {
        posthog.capture('$pageleave');
        posthog.capture('$pageview', {
            $current_url: to.fullPath
        });
        next();
    });
});
