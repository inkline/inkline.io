import { UserModule } from '~/types';
import createAnalytics from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';

// https://docs.rollbar.com/docs/vue-js
export const install: UserModule = ({ isClient, app }) => {
    if (!isClient || process.env.NODE_ENV === 'development') { return; }

    const analytics = createAnalytics({
        app: 'inkline',
        plugins: [
            googleTagManager({
                containerId: 'GTM-KD44VC3'
            })
        ]
    });

    app.config.globalProperties.$analytics = analytics;
    app.provide('analytics', analytics);

    /* Track a page view */
    analytics.page();
};
