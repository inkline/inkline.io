import path from 'path';
import { defineConfig } from 'vite';

// Plugins
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';
import layouts from 'vite-plugin-vue-layouts';
import i18n from '@intlify/vite-plugin-vue-i18n';
import markdown from 'vite-plugin-md';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import { imagetools } from 'vite-imagetools';
import icons from 'unplugin-icons/vite';
import iconsResolver from 'unplugin-icons/resolver';
import components from 'unplugin-vue-components/vite';
import markdownPrism from 'markdown-it-prism';
// @ts-expect-error missing types
import markdownNamedHeadings from 'markdown-it-named-headings';
// @ts-expect-error missing types
import markdownLinkAttributes from 'markdown-it-link-attributes';

// Resolvers
import { sitemapResolver } from './resolvers/sitemap';

/**
 * @docs https://vitejs.dev/config/
 */
export default defineConfig(({ command }) => ({
    plugins: [
        /**
         * @docs https://github.com/vitejs/vite/tree/main/packages/plugin-vue#readme
         */
        vue({
            include: [/\.vue$/, /\.md$/],
            template: {
                ssr: true,
                compilerOptions: {
                    directiveTransforms: {
                        clickOutside: () => ({
                            props: [],
                            needRuntime: true
                        })
                    }
                }
            }
        }),

        /**
         * @docs https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
         */
        i18n({
            include: path.resolve(__dirname, 'src/i18n/**')
        }),

        /**
         * @docs https://github.com/JonasKruckenberg/imagetools
         */
        imagetools({
            exclude: [],
            defaultDirectives: (): URLSearchParams => {
                return new URLSearchParams('quality=80');
            }
        }),

        /**
         * @docs https://github.com/hannoeru/vite-plugin-pages
         */
        pages({
            extensions: ['vue', 'md'],
            onRoutesGenerated: (routes) => {
                if (command === 'build') {
                    sitemapResolver(routes).then(() => console.log('\n\nSitemap generated.\n'));
                }

                return routes;
            }
        }),

        /**
         * @docs https://github.com/JohnCampionJr/vite-plugin-vue-layouts
         */
        layouts(),

        /**
         * @docs https://github.com/antfu/unplugin-vue-components
         */
        components({
            extensions: ['vue', 'md'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dts: 'src/components.d.ts',
            resolvers: [
                iconsResolver({
                    prefix: 'icon'
                })
            ]
        }),

        /**
         * @docs https://github.com/antfu/unplugin-icons
         */
        icons(),

        /**
         * @docs https://github.com/antfu/vite-plugin-md
         */
        markdown({
            wrapperClasses: 'markdown',
            headEnabled: true,
            markdownItSetup (md) {
                // https://prismjs.com/
                md.use(markdownPrism, {
                    plugins: [
                        'inline-color'
                    ]
                });
                md.use(markdownNamedHeadings);
                md.use(markdownLinkAttributes, {
                    pattern: /^https?:\/\//,
                    attrs: {
                        target: '_blank',
                        rel: 'noopener'
                    }
                });
            }
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
                        type: 'image/png'
                    },
                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    },
                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable'
                    }
                ]
            }
        })
    ],

    resolve: {
        /**
         * @docs https://vitejs.dev/config/#resolve-alias
         */
        alias: {
            '~': `${path.resolve(__dirname, 'src')}`
        }
    },

    server: {
        fs: {
            /**
             * @docs https://vitejs.dev/config/#server-fs-strict
             */
            strict: true
        }
    },

    /**
     * @docs https://vitejs.dev/config/#css-preprocessoroptions
     */
    css: {
        preprocessorOptions: {
            scss: { charset: false }
        }
    },

    /**
     * @docs https://github.com/antfu/vite-ssg
     */
    ssgOptions: {
        script: 'async',
        formatting: 'minify',
        format: 'cjs',
        dirStyle: 'nested'
    }
}));
