<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Documentation',
    setup () {
        const sidebarOpen = ref(false);

        return {
            sidebarOpen
        };
    }
});
</script>

<template>
    <i-layout id="documentation-layout">
        <i-layout-header>
            <navbar ref="navbar">
                <i-hamburger-menu v-model="sidebarOpen" class="_lg:hidden" />
            </navbar>
        </i-layout-header>
        <i-layout vertical>
            <i-layout-content>
                <i-container>
                    <sidebar v-model="sidebarOpen" />
                    <article id="documentation-page">
                        <router-view />
                    </article>
                    <page-navigation />
                </i-container>
            </i-layout-content>
        </i-layout>
    </i-layout>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

#documentation-layout {
    min-height: 100vh;

    .container {
        height: 100%;
    }

    @include i-hamburger-menu() {
        ----padding: 0.25rem 1rem;
    }

    @include i-sidebar() {
        ----width: var(--sidebar-width);

        top: var(--navbar-height);
        height: calc(100% - var(--navbar-height)) !important;

        :deep(.sidebar) {
            height: calc(100% - var(--navbar-height)) !important;

            .sidebar-content {
                padding-top: var(--article--margin-top);
            }
        }
    }

    :deep(#navbar-item-documentation) {
        display: none;
    }
}

#documentation-page {
    margin-top: calc(var(--navbar-height) + var(--article--margin-top));
    margin-left: var(--sidebar-width);
    margin-right: var(--sidebar-width);

    @include breakpoint-down('md') {
        margin-left: 0;
        margin-right: 0;
    }

    > :deep(.markdown) {
        > h1:first-child {
            margin-top: 0;

            + h2 {
                font-size: var(--h3--font-size);
                font-weight: var(--font-weight--normal);
            }
        }
    }
}
</style>
