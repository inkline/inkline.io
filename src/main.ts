/* eslint-disable @typescript-eslint/ban-ts-comment */

import 'vue-global-api';
import { ViteSSG, ViteSSGContext } from 'vite-ssg';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import App from '~/App.vue';
import { Inkline } from '@inkline/inkline';

import * as inklineIcons from '@inkline/icons/packs/inkline';
import { fasSun, fasMoon } from '@inkline/icons/packs/fontawesome/solid';
import { fabGithub } from '@inkline/icons/packs/fontawesome/brands';

import '~/css/main.scss';

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(App, { routes }, (ctx: ViteSSGContext<true>) => {
    // @ts-ignore
    Object.values(import.meta.globEager('./modules/*.ts'))
        .map((module) => module.install?.(ctx));

    ctx.app.use(Inkline, {
        icons: {
            fasSun,
            fasMoon,
            fabGithub,
            ...inklineIcons
        }
    });
});
