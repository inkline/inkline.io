/* eslint-disable @typescript-eslint/ban-ts-comment */

import 'vue-global-api';
import { ViteSSG, ViteSSGContext } from 'vite-ssg';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import App from '~/App.vue';

import { Inkline } from '@inkline/inkline';
import * as components from '@inkline/inkline/components';
import * as inklineIcons from '@inkline/icons/packs/inkline';
import {
    fasSun,
    fasBook,
    fasMoon,
    fasStar,
    fasShoppingCart,
    fasCheckCircle,
    fasHeart,
    fasCode,
    fasComments,
    fasGlobe
} from '@inkline/icons/packs/fontawesome/solid';
import {
    farClone
} from '@inkline/icons/packs/fontawesome/regular';
import {
    fabGithub,
    fabTwitter,
    fabDiscord
} from '@inkline/icons/packs/fontawesome/brands';
import { scrollBehavior } from '~/config';

import '@inkline/inkline/inkline.scss';
import '~/main.scss';

const routes = setupLayouts(generatedRoutes);

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
        icons: {
            fasSun,
            fasBook,
            fasMoon,
            fasStar,
            fasHeart,
            fasCheckCircle,
            fasShoppingCart,
            fasCode,
            fasComments,
            fabGithub,
            fabTwitter,
            fabDiscord,
            fasGlobe,
            farClone,
            ...inklineIcons
        },
        components
    });
});
