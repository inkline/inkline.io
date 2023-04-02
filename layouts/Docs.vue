<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useHead, useLocaleHead } from '#imports';

export default defineComponent({
    setup() {
        const sidebarOpen = ref(false);

        useHead(
            useLocaleHead({
                addDirAttribute: true,
                identifierAttribute: 'id',
                addSeoAttributes: true
            })
        );

        return { sidebarOpen };
    }
});
</script>

<template>
    <ILayout id="documentation-layout">
        <ILayoutHeader>
            <AppNavbar docs />
        </ILayoutHeader>
        <ILayout vertical>
            <ILayoutContent>
                <IContainer id="documentation-layout-container">
                    <AppSidebar />
                    <article id="documentation-page">
                        <slot />
                        <!--                            <PageFooterNavigation />-->
                    </article>
                    <AppDocsPageSidebar />
                </IContainer>
            </ILayoutContent>
        </ILayout>
        <IToastContainer />
    </ILayout>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

#documentation-layout {
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

    .app-navbar {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999;
    }
}

#documentation-layout-container {
    @include breakpoint-up('sm') {
        padding-left: 0;
        padding-right: 0;
    }
}

#documentation-page {
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

    > div {
        > h1,
        > h2,
        > h3,
        > h4,
        > h5,
        > h6 {
            margin-top: 2.5rem;

            > a {
                color: var(--body--color);

                &::after {
                    --icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24a2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24a2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24a.973.973 0 0 1 0-1.42Z'/%3E%3C/svg%3E");
                    content: '';
                    display: none;
                    width: 1.2rem;
                    height: 1.2rem;
                    mask-size: 100%;
                    -webkit-mask-size: 100%;
                    mask: var(--icon);
                    -webkit-mask: var(--icon);
                    background-color: currentColor;
                    color: inherit;
                    margin-left: var(--margin-left-1-4);
                }

                &:hover {
                    text-decoration: none;

                    &::after {
                        display: inline-block;
                    }
                }
            }
        }

        > h1:first-child {
            margin-top: 0;

            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 1px;
                background-color: var(--border-bottom-color);
                margin-top: var(--margin-top-2);
            }

            + h2 {
                font-size: var(--font-size-xl);
                font-weight: var(--font-weight-normal);
                line-height: 1.5;
                margin-top: var(--margin-top-2);
                margin-bottom: var(--margin-bottom-2);
            }
        }

        > table {
            width: 100%;
            margin-bottom: var(--margin-bottom);

            th,
            td {
                padding: var(--padding-xs);
                border-style: var(--border-style);
                border-width: var(--border-width);
                border-color: var(--border-color);
            }
        }

        > .alert {
            margin-bottom: var(--margin-bottom);
        }

        > pre,
        .pre,
        .install-step pre,
        .tab > .tab-body > pre {
            background: var(--shiki-color-background);
            padding: var(--padding);
            border-radius: var(--border-radius);
            font-family: var(--font-family-primary-monospace);
            font-size: var(--font-size-sm);
        }
    }
}
</style>
