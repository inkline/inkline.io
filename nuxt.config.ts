import en from './i18n/en';

/**
 * @docs https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
    /**
     * @docs https://nuxt.com/docs/api/configuration/nuxt-config/#modules
     */
    modules: [
        '@nuxt/content',
        '@nuxt/image-edge',
        '@inkline/plugin/nuxt',
        '@nuxtjs/i18n',
        'nuxt-icon'
    ],
    /**
     * @docs https://nuxt.com/docs/api/configuration/nuxt-config/#css
     */
    css: ['~/css/index.scss'],
    /**
     * @docs https://nuxt.com/docs/api/configuration/nuxt-config/#app
     */
    app: {
        head: {
            charset: 'utf-8',
            titleTemplate: (titleChunk) => {
                return titleChunk ? `${titleChunk} - Inkline` : 'Inkline';
            },
            viewport: 'width=device-width, initial-scale=1',
            meta: [{ name: 'description', content: 'My amazing site.' }]
        }
    },
    /**
     * @docs https://nuxt.com/docs/api/configuration/nuxt-config#components
     */
    components: {
        dirs: [
            {
                path: '~/components/global',
                global: true
            },
            {
                path: '~/components/content',
                global: true
            },
            '~/components'
        ]
    },
    /**
     * @docs https://content.nuxtjs.org
     */
    content: {
        documentDriven: true,
        highlight: {
            theme: 'css-variables',
            preload: ['diff', 'json', 'js', 'ts', 'css', 'scss', 'shell', 'html', 'md', 'yaml']
        }
    },
    /**
     * @docs https://nuxt.com/docs/api/configuration/nuxt-config/#devserver
     */
    devServer: {},
    /**
     * @docs https://v8.i18n.nuxtjs.org
     */
    i18n: {
        strategy: 'prefix_and_default',
        defaultLocale: 'en',
        locales: [{ code: 'en', iso: 'en', file: 'i18n/en.ts' }],
        vueI18n: {
            legacy: false,
            locale: 'en',
            messages: {
                en
            }
        }
        /**
         * @docs https://v8.i18n.nuxtjs.org/guide/lazy-load-translations Not yet supported
         */
        // lazy: true,
        // langDir: '~/i18n/'
    },
    /**
     * @docs https://next.inkline.io
     */
    inkline: {
        globals: {
            colorMode: 'light'
        }
    },
    /**
     * @docs https://v1.image.nuxtjs.org/configuration
     */
    image: {
        dir: 'assets'
    },
    /**
     * @docs https://nuxt.com/docs/api/configuration/nuxt-config/#vite
     */
    vite: {
        optimizeDeps: {
            exclude: ['@inkline/config', '@inkline/inkline']
        }
    },
    /**
     * @docs https://nuxt.com/docs/guide/concepts/auto-imports#disable-auto-imports
     */
    imports: {
        autoImport: false
    }
});
