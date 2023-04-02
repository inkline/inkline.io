export interface NavigationPage {
    title: string;
    url?: {
        path: string;
    };
    navigation?: {
        next?: string;
        previous?: string;
    };
    active?: RegExp;
    hidden?: boolean;
    index?: boolean;
    children?: Omit<NavigationPage, 'active'>[];
}

export interface CollapsibleNavigationPage extends NavigationPage {
    id?: string;
    current?: boolean;
}

export const navigation: NavigationPage[] = [
    {
        title: 'Home',
        url: { path: '/docs' }
    },
    {
        title: 'Getting started',
        active: /\/docs\/(about|concepts|installation)(\/.+)?/,
        children: [
            {
                title: 'About Inkline',
                url: { path: '/docs/about' },
                index: true
            },
            {
                title: 'Concepts',
                url: { path: '/docs/concepts' }
            },
            {
                title: 'Installation',
                url: { path: '/docs/installation' },
                children: [
                    {
                        title: 'Vite.js',
                        url: { path: '/docs/installation/vite' },
                        navigation: {
                            previous: '/docs/concepts',
                            next: '/docs/configuration'
                        }
                    },
                    {
                        title: 'Nuxt',
                        url: { path: '/docs/installation/nuxt' },
                        navigation: {
                            previous: '/docs/concepts',
                            next: '/docs/configuration'
                        }
                    },
                    {
                        title: 'Webpack.js',
                        url: { path: '/docs/installation/webpack' },
                        navigation: {
                            previous: '/docs/concepts',
                            next: '/docs/configuration'
                        }
                    },
                    {
                        title: 'Manual',
                        url: { path: '/docs/installation/manual' },
                        navigation: {
                            previous: '/docs/concepts',
                            next: '/docs/configuration'
                        }
                    },
                    {
                        title: 'CDN',
                        url: { path: '/docs/installation/cdn' },
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
                url: { path: '/docs/configuration/file' }
            },
            {
                title: 'Module Options',
                children: [
                    {
                        title: 'Vite.js',
                        url: { path: '/docs/configuration/vite' },
                        navigation: {
                            previous: '/docs/configuration/file',
                            next: '/docs/configuration/plugin'
                        }
                    },
                    {
                        title: 'Nuxt',
                        url: { path: '/docs/configuration/nuxt' },
                        navigation: {
                            previous: '/docs/configuration/file',
                            next: '/docs/configuration/plugin'
                        }
                    },
                    {
                        title: 'Webpack.js',
                        url: { path: '/docs/configuration/webpack' },
                        navigation: {
                            previous: '/docs/configuration/file',
                            next: '/docs/configuration/plugin'
                        }
                    }
                ]
            },
            {
                title: 'Plugin Options',
                url: { path: '/docs/configuration/plugin' }
            }
        ]
    },
    {
        title: 'UI Guidelines',
        active: /\/docs\/ui(\/.+)?/,
        children: [
            {
                title: 'Design Tokens',
                url: { path: '/docs/ui/design-tokens' }
            },
            {
                title: 'Breakpoints',
                url: { path: '/docs/ui/breakpoints' }
            },
            {
                title: 'Layout',
                url: { path: '/docs/ui/layout' }
            },
            {
                title: 'Grid',
                url: { path: '/docs/ui/grid' }
            },
            {
                title: 'Typography',
                url: { path: '/docs/ui/typography' }
            },
            {
                title: 'Images',
                url: { path: '/docs/ui/images' }
            },
            {
                title: 'Code',
                url: { path: '/docs/ui/code' }
            }
        ]
    },
    {
        title: 'Components',
        active: /\/docs\/components(\/.+)?/,
        children: [
            {
                title: 'Alert',
                url: { path: '/docs/components/alert' }
            },
            {
                title: 'Badge',
                url: { path: '/docs/components/badge' }
            },
            {
                title: 'Breadcrumb',
                url: { path: '/docs/components/breadcrumb' }
            },
            {
                title: 'Button',
                url: { path: '/docs/components/button' }
            },
            {
                title: 'Button Group',
                url: { path: '/docs/components/button-group' }
            },
            {
                title: 'Card',
                url: { path: '/docs/components/card' }
            },
            {
                title: 'Collapsible',
                url: { path: '/docs/components/collapsible' }
            },
            {
                title: 'Dropdown',
                url: { path: '/docs/components/dropdown' }
            },
            {
                title: 'Hamburger Menu',
                url: { path: '/docs/components/hamburger-menu' }
            },
            {
                title: 'Header',
                url: { path: '/docs/components/header' }
            },
            {
                title: 'Icon',
                url: { path: '/docs/components/icon' }
            },
            {
                title: 'List Group',
                url: { path: '/docs/components/list-group' }
            },
            {
                title: 'Loader',
                url: { path: '/docs/components/loader' }
            },
            {
                title: 'Media',
                url: { path: '/docs/components/media' }
            },
            {
                title: 'Modal',
                url: { path: '/docs/components/modal' }
            },
            {
                title: 'Nav',
                url: { path: '/docs/components/nav' }
            },
            {
                title: 'Navbar',
                url: { path: '/docs/components/navbar' }
            },
            {
                title: 'Pagination',
                url: { path: '/docs/components/pagination' }
            },
            {
                title: 'Popover',
                url: { path: '/docs/components/popover' }
            },
            {
                title: 'Progress',
                url: { path: '/docs/components/progress' }
            },
            {
                title: 'Sidebar',
                url: { path: '/docs/components/sidebar' }
            },
            {
                title: 'Table',
                url: { path: '/docs/components/table' }
            },
            {
                title: 'Tabs',
                url: { path: '/docs/components/tabs' }
            },
            {
                title: 'Tooltip',
                url: { path: '/docs/components/tooltip' }
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
                        url: { path: '/docs/forms/autocomplete' },
                        index: true
                    },
                    {
                        title: 'Pagination',
                        url: { path: '/docs/forms/autocomplete/pagination' }
                    },
                    {
                        title: 'Filtering',
                        url: { path: '/docs/forms/autocomplete/filtering' }
                    },
                    {
                        title: 'Rendering',
                        url: { path: '/docs/forms/autocomplete/rendering' }
                    },
                    {
                        title: 'Advanced',
                        url: { path: '/docs/forms/autocomplete/advanced' }
                    }
                ]
            },
            {
                title: 'Checkbox',
                url: { path: '/docs/forms/checkbox' }
            },
            {
                title: 'Input',
                url: { path: '/docs/forms/input' }
            },
            {
                title: 'Number Input',
                url: { path: '/docs/forms/number-input' }
            },
            {
                title: 'Radio',
                url: { path: '/docs/forms/radio' }
            },
            {
                title: 'Select',
                url: { path: '/docs/forms/select' }
            },
            {
                title: 'Textarea',
                url: { path: '/docs/forms/textarea' }
            },
            {
                title: 'Toggle',
                url: { path: '/docs/forms/toggle' }
            },
            {
                title: 'Form',
                url: { path: '/docs/forms/form' }
            },
            {
                title: 'Form Group',
                url: { path: '/docs/forms/form-group' }
            },
            {
                title: 'Form Label',
                url: { path: '/docs/forms/form-label' }
            },
            {
                title: 'Form Validation',
                url: { path: '/docs/forms/validation' },
                children: [
                    {
                        title: 'Schema',
                        url: { path: '/docs/forms/validation/schema' }
                    },
                    {
                        title: 'Validators',
                        url: { path: '/docs/forms/validation/validators' }
                    },
                    {
                        title: 'Methods',
                        url: { path: '/docs/forms/validation/methods' }
                    }
                ]
            }
        ]
    },
    {
        title: 'Utilities',
        active: /\/docs\/utilities(\/.+)?/,
        children: [
            {
                title: 'Overview',
                url: { path: '/docs/utilities' }
            },
            {
                title: 'Variants',
                children: [
                    {
                        title: 'Breakpoint',
                        url: { path: '/docs/utilities/variants/breakpoint' }
                    },
                    {
                        title: 'Important',
                        url: { path: '/docs/utilities/variants/important' }
                    },
                    {
                        title: 'Media Query',
                        url: { path: '/docs/utilities/variants/media-query' }
                    }
                ]
            },
            {
                title: 'Border',
                url: { path: '/docs/utilities/border' }
            },
            {
                title: 'Clearfix',
                url: { path: '/docs/utilities/clearfix' }
            },
            {
                title: 'Color',
                url: { path: '/docs/utilities/color' }
            },
            {
                title: 'Display',
                url: { path: '/docs/utilities/display' }
            },
            {
                title: 'Embed',
                url: { path: '/docs/utilities/embed' }
            },
            {
                title: 'Flex',
                url: { path: '/docs/utilities/flex' }
            },
            {
                title: 'Float',
                url: { path: '/docs/utilities/float' }
            },
            {
                title: 'Overflow',
                url: { path: '/docs/utilities/overflow' }
            },
            {
                title: 'Overlay',
                url: { path: '/docs/utilities/overlay' }
            },
            {
                title: 'Position',
                url: { path: '/docs/utilities/position' }
            },
            {
                title: 'Screen Reader',
                url: { path: '/docs/utilities/screen-reader' }
            },
            {
                title: 'Sizing',
                url: { path: '/docs/utilities/sizing' }
            },
            {
                title: 'Spacing',
                url: { path: '/docs/utilities/spacing' }
            },
            {
                title: 'Text',
                url: { path: '/docs/utilities/text' }
            },
            {
                title: 'Vertical Align',
                url: { path: '/docs/utilities/vertical-align' }
            },
            {
                title: 'Visibility',
                url: { path: '/docs/utilities/visibility' }
            }
        ]
    },
    {
        title: 'Guides',
        url: { path: '/docs/introduction/guides' },
        navigation: {
            previous: '/docs/introduction'
        }
    },
    {
        title: 'Contribution Guide',
        url: { path: '/docs/preface/contribution-guide' }
    }
];
