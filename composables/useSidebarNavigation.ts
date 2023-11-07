import type { NavigationPage } from '~/types';

export function useSidebarNavigation(): NavigationPage[] {
    return [
        {
            title: 'Home',
            url: '/docs',
            index: true
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
                    index: true,
                    children: [
                        {
                            title: 'Vite.js',
                            url: '/docs/installation/vite',
                            navigation: {
                                previous: '/docs/concepts',
                                next: '/docs/configuration/file'
                            }
                        },
                        {
                            title: 'Nuxt',
                            url: '/docs/installation/nuxt',
                            navigation: {
                                previous: '/docs/concepts',
                                next: '/docs/configuration/file'
                            }
                        },
                        {
                            title: 'Webpack.js',
                            url: '/docs/installation/webpack',
                            navigation: {
                                previous: '/docs/concepts',
                                next: '/docs/configuration/file'
                            }
                        },
                        {
                            title: 'Manual',
                            url: '/docs/installation/manual',
                            navigation: {
                                previous: '/docs/concepts',
                                next: '/docs/configuration/file'
                            }
                        },
                        {
                            title: 'CDN',
                            url: '/docs/installation/cdn',
                            navigation: {
                                previous: '/docs/concepts',
                                next: '/docs/configuration/file'
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
                    url: '/docs/configuration/file',
                    navigation: {
                        previous: '/docs/installation'
                    }
                },
                {
                    title: 'Plugin Options',
                    url: '/docs/configuration/plugin'
                },
                {
                    title: 'Module Options',
                    children: [
                        {
                            title: 'Vite.js',
                            url: '/docs/configuration/vite',
                            navigation: {
                                previous: '/docs/configuration/plugin',
                                next: '/docs/ui/design-tokens'
                            }
                        },
                        {
                            title: 'Nuxt',
                            url: '/docs/configuration/nuxt',
                            navigation: {
                                previous: '/docs/configuration/plugin',
                                next: '/docs/ui/design-tokens'
                            }
                        },
                        {
                            title: 'Webpack.js',
                            url: '/docs/configuration/webpack',
                            navigation: {
                                previous: '/docs/configuration/plugin',
                                next: '/docs/ui/design-tokens'
                            }
                        }
                    ]
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
                    title: 'Toast',
                    url: '/docs/components/toast'
                },
                {
                    title: 'Tooltip',
                    url: '/docs/components/tooltip'
                }
            ]
        },
        {
            title: 'Form Components',
            active: /\/docs\/forms\/components(\/.+)?/,
            children: [
                {
                    title: 'Checkbox',
                    children: [
                        {
                            title: 'Individual',
                            url: '/docs/forms/components/checkbox'
                        },
                        {
                            title: 'Group',
                            url: '/docs/forms/components/checkbox-group'
                        },
                        {
                            title: 'Buttons',
                            url: '/docs/forms/components/checkbox-buttons'
                        }
                    ]
                },
                {
                    title: 'Input',
                    url: '/docs/forms/components/input'
                },
                {
                    title: 'Number Input',
                    url: '/docs/forms/components/number-input'
                },
                {
                    title: 'Radio Group',
                    children: [
                        {
                            title: 'Group',
                            url: '/docs/forms/components/radio-group'
                        },
                        {
                            title: 'Buttons',
                            url: '/docs/forms/components/radio-buttons'
                        }
                    ]
                },
                {
                    title: 'Select',
                    url: '/docs/forms/components/select'
                },
                {
                    title: 'Textarea',
                    url: '/docs/forms/components/textarea'
                },
                {
                    title: 'Toggle',
                    url: '/docs/forms/components/toggle'
                },
                {
                    title: 'Form',
                    url: '/docs/forms/components/form'
                },
                {
                    title: 'Form Group',
                    url: '/docs/forms/components/form-group'
                },
                {
                    title: 'Form Label',
                    url: '/docs/forms/components/form-label'
                },
                {
                    title: 'Form Error',
                    url: '/docs/forms/components/form-error'
                }
            ]
        },
        {
            title: 'Form Validation',
            active: /\/docs\/forms\/validation(\/.+)?/,
            children: [
                {
                    title: 'Overview',
                    index: true,
                    url: '/docs/forms/validation'
                },
                {
                    title: 'Schema',
                    children: [
                        {
                            title: 'Overview',
                            url: '/docs/forms/validation/schema'
                        },
                        {
                            title: 'Individual Fields',
                            url: '/docs/forms/validation/schema/individual-fields'
                        },
                        {
                            title: 'Grouped Fields',
                            url: '/docs/forms/validation/schema/grouped-fields'
                        },
                        {
                            title: 'Repeater Fields',
                            url: '/docs/forms/validation/schema/repeater-fields'
                        }
                    ]
                },
                {
                    title: 'Validators',
                    url: '/docs/forms/validation/validators'
                },
                {
                    title: 'Validation State',
                    url: '/docs/forms/validation/state'
                },
                {
                    title: 'Serialization',
                    url: '/docs/forms/validation/serialization'
                }
            ]
        },
        {
            title: 'Services',
            active: /\/docs\/services(\/.+)?/,
            children: [
                {
                    title: 'Toast Service',
                    url: '/docs/services/toast'
                },
                {
                    title: 'Modal Service',
                    url: '/docs/services/modal'
                }
            ]
        },
        {
            title: 'Utilities',
            active: /\/docs\/utilities(\/.+)?/,
            children: [
                {
                    title: 'CSS',
                    children: [
                        {
                            title: 'Border',
                            url: '/docs/utilities/css/border'
                        },
                        {
                            title: 'Clearfix',
                            url: '/docs/utilities/css/clearfix'
                        },
                        {
                            title: 'Color',
                            url: '/docs/utilities/css/color'
                        },
                        {
                            title: 'Display',
                            url: '/docs/utilities/css/display'
                        },
                        {
                            title: 'Embed',
                            url: '/docs/utilities/css/embed'
                        },
                        {
                            title: 'Flex',
                            url: '/docs/utilities/css/flex'
                        },
                        {
                            title: 'Float',
                            url: '/docs/utilities/css/float'
                        },
                        {
                            title: 'Overflow',
                            url: '/docs/utilities/css/overflow'
                        },
                        {
                            title: 'Overlay',
                            url: '/docs/utilities/css/overlay'
                        },
                        {
                            title: 'Position',
                            url: '/docs/utilities/css/position'
                        },
                        {
                            title: 'Screen Reader',
                            url: '/docs/utilities/css/screen-reader'
                        },
                        {
                            title: 'Sizing',
                            url: '/docs/utilities/css/sizing'
                        },
                        {
                            title: 'Spacing',
                            url: '/docs/utilities/css/spacing'
                        },
                        {
                            title: 'Text',
                            url: '/docs/utilities/css/text'
                        },
                        {
                            title: 'Vertical Align',
                            url: '/docs/utilities/css/vertical-align'
                        },
                        {
                            title: 'Visibility',
                            url: '/docs/utilities/css/visibility'
                        }
                    ]
                },
                {
                    title: 'Components',
                    children: [
                        {
                            title: 'Renderable',
                            url: '/docs/utilities/components/renderable'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Add-ons',
            active: /\/docs\/add-ons(\/.+)?/,
            children: [
                {
                    title: 'UnoCSS Preset',
                    children: [
                        {
                            title: 'Overview',
                            index: true,
                            url: '/docs/add-ons/unocss'
                        },
                        {
                            title: 'Vite.js',
                            url: '/docs/add-ons/unocss/vite',
                            navigation: {
                                previous: '/docs/utilities/visibility',
                                next: '/docs/contribution-guide'
                            }
                        },
                        {
                            title: 'Nuxt',
                            url: '/docs/add-ons/unocss/nuxt',
                            navigation: {
                                previous: '/docs/utilities/visibility',
                                next: '/docs/contribution-guide'
                            }
                        },
                        {
                            title: 'Webpack.js',
                            url: '/docs/add-ons/unocss/webpack',
                            navigation: {
                                previous: '/docs/utilities/visibility',
                                next: '/docs/contribution-guide'
                            }
                        }
                    ]
                }
            ]
        },
        {
            title: 'Contribution Guide',
            url: '/docs/contribution-guide'
        }
    ];
}
