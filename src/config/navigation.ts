interface NavigationPage {
    title: string;
    url?: {
        path: string;
    };
    navigation?: {
        next?: string;
        previous?: string;
    };
    index?: boolean;
    children?: NavigationPage[];
}

export const navigation: NavigationPage[] = [
    {
        title: 'Preface',
        children: [
            {
                title: 'About Inkline',
                url: { path: '/docs/preface' },
                index: true
            },
            {
                title: 'Concepts',
                url: { path: '/docs/preface/concepts' }
            },
            {
                title: 'Contribution Guide',
                url: { path: '/docs/preface/contribution-guide' }
            }
        ]
    },
    {
        title: 'Introduction',
        children: [
            {
                title: 'Getting Started',
                url: { path: '/docs/introduction' },
                index: true
            },
            {
                title: 'Installation',
                children: [
                    {
                        title: 'Vite.js',
                        url: { path: '/docs/introduction/installation/vite' },
                        navigation: {
                            previous: '/docs/introduction',
                            next: '/docs/introduction/plugin-options'
                        }
                    },
                    {
                        title: 'Vue.js CLI',
                        url: { path: '/docs/introduction/installation/vue-cli' },
                        navigation: {
                            previous: '/docs/introduction',
                            next: '/docs/introduction/plugin-options'
                        }
                    },
                    {
                        title: 'Nuxt.js',
                        url: { path: '/docs/introduction/installation/nuxt' },
                        navigation: {
                            previous: '/docs/introduction',
                            next: '/docs/introduction/plugin-options'
                        }
                    },
                    {
                        title: 'Generic',
                        url: { path: '/docs/introduction/installation/generic' },
                        navigation: {
                            previous: '/docs/introduction',
                            next: '/docs/introduction/plugin-options'
                        }
                    },
                    {
                        title: 'CDN',
                        url: { path: '/docs/introduction/installation/cdn' },
                        navigation: {
                            previous: '/docs/introduction',
                            next: '/docs/introduction/plugin-options'
                        }
                    }
                ]
            },
            {
                title: 'Plugin Options',
                url: { path: '/docs/introduction/plugin-options' },
                navigation: {
                    previous: '/docs/introduction'
                }
            },
            {
                title: 'Guides',
                url: { path: '/docs/introduction/guides' },
                navigation: {
                    previous: '/docs/introduction'
                },
                index: true
            },
            {
                title: 'Design System',
                children: [
                    {
                        title: 'Overview',
                        url: { path: '/docs/introduction/design-system' },
                        index: true
                    },
                    {
                        title: 'Global Variables',
                        url: { path: '/docs/introduction/design-system/global-variables' }
                    },
                    {
                        title: 'Local Variables',
                        url: { path: '/docs/introduction/design-system/local-variables' }
                    },
                    {
                        title: 'Sass Functions',
                        url: { path: '/docs/introduction/design-system/sass-functions' }
                    }
                ]
            }
        ]
    },
    {
        title: 'Core',
        children: [
            {
                title: 'Grid',
                url: { path: '/docs/core/grid' }
            },
            {
                title: 'Layout',
                url: { path: '/docs/core/layout' }
            },
            {
                title: 'Typography',
                url: { path: '/docs/core/typography' }
            },
            {
                title: 'Images',
                url: { path: '/docs/core/images' }
            },
            {
                title: 'Tables',
                url: { path: '/docs/core/tables' }
            },
            {
                title: 'Code',
                url: { path: '/docs/core/code' }
            }
        ]
    },
    {
        title: 'Forms',
        children: [
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
                children: [
                    {
                        title: 'Overview',
                        url: { path: '/docs/forms/select' },
                        index: true
                    },
                    {
                        title: 'Pagination',
                        url: { path: '/docs/forms/select/pagination' }
                    },
                    {
                        title: 'Autocomplete',
                        url: { path: '/docs/forms/select/autocomplete' }
                    },
                    {
                        title: 'Rendering',
                        url: { path: '/docs/forms/select/rendering' }
                    },
                    {
                        title: 'Advanced',
                        url: { path: '/docs/forms/select/advanced' }
                    }
                ]
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
                children: [
                    {
                        title: 'Overview',
                        url: { path: '/docs/forms/validation' },
                        index: true
                    },
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
        title: 'Components',
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
        title: 'Utilities',
        children: [
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
    }
];
