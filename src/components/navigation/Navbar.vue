<template>
    <i-navbar :collapse="false">
        <i-navbar-brand to="/" translate="no">
            <img class="logo -black" :src="logoBlack">
            <img class="logo -white" :src="logoWhite">
            Inkline
        </i-navbar-brand>
        <i-navbar-collapsible class="_justify-content:end">
            <i-input :placeholder="t('navbar.input.placeholder')">
                <template #append>
                    <i-button color="primary">
                        <i-icon name="ink-search" />
                    </i-button>
                </template>
            </i-input>
            <i-nav>
                <i-nav-item :to="{ name: 'docs-introduction' }">
                    {{ t('navbar.documentation') }}
                </i-nav-item>
                <i-nav-item @click="setColorMode">
                    <i-icon name="ink-search" />
                </i-nav-item>
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
@import '@inkline/inkline/src/css/variables';
@import '@inkline/inkline/src/css/mixins';

@include i-navbar() {
    ----border-radius: 0;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;


    @include variant('light') {
        ----background: rgba(255, 255, 255, 0.33);
        ----border-bottom-color: rgba(0, 0, 0, 0.1);

        .logo.-white {
            display: none;
        }

        .nav {
            .nav-item {
                color: color('white');

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
}
</style>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { useI18n } from "vue-i18n";
import logoBlack from '~/assets/images/logo/logo-black.svg';
import logoWhite from '~/assets/images/logo/logo-white.svg';

// import { inklineGlobals } from "@inkline/inkline/src/plugin";
//
//
// function inklineSetColorMode(mode) {
//     inklineGlobals.prototype.options.colorMode = mode;
// }
//
// function useColorMode() {
//     const colorMode = toRef(inklineGlobals.prototype.options, 'colorMode');
//
//     return {
//         colorMode
//     };
// }

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const inkline = inject('inkline', {});
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
