<script lang="ts">
import { defineComponent, ref } from 'vue';
import storybookLogo from '~/assets/images/sponsors/storybook.svg';

export default defineComponent({
    props: {
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue'],
    setup () {
        const menu = ref([
            {
                title: 'Preface',
                children: [
                    {
                        title: 'About Inkline',
                        url: { name: 'docs-preface' }
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
                        url: { name: 'docs-introduction' }
                    },
                    {
                        title: 'Installation',
                        children: [
                            {
                                title: 'Vue.js CLI',
                                url: { name: 'docs-introduction-installation-vue-cli' }
                            },
                            {
                                title: 'Vite.js',
                                url: { name: 'docs-introduction-installation-vite' }
                            },
                            {
                                title: 'Nuxt.js',
                                url: { name: 'docs-introduction-installation-nuxt' }
                            },
                            {
                                title: 'Generic',
                                url: { name: 'docs-introduction-installation-generic' }
                            },
                            {
                                title: 'CDN',
                                url: { name: 'docs-introduction-installation-cdn' }
                            }
                        ]
                    },
                    {
                        title: 'Plugin Options',
                        url: { name: 'docs-introduction-plugin-options' }
                    },
                    {
                        title: 'Design System',
                        children: [
                            {
                                title: 'Overview',
                                url: { name: 'docs-introduction-design-system' }
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
                                url: { name: 'docs-forms-select' }
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
                                url: { name: 'docs-forms-validation' }
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
        ]);

        return {
            menu,
            storybookLogo
        };
    }
});
</script>

<template>
    <i-sidebar
        id="sidebar"
        :model-value="modelValue"
        collapse="md"
        collapse-position="fixed"
        @update:modelValue="$emit('update:modelValue', $event)"
    >
        <aside>
            <ul id="sidebar-apps" class="list -unstyled">
                <li class="-active">
                    <router-link :to="{ name: 'docs-introduction' }">
                        <i-badge color="primary">
                            <icon-fa-solid-book size="sm" />
                        </i-badge>
                        <span>Documentation</span>
                    </router-link>
                </li>
                <li>
                    <a href="https://inkline.io/storybook/" target="_blank">
                        <i-badge color="pink" class="-storybook">
                            <img :src="storybookLogo" alt="Storybook">
                        </i-badge>
                        <span>Storybook</span>
                    </a>
                </li>
                <li>
                    <a href="https://jsfiddle.net/alexgrozav/0dknfs6L/" target="_blank">
                        <i-badge color="secondary">
                            <icon-fa-solid-code />
                        </i-badge>
                        <span>Playground</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/inkline/inkline/discussions" target="_blank">
                        <i-badge color="dark">
                            <icon-fa-solid-comments />
                        </i-badge>
                        <span>Community</span>
                    </a>
                </li>
            </ul>
            <ul id="sidebar-pages" class="list -unstyled">
                <li
                    v-for="(category, categoryIndex) in menu"
                    :key="categoryIndex"
                >
                    <span>{{ category.title }}</span>
                    <ul v-if="category.children">
                        <li
                            v-for="(page, pageIndex) in category.children"
                            :key="`${categoryIndex}-${pageIndex}`"
                        >
                            <router-link v-if="page.url" :to="page.url">
                                {{ page.title }}
                            </router-link>
                            <span v-else>
                                {{ page.title }}
                            </span>
                            <ul v-if="page.children">
                                <li
                                    v-for="(subpage, subpageIndex) in page.children"
                                    :key="`${categoryIndex}-${pageIndex}-${subpageIndex}`"
                                >
                                    <router-link v-if="subpage.url" :to="subpage.url">
                                        {{ subpage.title }}
                                    </router-link>
                                    <span v-else>
                                        {{ subpage.title }}
                                    </span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    </i-sidebar>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

@include i-sidebar() {
    ----padding: 0;
    ----border-radius: 0;
    ----border-top-width: 0;

    position: fixed;

    @include breakpoint-up('lg') {
        ----border-width: 0;

        :deep(.sidebar) {
            padding-right: var(--spacing);
        }
    }

    @include breakpoint-down('md') {
        left: 0;
    }

    @include variant('light') {
        ----background: var(--color--white);

        @include breakpoint-up('lg') {
            ----background: transparent;
        }
    }

    @include variant('dark') {
        @include breakpoint-up('lg') {
            ----background: transparent;
        }
    }
}

#sidebar-pages {
    padding: var(--spacing);

    > li {
        > span {
            display: flex;
            font-weight: var(--font-weight--semibold);
            margin-top: var(--spacing);
            margin-bottom: var(--spacing);
        }

        ul {
            list-style: none;
            padding: 0;

            li {
                margin: 0;

                a,
                span {
                    transition-property: color, border-color;
                    transition-duration: var(--transition-duration);
                    transition-timing-function: var(--transition-easing);
                    display: flex;
                    border-left-style: var(----border-style);
                    border-left-width: var(----border-left-width);

                    .-light & {
                        border-left-color: var(--color--light);
                    }

                    .-dark & {
                        border-left-color: var(--color--dark);
                    }

                    &.router-link-exact-active {
                        color: var(--color--primary) !important;
                        font-weight: var(--font-weight--semibold);
                        border-left-color: var(--color--primary);
                        border-left-width: 2px;
                    }
                }

                a {
                    .-light & {
                        color: var(--color--gray-75);
                    }

                    .-dark & {
                        color: var(--color--gray-25);
                    }

                    &:hover,
                    &:focus {
                        color: var(--color--primary);
                        border-left-color: var(--color--primary);
                    }
                }
            }

            > li {
                > a,
                > span {
                    padding-top: calc(var(--spacing) / 2);
                    padding-bottom: calc(var(--spacing) / 2);
                    padding-left: var(--spacing);

                    &.router-link-exact-active {
                        padding-left: calc(var(--spacing) - 1px);
                    }
                }

                > ul {
                    > li {
                        > a,
                        > span {
                            padding-top: calc(var(--spacing) / 2);
                            padding-bottom: calc(var(--spacing) / 2);
                            padding-left: calc(var(--spacing) * 2);

                            &.router-link-exact-active {
                                padding-left: calc(var(--spacing) * 2 - 1px);
                            }
                        }
                    }
                }
            }
        }
    }
}

#sidebar-apps {
    padding-left: var(--spacing);
    padding-right: var(--spacing);
    margin-bottom: calc(var(--spacing) * 2);

    li {
        margin-bottom: var(--spacing);

        a {
            display: flex;
            align-items: center;
            text-decoration: none;
            font-weight: 500;

            .-light & {
                color: var(--color--gray-75);
            }

            .-dark & {
                color: var(--color--gray-15);
            }

            &:hover .-storybook,
            &:focus .-storybook {
                ----background: #dc3971;
            }
        }

        &.-active a {
            .-light & {
                color: var(--color--gray-90);
            }

            .-dark & {
                color: var(--color--gray-05);
            }

            font-weight: var(--font-weight--semibold);
        }
    }

    @include i-badge() {
        width: 28px;
        height: 28px;
        padding: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: calc(var(--spacing) * 3 / 4);
        transition: background var(--transition-duration) var(--transition-easing);

        @include variant('storybook') {
            ----background: #ff4785;
            ----border-color: #f33d7b;
        }

        :deep(img) {
            height: 18px;
            width: auto;
        }
    }
}
</style>
