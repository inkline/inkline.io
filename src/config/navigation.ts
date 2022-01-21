interface NavigationPage {
    title: string;
    url?: {
        name: string;
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
                url: { name: 'docs-preface' },
                index: true
            },
            {
                title: 'Concepts',
                url: { name: 'docs-preface-concepts' }
            },
            {
                title: 'Contribution Guide',
                url: { name: 'docs-preface-contribution-guide' }
            }
        ]
    },
    {
        title: 'Introduction',
        children: [
            {
                title: 'Getting Started',
                url: { name: 'docs-introduction' },
                index: true
            },
            {
                title: 'Installation',
                children: [
                    {
                        title: 'Vite.js',
                        url: { name: 'docs-introduction-installation-vite' },
                        navigation: {
                            previous: 'docs-introduction',
                            next: 'docs-introduction-plugin-options'
                        }
                    },
                    {
                        title: 'Vue.js CLI',
                        url: { name: 'docs-introduction-installation-vue-cli' },
                        navigation: {
                            previous: 'docs-introduction',
                            next: 'docs-introduction-plugin-options'
                        }
                    },
                    {
                        title: 'Nuxt.js 3',
                        url: { name: 'docs-introduction-installation-nuxt' },
                        navigation: {
                            previous: 'docs-introduction',
                            next: 'docs-introduction-plugin-options'
                        }
                    },
                    {
                        title: 'Generic',
                        url: { name: 'docs-introduction-installation-generic' },
                        navigation: {
                            previous: 'docs-introduction',
                            next: 'docs-introduction-plugin-options'
                        }
                    },
                    {
                        title: 'CDN',
                        url: { name: 'docs-introduction-installation-cdn' },
                        navigation: {
                            previous: 'docs-introduction',
                            next: 'docs-introduction-plugin-options'
                        }
                    }
                ]
            },
            {
                title: 'Plugin Options',
                url: { name: 'docs-introduction-plugin-options' },
                navigation: {
                    previous: 'docs-introduction'
                }
            },
            {
                title: 'Design System',
                children: [
                    {
                        title: 'Overview',
                        url: { name: 'docs-introduction-design-system' },
                        index: true
                    },
                    {
                        title: 'Global Variables',
                        url: { name: 'docs-introduction-design-system-global-variables' }
                    },
                    {
                        title: 'Local Variables',
                        url: { name: 'docs-introduction-design-system-local-variables' }
                    },
                    {
                        title: 'Sass Functions',
                        url: { name: 'docs-introduction-design-system-sass-functions' }
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
                url: { name: 'docs-core-grid' }
            },
            {
                title: 'Layout',
                url: { name: 'docs-core-layout' }
            },
            {
                title: 'Typography',
                url: { name: 'docs-core-typography' }
            },
            {
                title: 'Images',
                url: { name: 'docs-core-images' }
            },
            {
                title: 'Tables',
                url: { name: 'docs-core-tables' }
            },
            {
                title: 'Code',
                url: { name: 'docs-core-code' }
            }
        ]
    },
    {
        title: 'Forms',
        children: [
            {
                title: 'Checkbox',
                url: { name: 'docs-forms-checkbox' }
            },
            {
                title: 'Input',
                url: { name: 'docs-forms-input' }
            },
            {
                title: 'Number Input',
                url: { name: 'docs-forms-number-input' }
            },
            {
                title: 'Radio',
                url: { name: 'docs-forms-radio' }
            },
            {
                title: 'Select',
                children: [
                    {
                        title: 'Overview',
                        url: { name: 'docs-forms-select' },
                        index: true
                    },
                    {
                        title: 'Pagination',
                        url: { name: 'docs-forms-select-pagination' }
                    },
                    {
                        title: 'Autocomplete',
                        url: { name: 'docs-forms-select-autocomplete' }
                    },
                    {
                        title: 'Rendering',
                        url: { name: 'docs-forms-select-rendering' }
                    },
                    {
                        title: 'Advanced',
                        url: { name: 'docs-forms-select-advanced' }
                    }
                ]
            },
            {
                title: 'Textarea',
                url: { name: 'docs-forms-textarea' }
            },
            {
                title: 'Toggle',
                url: { name: 'docs-forms-toggle' }
            },
            {
                title: 'Form',
                url: { name: 'docs-forms-form' }
            },
            {
                title: 'Form Group',
                url: { name: 'docs-forms-form-group' }
            },
            {
                title: 'Form Label',
                url: { name: 'docs-forms-form-label' }
            },
            {
                title: 'Form Validation',
                children: [
                    {
                        title: 'Overview',
                        url: { name: 'docs-forms-validation' },
                        index: true
                    },
                    {
                        title: 'Schema',
                        url: { name: 'docs-forms-validation-schema' }
                    },
                    {
                        title: 'Validators',
                        url: { name: 'docs-forms-validation-validators' }
                    },
                    {
                        title: 'Methods',
                        url: { name: 'docs-forms-validation-methods' }
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
                url: { name: 'docs-components-alert' }
            },
            {
                title: 'Badge',
                url: { name: 'docs-components-badge' }
            },
            {
                title: 'Breadcrumb',
                url: { name: 'docs-components-breadcrumb' }
            },
            {
                title: 'Button',
                url: { name: 'docs-components-button' }
            },
            {
                title: 'Button Group',
                url: { name: 'docs-components-button-group' }
            },
            {
                title: 'Card',
                url: { name: 'docs-components-card' }
            },
            {
                title: 'Collapsible',
                url: { name: 'docs-components-collapsible' }
            },
            {
                title: 'Dropdown',
                url: { name: 'docs-components-dropdown' }
            },
            {
                title: 'Hamburger Menu',
                url: { name: 'docs-components-hamburger-menu' }
            },
            {
                title: 'Header',
                url: { name: 'docs-components-header' }
            },
            {
                title: 'Icon',
                url: { name: 'docs-components-icon' }
            },
            {
                title: 'List Group',
                url: { name: 'docs-components-list-group' }
            },
            {
                title: 'Loader',
                url: { name: 'docs-components-loader' }
            },
            {
                title: 'Media',
                url: { name: 'docs-components-media' }
            },
            {
                title: 'Modal',
                url: { name: 'docs-components-modal' }
            },
            {
                title: 'Nav',
                url: { name: 'docs-components-nav' }
            },
            {
                title: 'Navbar',
                url: { name: 'docs-components-navbar' }
            },
            {
                title: 'Pagination',
                url: { name: 'docs-components-pagination' }
            },
            {
                title: 'Popover',
                url: { name: 'docs-components-popover' }
            },
            {
                title: 'Progress',
                url: { name: 'docs-components-progress' }
            },
            {
                title: 'Sidebar',
                url: { name: 'docs-components-sidebar' }
            },
            {
                title: 'Tabs',
                url: { name: 'docs-components-tabs' }
            },
            {
                title: 'Tooltip',
                url: { name: 'docs-components-tooltip' }
            }
        ]
    },
    {
        title: 'Utilities',
        children: [
            {
                title: 'Border',
                url: { name: 'docs-utilities-border' }
            },
            {
                title: 'Clearfix',
                url: { name: 'docs-utilities-clearfix' }
            },
            {
                title: 'Color',
                url: { name: 'docs-utilities-color' }
            },
            {
                title: 'Display',
                url: { name: 'docs-utilities-display' }
            },
            {
                title: 'Embed',
                url: { name: 'docs-utilities-embed' }
            },
            {
                title: 'Flex',
                url: { name: 'docs-utilities-flex' }
            },
            {
                title: 'Float',
                url: { name: 'docs-utilities-float' }
            },
            {
                title: 'Overflow',
                url: { name: 'docs-utilities-overflow' }
            },
            {
                title: 'Overlay',
                url: { name: 'docs-utilities-overlay' }
            },
            {
                title: 'Position',
                url: { name: 'docs-utilities-position' }
            },
            {
                title: 'Screen Reader',
                url: { name: 'docs-utilities-screen-reader' }
            },
            {
                title: 'Sizing',
                url: { name: 'docs-utilities-sizing' }
            },
            {
                title: 'Spacing',
                url: { name: 'docs-utilities-spacing' }
            },
            {
                title: 'Text',
                url: { name: 'docs-utilities-text' }
            },
            {
                title: 'Vertical Align',
                url: { name: 'docs-utilities-vertical-align' }
            },
            {
                title: 'Visibility',
                url: { name: 'docs-utilities-visibility' }
            }
        ]
    }
];
