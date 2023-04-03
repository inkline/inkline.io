<script lang="ts">
import { defineComponent, markRaw } from 'vue';
import { INavItem } from '@inkline/inkline';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from 'vue-i18n-routing';
import { useTelemetry } from '~/composables';

export default defineComponent({
    props: {
        docs: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const { track } = useTelemetry();
        const localePath = useLocalePath();
        const { t } = useI18n();

        function onNavbarBrandClick() {
            track('user clicked on navbar brand', {
                section: 'navbar',
                type: 'navigation'
            });
        }

        function onLinkClick(name: string, external = false) {
            track(`user clicked on ${name} link${external ? ' (external)' : ''}`, {
                section: 'navbar',
                type: 'navigation'
            });
        }

        return {
            t,
            colorSwitcherComponent: markRaw(INavItem),
            localePath,
            onNavbarBrandClick,
            onLinkClick
        };
    }
});
</script>

<template>
    <INavbar class="app-navbar">
        <INavbarBrand :to="localePath('/')" @click="onNavbarBrandClick"> Inkline </INavbarBrand>
        <INavbarCollapsible>
            <INav class="_margin-left:auto">
                <INavItem :to="localePath('/')" @click="onLinkClick('home')">
                    {{ t('navigation.home') }}
                </INavItem>
                <FeatureFlag name="premium">
                    <INavItem :to="localePath('/pricing')" @click="onLinkClick('pricing')">
                        {{ t('navigation.pricing') }}
                    </INavItem>
                </FeatureFlag>
                <INavItem
                    :class="docs ? '_lg:visible' : ''"
                    :to="localePath('/docs')"
                    @click="onLinkClick('docs')"
                >
                    {{ t('navigation.documentation') }}
                </INavItem>
            </INav>
            <INav class="navbar-icons">
                <INavItem
                    href="https://github.com/inkline/inkline"
                    target="_blank"
                    :title="t('navigation.github')"
                    @click="onLinkClick('github', true)"
                >
                    <Icon name="bi:github" size="20px" />
                </INavItem>
                <INavItem
                    href="https://chat.inkline.io"
                    target="_blank"
                    :title="t('navigation.discord')"
                    @click="onLinkClick('discord', true)"
                >
                    <Icon name="bi:discord" size="20px" />
                </INavItem>
                <AppColorModeSwitcher stop-propagation :tag="colorSwitcherComponent" />
            </INav>
            <INav>
                <FeatureFlag name="premium">
                    <INavItem :to="localePath('/login')" @click="onLinkClick('login')">
                        {{ t('navigation.signin') }}
                    </INavItem>
                    <IButton
                        :to="localePath('/signup')"
                        color="primary"
                        class="_margin-left:1"
                        @click="onLinkClick('signup')"
                    >
                        {{ t('navigation.signup') }}
                    </IButton>
                </FeatureFlag>
            </INav>
            <INav v-if="docs" class="_lg:hidden">
                <span class="_text:weakest _margin-left:1 _margin-y:1/2">
                    {{ t('navigation.documentation') }}
                </span>
                <AppSidebarNavigation />
            </INav>
        </INavbarCollapsible>
    </INavbar>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/css/mixins';

.app-navbar {
    --navbar--light--background: var(--color-white);
    --navbar--light--item--background: var(--color-white);
    --navbar--light--item--hover--background: var(--color-light);
    --navbar--light--collapsed--background: transparent;

    --navbar--dark--collapsed--background: transparent;

    &.-open {
        height: 100%;
        align-items: flex-start;

        :deep(> .container) {
            overflow: auto;
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
        --app-sidebar-navigation--padding: var(--padding-top-1-2) var(--padding-right)
            var(--padding-bottom-1-2) var(--padding-left);
    }

    @include breakpoint-up('lg') {
        .app-sidebar-navigation,
        .app-sidebar-apps {
            display: none;
        }
    }

    @include breakpoint-down('md') {
        .nav.navbar-icons {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: var(--margin-top);
            margin-bottom: var(--margin-bottom);

            .nav-item {
                width: auto;
            }
        }

        .button {
            margin-left: 0;
            width: 100%;
        }
    }
}
</style>
