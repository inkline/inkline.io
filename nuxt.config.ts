/**
 * @docs https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
    /**
     * @docs https://nuxt.com/docs/api/configuration/nuxt-config/#modules
     */
    modules: [
        '@nuxt/content',
        '@nuxt/image',
        '@inkline/plugin/nuxt',
        '@nuxtjs/i18n',
        '@vite-pwa/nuxt',
        '@unocss/nuxt',
        'nuxt-icon',
        'nuxt-simple-sitemap'
    ],
    /**
     * @docs https://nuxt.com/docs/api/configuration/nuxt-config#payloadextraction
     */
    experimental: {
        payloadExtraction: true
    },
    /**
     * @docs https://nuxt.com/docs/api/configuration/nuxt-config#app
     */
    app: {
        /**
         * @docs https://nuxt.com/docs/api/configuration/nuxt-config#head
         */
        head: {
            title: 'Inkline',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
                { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: 'black' }
            ],
            meta: [
                {
                    name: 'description',
                    content:
                        'Inkline is the intuitive UI Components library for building a high-quality, developer-friendly, configurable, and accessible Vue.js Design System.'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'https://www.inkline.io/assets/images/social/og-image.png'
                },
                {
                    name: 'twitter:site',
                    content: '@inkline'
                },
                {
                    name: 'twitter:creator',
                    content: '@alexgrozav'
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                }
            ]
        },
        /**
         * @docs https://nuxt.com/docs/getting-started/transitions
         */
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' }
    },
    /**
     * @docs https://nuxt.com/docs/api/configuration/nuxt-config/#css
     */
    css: ['~/css/index.scss'],
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
        documentDriven: false,
        highlight: {
            theme: {
                default: 'github-light',
                'dark-theme': 'github-dark'
            },
            preload: [
                'diff',
                'json',
                'js',
                'ts',
                'css',
                'scss',
                'shell',
                'html',
                'md',
                'yaml',
                'vue'
            ]
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
        strategy: 'prefix_except_default',
        baseUrl: 'https://www.inkline.io',
        locales: [
            {
                code: 'en',
                iso: 'en',
                file: 'en.ts'
            }
        ],
        lazy: true,
        langDir: 'i18n/',
        defaultLocale: 'en'
    },
    /**
     * @docs https://next.inkline.io
     */
    inkline: {
        globals: {
            colorMode: 'light'
        },
        import: {
            utilities: false
        }
    },
    /**
     * @docs https://v1.image.nuxtjs.org/configuration
     */
    image: {
        provider: 'ipx',
        dir: 'assets',
        domains: ['next.inkline.io', 'inkline.io']
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
    },
    /**
     * @docs https://vite-pwa-org.netlify.app/
     */
    pwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: 'Inkline',
            short_name: 'Inkline',
            theme_color: '#ffffff',
            icons: [
                {
                    src: 'pwa-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                },
                {
                    src: 'pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any maskable'
                }
            ]
        }
    },

    /**
     * @docs https://nuxtseo.com/site-config/getting-started/how-it-works
     */
    site: {
        // process.env.NUXT_PUBLIC_SITE_URL will take precedence
        url: 'https://www.inkline.io'
    },
    /**
     * @docs https://nuxt.com/docs/api/nuxt-config#postcss
     */
    postcss: {
        plugins: {
            'postcss-preset-env': {}
        }
    }
});
