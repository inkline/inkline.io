<script>
// import Vue from 'vue';
// import Sidebar from '~/components/Sidebar';
// import Navbar from '~/components/Navbar';
// import Layout from '~/components/layout/Layout';
// import SiteSearch from '~/components/SiteSearch';
// import PageNavigation from '~/components/docs/PageNavigation';
// import FooterNavigation from '~/components/docs/FooterNavigation';
import { MatchParentWidth } from '~/directives';
// import {
//     getStyleProperty,
//     off,
//     on
// } from '@inkline/inkline/helpers';
// import { breakpoints } from '@inkline/inkline/constants';

export default {
    name: 'Documentation',
    directives: {
        MatchParentWidth
    },
    data() {
        return {
            sidebarOpen: false,
            collapsible: false,
            collapse: 'sm',
            windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0
        };
    },
    // computed: {
    //     variantIcon() {
    //         return this.$inkline.config.variant || 'light';
    //     }
    // },
    methods: {
        // onLayoutClick(e) {
        //     if (e.target.id === 'layout-aside-left') {
        //         this.setSidebarOpen(false);
        //     }
        // },
        toggleSidebarOpen() {
            this.setSidebarOpen(!this.sidebarOpen);
        },
        setSidebarOpen(value) {
            this.sidebarOpen = value;

            // eslint-disable-next-line no-useless-call
            this.$refs.navbar.$emit.apply(this.$refs.navbar, ['sidebarToggle', value]);
        },
        // onWindowResize() {
        //     if (!this.collapse) { return; }
        //
        //     const windowWidth = window.innerWidth;
        //
        //     if (this.windowWidth <= breakpoints[this.collapse][1] && windowWidth > breakpoints[this.collapse][1]) {
        //         this.setSidebarOpen(false);
        //     }
        //
        //     this.collapsible = windowWidth <= breakpoints[this.collapse][1];
        //     this.windowWidth = windowWidth;
        // }
    },
    // watch: {
    //     $route() {
    //         if (this.collapsible && this.sidebarOpen) {
    //             this.setSidebarOpen(false);
    //         }
    //     }
    // },
    // mounted() {
    //     on(this.$refs.layout.$el, 'click', this.onLayoutClick);
    //
    //     this.highlight();
    //     this.$nuxt.$on('viewLoaded', this.highlight);
    //
    //     if (!Vue.$isServer && typeof window !== 'undefined') {
    //         window.addEventListener('resize', this.onWindowResize);
    //         this.onWindowResize();
    //     }
    // },
    // beforeDestroy() {
    //     off(this.$refs.layout.$el, 'click', this.onLayoutClick);
    //
    //     if (!Vue.$isServer && typeof window !== 'undefined') {
    //         window.removeEventListener('resize', this.onWindowResize);
    //     }
    // }
};
</script>

<template>
    <main id="documentation-layout">
        <navbar ref="navbar" :transparent="false" @toggle="toggleSidebarOpen" />
        <i-container>
            <i-row>
                <i-column>
                    <i-layout ref="layout" vertical>
                        <transition name="fade-in-transition">
                            <i-layout-aside v-show="sidebarOpen || !collapsible" id="documentation-layout-aside-left">
                                <div v-match-parent-width class="layout-fixed-full-height">
                                    <sidebar />
                                </div>
                            </i-layout-aside>
                        </transition>

                        <i-layout-content id="documentation-layout-content">
                            <router-view />
                            <footer-navigation />
                        </i-layout-content>

                        <i-layout-aside id="documentation-layout-aside-right">
                            xxxxxxxxx xxxxxxx xxxxxxxxxx xxxx xxxxxxxx xxxxxxxx xxxxxxxxxx
                            <div v-match-parent-width class="layout-fixed-full-height">
                                <page-navigation />
                            </div>
                        </i-layout-aside>
                    </i-layout>
                </i-column>
            </i-row>
        </i-container>
    </main>
</template>


<style lang="scss">
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

#documentation-layout-content {
    margin: var(--navbar-height) auto var(--spacing);
}

#toggle-dark-mode-sidebar {
    position: absolute;
    top: 0.75rem;
    right: 0;

    @include breakpoint-up('md') {
        display: none;
    }
}

#documentation-layout {
    #documentation-layout-aside-left,
    #documentation-layout-aside-right {
        width: 20rem;
        flex: 1 1 auto;
        box-sizing: border-box;
    }

    #documentation-layout-aside-left {
        min-width: calc(var(--spacing) * 13);

        .layout-aside-children {
            padding-right: calc(var(--spacing) * 2);

            .layout-fixed-full-height {
                width: 100%;
            }
        }

        @include breakpoint-down(sm) {
            position: fixed;
            width: 100%;
            padding: 0;
            top: var(--navbar-height);
            left: 0;
            z-index: 1029;
            background-color: rgba(0, 0, 0, 0.25);

            &.fade-in-transition-enter,
            &.fade-in-transition-leave-to {
                .layout-aside-children {
                    transform: translateX(-100%);
                }
            }

            &.fade-in-transition-enter-to,
            &.fade-in-transition-leave {
                .layout-aside-children {
                    transform: translateX(0);
                }
            }

            .layout-aside-children {
                width: 16rem;
                max-width: 100%;
                background-color: #ffffff;
                border-right: 1px solid var(--color-gray-30);
                box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
                padding: 0;
                transition: transform 0.3s ease;
                transform: translateX(0);
            }

            .layout-fixed-full-height {
                position: relative;
                display: block;
                top: auto;
                padding: 0 var(--spacing);

                .site-navigation {
                    padding: var(--spacing) 0 0;
                }
            }
        }
    }

    #documentation-layout-aside-right {
        .layout-aside-children {
            padding-left: calc(var(--spacing) * 2);
        }

        @include breakpoint-down(md) {
            display: none;
        }
    }

    .layout-content {
        max-width: 48rem;

        @include breakpoint-down(md) {
            max-width: none;
        }
    }
}
</style>
