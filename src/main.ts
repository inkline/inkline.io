/* eslint-disable @typescript-eslint/ban-ts-comment */

import 'vue-global-api';
import { ref } from 'vue';
import { ViteSSG, ViteSSGContext } from 'vite-ssg';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import App from '~/App.vue';

import { Inkline, components } from '@inkline/inkline';
import { scrollBehavior } from '~/config';

import '@inkline/inkline/inkline.scss';
import '~/main.scss';
import { HeadObjectPlain } from '@vueuse/head';

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

    // ctx.app.use(head);
    ctx.app.use(Inkline, {
        components,
        colorMode: 'light'
    });

    ctx.head!.addHeadObjs(ref<HeadObjectPlain>({
        meta: [
            {
                name: 'og:image',
                content: 'https://inkline.io/assets/images/og-image.png'
            },
            {
                name: 'og:type',
                content: 'website'
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                name: 'twitter:site',
                content: '@inkline'
            },
            {
                name: 'twitter:creator',
                content: '@alexgrozav'
            }
        ]
    }));

    ctx.router.afterEach((to) => {
        ctx.head!.addHeadObjs(ref<HeadObjectPlain>({
            meta: [
                {
                    name: 'og:url',
                    content: `https://inkline.io${to.fullPath}`
                }
            ]
        }));
    });
});
