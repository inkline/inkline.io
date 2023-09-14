<script lang="ts">
import { computed, defineComponent, markRaw, onBeforeUnmount, onMounted, ref, unref } from 'vue';
import { INavItem } from '@inkline/inkline';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from 'vue-i18n-routing';
import { useNavbarAccountNavigation, useNavbarNavigation, useTelemetry } from '~/composables';
import { off, on } from '@grozav/utils';
import logoBlack from '~/assets/images/logo/logo-black.svg';
import logoWhite from '~/assets/images/logo/logo-white.svg';
import { useRoute } from 'vue-router';
import { NavigationPage } from '~/types';
import { useAuthStore } from '~/stores';
import { storeToRefs } from 'pinia';

interface NavbarNav {
    id: string;
    items: NavigationPage[];
    class?: string;
}

export default defineComponent({
    props: {
        type: {
            type: String,
            default: ''
        }
    },
    setup() {
        const navigation = useNavbarNavigation();
        const accountNavigation = useNavbarAccountNavigation();
        const { track } = useTelemetry();
        const localePath = useLocalePath();
        const { t } = useI18n();
        const route = useRoute();
        const authStore = useAuthStore();
        const { isAuthenticated, currentUser } = storeToRefs(authStore);
        const mounted = ref(false);

        const navs = computed<NavbarNav[]>(() => [
            { id: 'main', items: unref(navigation), class: '_margin-left:auto' },
            ...(isAuthenticated.value && mounted.value
                ? [{ id: 'auth', items: unref(accountNavigation) }]
                : [])
        ]);

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
            mounted.value = true;
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

        function trackLinkClick(url: string, external = false) {
            track(`user clicked on navbar link${external ? ' (external)' : ''}`, {
                to: url,
                section: 'navbar',
                type: 'navigation'
            });
        }

        async function logout() {
            trackLinkClick('/logout');
            await authStore.logout();
        }

        async function login() {
            trackLinkClick('/login');
            await authStore.login();
        }

        function getPageClass(page: NavigationPage) {
            const hidden = (page.hidden as { mobile?: boolean; desktop?: boolean }) || {};
            return {
                '-hidden-mobile': hidden?.mobile,
                '-hidden-desktop': hidden?.desktop
            };
        }

        return {
            t,
            classes,
            navs,
            isActiveItem,
            isAuthenticated,
            currentUser,
            colorSwitcherComponent: markRaw(INavItem),
            logoBlack,
            logoWhite,
            localePath,
            onNavbarBrandClick,
            trackLinkClick,
            logout,
            login,
            getPageClass
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
            <INav v-for="nav in navs" :key="nav.id" :class="[`${nav.id}-nav`, nav.class]">
                <template v-for="page in nav.items">
                    <IDropdown
                        v-if="page.children"
                        :key="page.title"
                        :events="['focus', 'hover']"
                        :class="getPageClass(page)"
                    >
                        <Component
                            :is="page.component"
                            v-if="page.component"
                            v-bind="page.componentProps"
                        />
                        <INavItem v-else>{{ page.title }}</INavItem>
                        <template #body>
                            <IDropdownItem
                                v-for="subPage in page.children"
                                :key="subPage.title"
                                :to="localePath(subPage.url)"
                                v-bind="subPage.componentProps"
                                :class="getPageClass(subPage)"
                            >
                                {{ subPage.title }}
                            </IDropdownItem>
                        </template>
                    </IDropdown>
                    <Component
                        :is="page.component"
                        v-else-if="page.component"
                        :key="page.title"
                        v-bind="page.componentProps"
                        :class="getPageClass(page)"
                    />
                    <INavItem
                        v-else
                        :id="page.id"
                        :key="page.title"
                        :class="[getPageClass(page), { '-active': isActiveItem[page.url] }]"
                        :to="localePath(page.url)"
                        v-bind="page.componentProps"
                        @click="trackLinkClick(page.url)"
                    >
                        {{ page.title }}
                    </INavItem>
                </template>
                <FeatureFlag name="auth">
                    <INav v-if="!isAuthenticated">
                        <INavItem class="_cursor:pointer" @click="login">
                            {{ t('navigation.login') }}
                        </INavItem>
                    </INav>
                </FeatureFlag>
            </INav>
            <INav class="app-navbar-icons">
                <INavItem
                    href="https://github.com/inkline/inkline"
                    target="_blank"
                    :title="t('navigation.github')"
                    @click="trackLinkClick('https://github.com/inkline/inkline', true)"
                >
                    <Icon name="bi:github" size="20px" />
                </INavItem>
                <INavItem
                    href="https://chat.inkline.io"
                    target="_blank"
                    :title="t('navigation.discord')"
                    @click="trackLinkClick('https://chat.inkline.io', true)"
                >
                    <Icon name="bi:discord" size="20px" />
                </INavItem>
                <AppColorModeSwitcher stop-propagation :tag="colorSwitcherComponent" />
                <AppDocsSearch />
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

    position: fixed;
    top: var(--margin-top);
    right: var(--margin-right);
    left: var(--margin-left);
    z-index: 1;

    &.-open {
        max-height: calc(100% - var(--margin-top) - var(--margin-bottom));
        align-items: flex-start;
        overflow: auto;

        > .container {
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
        .app-sidebar-apps {
            display: none;
        }

        .-hidden-desktop {
            display: none;
        }
    }

    @include breakpoint-down('md') {
        > .container {
            padding-left: 0 !important;
            padding-right: 0 !important;
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

        .signup-button {
            margin-left: 0;
            width: 100%;
        }

        .-hidden-mobile {
            display: none;
        }
    }

    .logo {
        height: 24px;
        width: auto;
        margin-right: var(--margin-right-1-2);
    }

    .auth-nav {
        order: 10;
    }

    .signup-button {
        height: 40px;
    }

    .user-avatar {
        height: 40px;
        width: 40px;
        margin-left: var(--margin-left-1-2);

        @include breakpoint-down('md') {
            display: none;
        }
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
