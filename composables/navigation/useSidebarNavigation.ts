import { NavigationPage } from '~/types';

export function useSidebarNavigation(): NavigationPage[] {
    return [
        {
            title: 'Home',
            url: '/docs'
        },
        {
            title: 'Getting started',
            active: /\/docs\/(about|concepts|installation)(\/.+)?/,
            children: [
                {
                    title: 'About Inkline',
                    url: '/docs/about',
                    index: true
                },
                {
                    title: 'Concepts',
                    url: '/docs/concepts'
                },
                {
                    title: 'Installation',
                    url: '/docs/installation',
                    children: [
                        {
                            title: 'Vite.js',
                            url: '/docs/installation/vite',
                            navigation: {
                                previous: '/docs/concepts',
                                next: '/docs/configuration'
                            }
                        },
                        {
                            title: 'Nuxt',
                            url: '/docs/installation/nuxt',
                            navigation: {
                                previous: '/docs/concepts',
                                next: '/docs/configuration'
                            }
                        },
                        {
                            title: 'Webpack.js',
                            url: '/docs/installation/webpack',
                            navigation: {
                                previous: '/docs/concepts',
                                next: '/docs/configuration'
                            }
                        },
                        {
                            title: 'Manual',
                            url: '/docs/installation/manual',
                            navigation: {
                                previous: '/docs/concepts',
                                next: '/docs/configuration'
                            }
                        },
                        {
                            title: 'CDN',
                            url: '/docs/installation/cdn',
                            navigation: {
                                previous: '/docs/concepts',
                                next: '/docs/configuration'
                            }
                        }
                    ]
                }
            ]
        },
        {
            title: 'Configuration',
            active: /\/docs\/configuration(\/.+)?/,
            children: [
                {
                    title: 'Configuration File',
                    url: '/docs/configuration/file'
                },
                {
                    title: 'Module Options',
                    children: [
                        {
                            title: 'Vite.js',
                            url: '/docs/configuration/vite',
                            navigation: {
                                previous: '/docs/configuration/file',
                                next: '/docs/configuration/plugin'
                            }
                        },
                        {
                            title: 'Nuxt',
                            url: '/docs/configuration/nuxt',
                            navigation: {
                                previous: '/docs/configuration/file',
                                next: '/docs/configuration/plugin'
                            }
                        },
                        {
                            title: 'Webpack.js',
                            url: '/docs/configuration/webpack',
                            navigation: {
                                previous: '/docs/configuration/file',
                                next: '/docs/configuration/plugin'
                            }
                        }
                    ]
                },
                {
                    title: 'Plugin Options',
                    url: '/docs/configuration/plugin'
                }
            ]
        },
        {
            title: 'UI Guidelines',
            active: /\/docs\/ui(\/.+)?/,
            children: [
                {
                    title: 'Design Tokens',
                    url: '/docs/ui/design-tokens'
                },
                {
                    title: 'Breakpoints',
                    url: '/docs/ui/breakpoints'
                },
                {
                    title: 'Layout',
                    url: '/docs/ui/layout'
                },
                {
                    title: 'Grid',
                    url: '/docs/ui/grid'
                },
                {
                    title: 'Typography',
                    url: '/docs/ui/typography'
                },
                {
                    title: 'Images',
                    url: '/docs/ui/images'
                },
                {
                    title: 'Code',
                    url: '/docs/ui/code'
                }
            ]
        },
        {
            title: 'Components',
            active: /\/docs\/components(\/.+)?/,
            children: [
                {
                    title: 'Alert',
                    url: '/docs/components/alert'
                },
                {
                    title: 'Badge',
                    url: '/docs/components/badge'
                },
                {
                    title: 'Breadcrumb',
                    url: '/docs/components/breadcrumb'
                },
                {
                    title: 'Button',
                    url: '/docs/components/button'
                },
                {
                    title: 'Button Group',
                    url: '/docs/components/button-group'
                },
                {
                    title: 'Card',
                    url: '/docs/components/card'
                },
                {
                    title: 'Collapsible',
                    url: '/docs/components/collapsible'
                },
                {
                    title: 'Dropdown',
                    url: '/docs/components/dropdown'
                },
                {
                    title: 'Hamburger Menu',
                    url: '/docs/components/hamburger-menu'
                },
                {
                    title: 'Header',
                    url: '/docs/components/header'
                },
                {
                    title: 'Icon',
                    url: '/docs/components/icon'
                },
                {
                    title: 'List Group',
                    url: '/docs/components/list-group'
                },
                {
                    title: 'Loader',
                    url: '/docs/components/loader'
                },
                {
                    title: 'Media',
                    url: '/docs/components/media'
                },
                {
                    title: 'Modal',
                    url: '/docs/components/modal'
                },
                {
                    title: 'Nav',
                    url: '/docs/components/nav'
                },
                {
                    title: 'Navbar',
                    url: '/docs/components/navbar'
                },
                {
                    title: 'Pagination',
                    url: '/docs/components/pagination'
                },
                {
                    title: 'Popover',
                    url: '/docs/components/popover'
                },
                {
                    title: 'Progress',
                    url: '/docs/components/progress'
                },
                {
                    title: 'Sidebar',
                    url: '/docs/components/sidebar'
                },
                {
                    title: 'Table',
                    url: '/docs/components/table'
                },
                {
                    title: 'Tabs',
                    url: '/docs/components/tabs'
                },
                {
                    title: 'Tooltip',
                    url: '/docs/components/tooltip'
                }
            ]
        },
        {
            title: 'Forms',
            active: /\/docs\/forms(\/.+)?/,
            children: [
                {
                    title: 'Autocomplete',
                    hidden: true,
                    children: [
                        {
                            title: 'Overview',
                            url: '/docs/forms/autocomplete',
                            index: true
                        },
                        {
                            title: 'Pagination',
                            url: '/docs/forms/autocomplete/pagination'
                        },
                        {
                            title: 'Filtering',
                            url: '/docs/forms/autocomplete/filtering'
                        },
                        {
                            title: 'Rendering',
                            url: '/docs/forms/autocomplete/rendering'
                        },
                        {
                            title: 'Advanced',
                            url: '/docs/forms/autocomplete/advanced'
                        }
                    ]
                },
                {
                    title: 'Checkbox',
                    url: '/docs/forms/checkbox'
                },
                {
                    title: 'Input',
                    url: '/docs/forms/input'
                },
                {
                    title: 'Number Input',
                    url: '/docs/forms/number-input'
                },
                {
                    title: 'Radio',
                    url: '/docs/forms/radio'
                },
                {
                    title: 'Select',
                    url: '/docs/forms/select'
                },
                {
                    title: 'Textarea',
                    url: '/docs/forms/textarea'
                },
                {
                    title: 'Toggle',
                    url: '/docs/forms/toggle'
                },
                {
                    title: 'Form',
                    url: '/docs/forms/form'
                },
                {
                    title: 'Form Group',
                    url: '/docs/forms/form-group'
                },
                {
                    title: 'Form Label',
                    url: '/docs/forms/form-label'
                },
                {
                    title: 'Form Validation',
                    url: '/docs/forms/validation',
                    children: [
                        {
                            title: 'Schema',
                            url: '/docs/forms/validation/schema'
                        },
                        {
                            title: 'Validators',
                            url: '/docs/forms/validation/validators'
                        },
                        {
                            title: 'Methods',
                            url: '/docs/forms/validation/methods'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Utilities',
            active: /\/docs\/utilities(\/.+)?/,
            children: [
                // {
                //     title: 'Overview',
                //     url: '/docs/utilities'
                // },
                // {
                //     title: 'Variants',
                //     children: [
                //         {
                //             title: 'Breakpoint',
                //             url: '/docs/utilities/variants/breakpoint'
                //         },
                //         {
                //             title: 'Important',
                //             url: '/docs/utilities/variants/important'
                //         },
                //         {
                //             title: 'Media Query',
                //             url: '/docs/utilities/variants/media-query'
                //         }
                //     ]
                // },
                {
                    title: 'Border',
                    url: '/docs/utilities/border'
                },
                {
                    title: 'Clearfix',
                    url: '/docs/utilities/clearfix'
                },
                {
                    title: 'Color',
                    url: '/docs/utilities/color'
                },
                {
                    title: 'Display',
                    url: '/docs/utilities/display'
                },
                {
                    title: 'Embed',
                    url: '/docs/utilities/embed'
                },
                {
                    title: 'Flex',
                    url: '/docs/utilities/flex'
                },
                {
                    title: 'Float',
                    url: '/docs/utilities/float'
                },
                {
                    title: 'Overflow',
                    url: '/docs/utilities/overflow'
                },
                {
                    title: 'Overlay',
                    url: '/docs/utilities/overlay'
                },
                {
                    title: 'Position',
                    url: '/docs/utilities/position'
                },
                {
                    title: 'Screen Reader',
                    url: '/docs/utilities/screen-reader'
                },
                {
                    title: 'Sizing',
                    url: '/docs/utilities/sizing'
                },
                {
                    title: 'Spacing',
                    url: '/docs/utilities/spacing'
                },
                {
                    title: 'Text',
                    url: '/docs/utilities/text'
                },
                {
                    title: 'Vertical Align',
                    url: '/docs/utilities/vertical-align'
                },
                {
                    title: 'Visibility',
                    url: '/docs/utilities/visibility'
                }
            ]
        },
        {
            title: 'Contribution Guide',
            url: '/docs/contribution-guide'
        }
    ];
}
