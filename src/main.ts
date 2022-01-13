/* eslint-disable @typescript-eslint/ban-ts-comment */

import 'vue-global-api';
import { ViteSSG, ViteSSGContext } from 'vite-ssg';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { createHead } from '@vueuse/head';
import App from '~/App.vue';

import { Inkline } from '@inkline/inkline';
import { scrollBehavior } from '~/config';

import '@inkline/inkline/inkline.scss';
import '~/main.scss';

const head = createHead();

const routes = setupLayouts(generatedRoutes);
const catchAllRoute = routes
    .find((route) => route.path === '/:all(.*)*');

if (catchAllRoute) {
    catchAllRoute.beforeEnter = (to) => {
        return ![
            '/storybook'
        ].find((blacklistedPath) => to.path.startsWith(blacklistedPath));
    };
}

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

    ctx.app.use(head);
    ctx.app.use(Inkline, {
        colorMode: 'light'
    });
});
