import { UserModule } from '~/types';
import Rollbar from 'rollbar';

// https://docs.rollbar.com/docs/vue-js
export const install: UserModule = ({ isClient, app }) => {
    if (!isClient) { return; }

    const rollbar = new Rollbar({
        accessToken: 'a666e99cf45947f3b8ea418609dfd1ba',
        captureUncaught: true,
        captureUnhandledRejections: true,
        payload: {
            environment: process.env.NODE_ENV || 'development'
        }
    });

    app.config.globalProperties.$rollbar = rollbar;
    app.provide('rollbar', rollbar);

    app.config.errorHandler = (error) => {
        rollbar.error(error);

        throw error; // rethrow
    };
};
