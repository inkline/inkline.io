/* eslint-disable @typescript-eslint/ban-ts-comment */

import 'vue-global-api';
import { ViteSSG, ViteSSGContext } from 'vite-ssg';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import App from '~/App.vue';

import { Inkline, components } from '@inkline/inkline';
import { scrollBehavior } from '~/config';

import '@inkline/inkline/inkline.scss';
import '~/main.scss';

const routes = [
    { path: '/storybook' }
].concat(setupLayouts(generatedRoutes));

export const createApp = ViteSSG(App, {
    routes,
    scrollBehavior (to) {
        if (to.hash) {
            return {
                el: to.hash,
                ...scrollBehavior
            };
        }

        return { top: 0, left: 0 };
    }
}, (ctx: ViteSSGContext<true>) => {
    // @ts-ignore
    Object.values(import.meta.globEager('./modules/*.ts'))
        .map((module) => module.install?.(ctx));

    ctx.app.use(Inkline, {
        components
    });
});
