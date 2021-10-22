<script lang="ts">
import { defineComponent, inject, ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import logoBlack from '~/assets/images/logo/logo-black.svg';
import logoWhite from '~/assets/images/logo/logo-white.svg';
import { Prototype } from '@inkline/inkline';
import { on, off } from '@inkline/inkline/helpers';

export default defineComponent({
    props: {
        transparent: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        const { t } = useI18n();
        const isTransparent = ref(props.transparent);
        const inkline = inject<Prototype>('inkline', {} as any);
        const colorMode = ref(inkline.options.colorMode);

        const setColorMode = () => {
            const mode = inkline.options.colorMode === 'dark' ? 'light' : 'dark';

            inkline.options.colorMode = mode;
            colorMode.value = mode;

            console.log('wat', mode)
        };

        const onWindowScroll = () => {
            isTransparent.value = window.scrollY < 48;
        };

        onMounted(() => {
            if (props.transparent) {
                on(window as any, 'scroll', onWindowScroll);
            }
        });

        onBeforeUnmount(() => {
            if (props.transparent) {
                off(window as any, 'scroll', onWindowScroll);
            }
        });

        return {
            t,
            colorMode,
            isTransparent,
            setColorMode,
            logoBlack,
            logoWhite
        };
    }
});
</script>


<template>
    <i-navbar :class="{ '-transparent': isTransparent }" :collapse="false">
        <i-navbar-brand to="/" translate="no">
            <img class="logo -black" :src="logoBlack">
            <img class="logo -white" :src="logoWhite">
            Inkline
        </i-navbar-brand>
        <i-navbar-collapsible class="_justify-content:end">
            <!--<i-input :placeholder="t('navbar.input.placeholder')">-->
            <!--    <template #append>-->
            <!--        <i-button color="primary">-->
            <!--            <i-icon name="ink-search" />-->
            <!--        </i-button>-->
            <!--    </template>-->
            <!--</i-input>-->
            <i-nav>
                <i-nav-item :to="{ name: 'docs-introduction' }">
                    {{ t('navbar.documentation') }}
                </i-nav-item>
                <!--<i-nav-item>-->
                <!--    <i-icon name="ink-search" />-->
                <!--</i-nav-item>-->
                <i-nav-item @click="setColorMode">
                    <i-icon v-if="colorMode === 'dark'" name="fas-sun" />
                    <i-icon v-else name="fas-moon" />
                </i-nav-item>
                <i-nav-item :to="{ name: 'docs-introduction' }">
                    <i-icon name="fab-github" />
                </i-nav-item>
            </i-nav>
        </i-navbar-collapsible>
    </i-navbar>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

@include i-navbar() {
    ----border-radius: 0;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--transition-easing);
    transition-property: background-color;

    .logo {
        height: 24px;
        width: auto;
        margin-right: spacing('1/2');
    }

    .nav {
        .nav-item {
            ----border-radius: var(--border-radius);
            background: transparent;
            cursor: pointer;
        }
    }

    @include variant('light') {
        ----background: var(--color-white);
        ----border-bottom-color: var(--color-gray-10);

        .logo.-white {
            display: none;
        }
    }

    @include variant('dark') {
        .logo.-black {
            display: none;
        }
    }

    &.-transparent {
        @include variant('light') {
            ----background: rgba(255, 255, 255, 0.33);
            ----border-bottom-color: rgba(0, 0, 0, 0.1);

            .logo.-white {
                display: none;
            }

            .nav {
                .nav-item {
                    @include breakpoint-up('lg') {
                        color: color('white');
                    }

                    &:hover,
                    &:focus {
                        background: rgba(255, 255, 255, 0.25);
                    }

                    &:active {
                        background: rgba(255, 255, 255, 0.33);
                    }
                }
            }
        }

        @include variant('dark') {
            ----background: rgba(0, 0, 0, 0.33);
            ----border-bottom-color: rgba(255, 255, 255, 0.1);

            .logo.-black {
                display: none;
            }

            .nav {
                .nav-item {
                    &:hover,
                    &:focus {
                        background: rgba(0, 0, 0, 0.25);
                    }

                    &:active {
                        background: rgba(0, 0, 0, 0.33);
                    }
                }
            }
        }
    }
}
</style>
