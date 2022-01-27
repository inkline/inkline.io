import { ViteSSG } from 'vite-ssg';
import App from './app.vue';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { scrollBehavior } from '~/config';
import * as modules from '~/modules';

import '@inkline/inkline/inkline.scss';
import '~/main.scss';

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(App, {
    routes,
    scrollBehavior
}, (ctx) => {
    Object.values(modules).forEach((module) => module(ctx));
});
