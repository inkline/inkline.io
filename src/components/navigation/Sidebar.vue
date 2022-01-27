<script lang="ts">
import { defineComponent, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import storybookLogo from '~/assets/images/sponsors/storybook.svg';
import { navigation } from '~/config';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    props: {
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue'],
    setup (props, { emit }) {
        const menu = ref(navigation);
        const { t } = useI18n();

        onBeforeRouteLeave(() => {
            emit('update:modelValue', false);
        });

        return {
            t,
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
                    <router-link :to="{ path: '/docs/introduction' }">
                        <i-badge color="primary">
                            <icon-fa-solid-book size="sm" />
                        </i-badge>
                        <span>Documentation</span>
                    </router-link>
                </li>
                <li>
                    <a href="https://storybook.inkline.io/" target="_blank">
                        <i-badge color="pink" class="-storybook">
                            <img :src="storybookLogo" alt="Storybook">
                        </i-badge>
                        <span>
                            Storybook <span class="_visually-hidden">{{ t('common.opensNewWindow') }}</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://stackblitz.com/edit/inkline?file=src/App.vue" target="_blank">
                        <i-badge color="secondary">
                            <icon-fa-solid-code />
                        </i-badge>
                        <span>
                            Playground <span class="_visually-hidden">{{ t('common.opensNewWindow') }}</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/inkline/inkline/discussions" target="_blank">
                        <i-badge color="dark">
                            <icon-fa-solid-comments />
                        </i-badge>
                        <span>
                            Community <span class="_visually-hidden">{{ t('common.opensNewWindow') }}</span>
                        </span>
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
