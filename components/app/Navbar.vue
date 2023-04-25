<script lang="ts">
import { computed, defineComponent, markRaw, onBeforeUnmount, onMounted, ref } from 'vue';
import { INavItem } from '@inkline/inkline';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from 'vue-i18n-routing';
import { useNavbarNavigation, useSidebarNavigation, useTelemetry } from '~/composables';
import { off, on } from '@grozav/utils';
import logoBlack from '~/assets/images/logo/logo-black.svg';
import logoWhite from '~/assets/images/logo/logo-white.svg';
import { useRoute } from 'vue-router';
import { NavigationPage } from '~/types';

export default defineComponent({
    props: {
        type: {
            type: String,
            default: ''
        }
    },
    setup() {
        const navigation = useNavbarNavigation();
        const docsNavigation = useSidebarNavigation().slice(1);
        const { track } = useTelemetry();
        const localePath = useLocalePath();
        const { t } = useI18n();
        const route = useRoute();

        const addScrollVariant = ref(false);
        const classes = computed(() => ({
            '-scroll': addScrollVariant.value
        }));

        const isActiveItem = computed(() => ({
            '/docs': route.fullPath.includes('/docs'),
            '/blog': route.fullPath.includes('/blog')
        }));

        onMounted(() => {
            on(window, 'scroll', onScroll);
        });
        onBeforeUnmount(() => {
            off(window, 'scroll', onScroll);
        });

        function onScroll() {
            const threshold = 100;
            if (window.scrollY > threshold && !addScrollVariant.value) {
                addScrollVariant.value = true;
            } else if (window.scrollY <= threshold && addScrollVariant.value) {
                addScrollVariant.value = false;
            }
        }

        function onNavbarBrandClick() {
            track('user clicked on navbar brand', {
                section: 'navbar',
                type: 'navigation'
            });
        }

        function onLinkClick(url: string, external = false) {
            track(`user clicked on navbar link${external ? ' (external)' : ''}`, {
                to: url,
                section: 'navbar',
                type: 'navigation'
            });
        }

        return {
            t,
            classes,
            navigation,
            docsNavigation,
            isActiveItem,
            colorSwitcherComponent: markRaw(INavItem),
            logoBlack,
            logoWhite,
            localePath,
            onNavbarBrandClick,
            onLinkClick
        };
    }
});
</script>

<template>
    <INavbar class="app-navbar" :class="classes">
        <INavbarBrand :to="localePath('/')" @click="onNavbarBrandClick">
            <img alt="Inkline Logo" class="logo -black" height="24" width="22.5" :src="logoBlack" />
            <img alt="Inkline Logo" class="logo -white" height="24" width="22.5" :src="logoWhite" />
            Inkline
        </INavbarBrand>
        <INavbarCollapsible>
            <INav class="_margin-left:auto">
                <template v-for="page in navigation">
                    <Component
                        :is="page.component"
                        v-if="page.component"
                        :key="page.title"
                        v-bind="page.componentProps"
                    />
                    <IDropdown
                        v-else-if="page.children"
                        :key="page.title"
                        :events="['focus', 'hover']"
                    >
                        <INavItem>{{ page.title }}</INavItem>
                        <template #body>
                            <IDropdownItem
                                v-for="subPage in page.children"
                                :key="subPage.title"
                                :to="localePath(subPage.url)"
                            >
                                {{ subPage.title }}
                            </IDropdownItem>
                        </template>
                    </IDropdown>
                    <INavItem
                        v-else
                        :class="{ '-active': isActiveItem[page.url] }"
                        :key="page.title"
                        :id="page.id"
                        :to="localePath(page.url)"
                        @click="onLinkClick(page.url)"
                    >
                        {{ page.title }}
                    </INavItem>
                </template>
            </INav>
            <INav class="app-navbar-icons">
                <INavItem
                    href="https://github.com/inkline/inkline"
                    target="_blank"
                    :title="t('navigation.github')"
                    @click="onLinkClick('https://github.com/inkline/inkline', true)"
                >
                    <Icon name="bi:github" size="20px" />
                </INavItem>
                <INavItem
                    href="https://chat.inkline.io"
                    target="_blank"
                    :title="t('navigation.discord')"
                    @click="onLinkClick('https://chat.inkline.io', true)"
                >
                    <Icon name="bi:discord" size="20px" />
                </INavItem>
                <AppColorModeSwitcher stop-propagation :tag="colorSwitcherComponent" />
                <AppDocsSearch />
            </INav>
            <INav>
                <FeatureFlag name="premium">
                    <INavItem :to="localePath('/login')" @click="onLinkClick('/login')">
                        {{ t('navigation.signin') }}
                    </INavItem>
                    <IButton
                        :to="localePath('/signup')"
                        color="primary"
                        class="_margin-left:1"
                        @click="onLinkClick('/signup')"
                    >
                        {{ t('navigation.signup') }}
                    </IButton>
                </FeatureFlag>
            </INav>
            <slot name="collapsible" />
        </INavbarCollapsible>
    </INavbar>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.app-navbar {
    --navbar--light--background: var(--color-white);
    --navbar--light--item--background: var(--color-white);
    --navbar--light--item--hover--background: var(--color-light);
    --navbar--light--collapsed--background: transparent;
    --navbar--dark--collapsed--background: transparent;
    --navbar--transition-property: top, left, right, height, border-color, border-width,
        border-radius, background;

    padding-left: 0;
    padding-right: 0;
    position: fixed;
    top: var(--margin-top);
    right: var(--margin-right);
    left: var(--margin-left);
    z-index: 9999;

    &.-open {
        max-height: calc(100% - var(--margin-top) - var(--margin-bottom));
        align-items: flex-start;
        overflow: auto;

        :deep(> .container) {
            overflow: auto;
            max-height: 100%;
        }
    }

    &.-scroll {
        top: 0;
        right: 0;
        left: 0;
        border-radius: 0;
        border-top-color: var(--body--background);
        border-top-width: 0;
        border-left-color: var(--body--background);
        border-left-width: 0;
        border-right-color: var(--body--background);
        border-right-width: 0;

        &.-open {
            max-height: 100%;
        }
    }

    .router-link-exact-active {
        font-weight: var(--font-weight-semibold);
    }

    .app-sidebar-navigation,
    .app-sidebar-apps {
        width: 100%;
        margin: 0;
    }

    .app-sidebar-navigation {
        --app-sidebar-navigation--padding-top: 0;
        --app-sidebar-navigation--padding-right: 0;
        --app-sidebar-navigation--item--padding: var(--padding-top-1-2) var(--padding-right-1-2)
            var(--padding-bottom-1-2) var(--padding-left-1-2);

        padding-left: var(--padding-left-1-2);
        margin-left: var(--margin-left);
        border-left: var(--border-left-width) var(--border-left-style) var(--border-left-color);
        width: calc(100% - var(--margin-left));

        .collapsible-header span,
        > a {
            font-weight: var(--font-weight-normal);
        }

        .router-link-exact-active {
            font-weight: var(--font-weight-semibold);
        }
    }

    .navbar-brand {
        --navbar--item--padding: var(--padding-1-2);

        font-weight: var(--font-weight-semibold);
    }

    @include breakpoint-up('lg') {
        .app-sidebar-navigation,
        .app-sidebar-apps {
            display: none;
        }
    }

    @include breakpoint-down('md') {
        .navbar-collapsible {
            .nav.app-navbar-icons {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: var(--margin-top);
                margin-bottom: var(--margin-bottom);

                .nav-item {
                    width: auto !important;
                }
            }
        }

        .button {
            margin-left: 0;
            width: 100%;
        }
    }

    .logo {
        height: 24px;
        width: auto;
        margin-right: var(--margin-right-1-2);
    }

    &.-light {
        .logo.-white {
            display: none;
        }
    }

    &.-dark {
        .logo.-black {
            display: none;
        }
    }
}
</style>
