<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import logoBlack from '~/assets/images/logo/logo-black.svg';
import logoWhite from '~/assets/images/logo/logo-white.svg';
import { Prototype } from '@inkline/inkline';

export default defineComponent({
    props: {
        type: {
            type: String,
            default: 'default'
        },
        transparent: {
            type: Boolean,
            default: true
        }
    },
    setup () {
        const { t } = useI18n();
        const inkline = inject<Prototype>('inkline', {} as any);
        const colorMode = ref(inkline.options.colorMode);

        const setColorMode = () => {
            const mode = inkline.options.colorMode === 'dark' ? 'light' : 'dark';

            inkline.options.colorMode = mode;
            colorMode.value = mode;
        };

        return {
            t,
            colorMode,
            setColorMode,
            logoBlack,
            logoWhite
        };
    }
});
</script>

<template>
    <i-navbar :collapse="false">
        <i-navbar-brand to="/" translate="no">
            <img alt="Inkline Logo" class="logo -black" height="24" width="22.5" :src="logoBlack">
            <img alt="Inkline Logo" class="logo -white" height="24" width="22.5" :src="logoWhite">
            <span>Inkline</span>
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
                <i-nav-item v-if="type === 'docs'" id="navbar-item-docsearch">
                    <docsearch />
                </i-nav-item>
                <i-nav-item v-if="type === 'default'" id="navbar-item-documentation" :to="{ name: 'docs-introduction' }">
                    <span>{{ t('navbar.docs') }}</span>
                    <span>{{ t('navbar.documentation') }}</span>
                </i-nav-item>
                <i-nav-item @click="setColorMode">
                    <i-icon v-if="colorMode === 'dark'" name="fas-sun" />
                    <i-icon v-else name="fas-moon" />
                    <span class="_visually-hidden">
                        <span>{{ t('navbar.colorMode') }}</span>
                    </span>
                </i-nav-item>
                <i-nav-item href="https://github.com/inkline/inkline" rel="noopener">
                    <i-icon name="fab-github" />
                    <span class="_visually-hidden">
                        GitHub
                    </span>
                </i-nav-item>
                <slot />
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

    #navbar-item-docsearch {
        padding-top: 0;
        padding-bottom: 0;
    }

    /**
     * Color variants
     */

    @include variant('light') {
        ----background: var(--color--white);
        ----border-bottom-color: var(--color--gray-10);

        .logo.-white {
            display: none;
        }
    }

    @include variant('dark') {
        .logo.-black {
            display: none;
        }
    }

    /**
     * Responsive design
     */

    @media screen and (max-width: 360px) {
        .navbar-brand {
            margin-right: 0;

            img {
                margin-right: 0;
            }

            span {
                display: none;
            }
        }
    }

    @include breakpoint-down('xs') {
        #navbar-item-documentation {
            span:first-child {
                display: inline-block;
            }

            span:last-child {
                display: none;
            }
        }
    }

    @include breakpoint-up('sm') {
        #navbar-item-documentation {
            span:first-child {
                display: none;
            }

            span:last-child {
                display: inline-block;
            }
        }
    }
}
</style>
