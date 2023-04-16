<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { useHead, useLocaleHead } from '#imports';
import { NavigationPage } from '~/types';

export default defineComponent({
    props: {
        type: {
            type: String,
            default: 'content'
        },
        sidebar: {
            type: Boolean,
            default: true
        },
        navigation: {
            type: Array as PropType<NavigationPage[]>,
            default: () => []
        }
    },
    setup() {
        useHead(
            useLocaleHead({
                addDirAttribute: true,
                identifierAttribute: 'id',
                addSeoAttributes: true
            })
        );

        return {};
    }
});
</script>

<template>
    <ILayout :id="`${type}-layout`" class="content-layout">
        <ILayoutHeader :id="`${type}-layout-header`" class="content-layout-header">
            <AppNavbar :type="type">
                <template #collapsible>
                    <slot name="navbar" />
                </template>
            </AppNavbar>
        </ILayoutHeader>
        <ILayout vertical>
            <ILayoutContent>
                <IContainer :id="`${type}-layout-container`" class="content-layout-container">
                    <AppSidebar v-if="sidebar">
                        <slot name="sidebar">
                            <AppSidebarApps />
                        </slot>
                    </AppSidebar>
                    <slot name="content">
                        <div :id="`${type}-page`" class="content-page">
                            <slot />
                            <!--                        <PageFooterNavigation />-->
                        </div>
                        <AppDocsPageSidebar />
                    </slot>
                </IContainer>
            </ILayoutContent>
        </ILayout>
    </ILayout>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.content-layout {
    transition: background-color var(--transition-duration) var(--transition-timing-function);
    min-height: 100vh;

    .app-sidebar,
    .app-docs-page-sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 0;
        width: var(--sidebar--width);
    }

    .app-sidebar {
        .sidebar-content {
            padding-top: var(--navbar--height);
            padding-bottom: var(--article--padding-bottom);
        }
    }

    .app-docs-page-sidebar {
        margin-top: var(--navbar--height);
        padding-top: var(--article--padding-top);
        padding-right: var(--padding-right);
        right: var(--margin-right);

        @include breakpoint-down('lg') {
            display: none;
        }
    }

    .app-sidebar {
        @include breakpoint-down('md') {
            display: none;
        }
    }

    .content-layout-container {
        @include breakpoint-up('sm') {
            padding-left: 0;
            padding-right: 0;
        }
    }

    .content-page {
        padding-top: calc(var(--navbar--height) + var(--article--padding-top));
        padding-bottom: var(--article--padding-bottom);
        margin-left: var(--sidebar--width);
        margin-right: var(--sidebar--width);

        @include breakpoint-down('md') {
            margin-left: 0;
        }

        @include breakpoint-down('lg') {
            margin-right: 0;
        }
    }
}
</style>
