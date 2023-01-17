<script lang="ts">
import { defineComponent } from 'vue';
import { useInkline } from '@inkline/inkline';

export default defineComponent({
    props: {
        docs: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const localePath = useLocalePath();
        const { t } = useI18n();

        const inkline = useInkline();
        const colorMode = computed<'light' | 'dark'>(() => inkline.options.colorMode);

        function toggleColorMode() {
            inkline.options.colorMode = colorMode.value === 'light' ? 'dark' : 'light';
        }

        return {
            t,
            colorMode,
            localePath,
            toggleColorMode
        };
    }
});
</script>

<template>
    <INavbar class="app-navbar">
        <INavbarBrand :to="localePath('/')"> Inkline </INavbarBrand>
        <INavbarCollapsible>
            <INav class="_margin-left:auto">
                <INavItem :to="localePath('/')">
                    {{ t('navigation.home') }}
                </INavItem>
                <FeatureFlag name="premium">
                    <INavItem :to="localePath('/pricing')">
                        {{ t('navigation.pricing') }}
                    </INavItem>
                </FeatureFlag>
                <INavItem :to="localePath('/docs')">
                    {{ t('navigation.documentation') }}
                </INavItem>
            </INav>
            <INav class="navbar-icons">
                <INavItem
                    href="https://github.com/inkline/inkline"
                    target="_blank"
                    :title="t('navigation.github')"
                >
                    <Icon name="bi:github" size="20px" />
                </INavItem>
                <INavItem
                    href="https://chat.inkline.io"
                    target="_blank"
                    :title="t('navigation.discord')"
                >
                    <Icon name="bi:discord" size="20px" />
                </INavItem>
                <INavItem
                    class="_cursor:pointer"
                    :title="
                        t('navigation.switchColorMode', {
                            colorMode: colorMode === 'light' ? 'dark' : 'light'
                        })
                    "
                    stop-propagation
                    @click="toggleColorMode"
                >
                    <Icon v-if="colorMode === 'light'" name="fa6-solid:moon" size="20px" />
                    <Icon v-else name="fa6-solid:sun" size="20px" />
                </INavItem>
            </INav>
            <INav>
                <FeatureFlag name="premium">
                    <INavItem :to="localePath('/login')">
                        {{ t('navigation.signin') }}
                    </INavItem>
                    <IButton :to="localePath('/signup')" color="primary" class="_margin-left:1">
                        {{ t('navigation.signup') }}
                    </IButton>
                </FeatureFlag>
            </INav>
            <INav v-if="docs">
                <span class="_text:weakest _margin-left:1 _margin-y:1/2">Documentation</span>
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
