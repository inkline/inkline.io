import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';
import layouts from 'vite-plugin-vue-layouts';
import components from 'vite-plugin-components';
import markdown from 'vite-plugin-md';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import i18n from '@intlify/vite-plugin-vue-i18n';

import markdownPrism from 'markdown-it-prism';
// @ts-expect-error missing types
import markdownLinkAttributes from 'markdown-it-link-attributes';

function html() {
    return {
        name: 'html',
        transform (code: any, id: string) {
            if (/\.html$/.test(id)) {
                return `export default ${JSON.stringify(code)}`;
            }
        }
    };
}

/**
 * @docs https://vitejs.dev/config/
 */
export default defineConfig({
    resolve: {
        /**
         * @docs https://vitejs.dev/config/#resolve-alias
         */
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        /**
         * @docs https://github.com/vitejs/vite/tree/main/packages/plugin-vue#readme
         */
        vue({
            include: [/\.vue$/, /\.md$/],
        }),

        /**
         * @docs https://github.com/hannoeru/vite-plugin-pages
         */
        pages({
            extensions: ['vue', 'md'],
        }),

        /**
         * @docs https://github.com/JohnCampionJr/vite-plugin-vue-layouts
         */
        layouts(),

        /**
         * @docs https://github.com/antfu/vite-plugin-components
         */
        components({
            // search for subdirectories
            deep: true,
            // allow auto load markdown components under `./src/components/`
            extensions: ['vue', 'md'],
            // allow auto import and register components used in markdown
            customLoaderMatcher: (id: string) => id.endsWith('.md'),
            // generate `components.d.ts` for ts support with Volar
            globalComponentsDeclaration: true,
            // Allow subdirectories as namespace prefix for components.
            directoryAsNamespace: false,
        }),

        /**
         * @docs https://github.com/antfu/vite-plugin-md
         */
        markdown({
            wrapperClasses: 'markdown',
            headEnabled: true,
            markdownItSetup(md) {
                // https://prismjs.com/
                md.use(markdownPrism);
                md.use(markdownLinkAttributes, {
                    pattern: /^https?:\/\//,
                    attrs: {
                        target: '_blank',
                        rel: 'noopener',
                    },
                });
            },
        }),

        /**
         * @docs https://github.com/antfu/vite-plugin-pwa
         */
        pwa({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
            manifest: {
                name: 'Inkline',
                short_name: 'Inkline',
                theme_color: '#000000',
                background_color: '#ffffff',
                display: 'standalone',
                icons: [
                    {
                        src: '/pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),

        /**
         * @docs https://github.com/intlify/vite-plugin-vue-i18n
         */
        i18n({
            runtimeOnly: true,
            compositionOnly: true,
            include: [path.resolve(__dirname, 'locales/**')],
        }),

        html()
    ],

    server: {
        fs: {
            /**
             * @docs https://vitejs.dev/config/#server-fs-strict
             */
            strict: true,
        },
    },

    /**
     * @docs https://github.com/antfu/vite-ssg
     */
    ssgOptions: {
        script: 'async',
        formatting: 'minify',
    },

    /**
     * @docs https://vitejs.dev/config/#dep-optimization-options
     */
    optimizeDeps: {
        include: [
            'vue',
            'vue-router',
            '@vueuse/core'
        ],
        exclude: [
            'vue-demi'
        ],
    },
});
