<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import OsAwards from '~/components/cards/OsAwards.vue';

export default defineComponent({
    components: { OsAwards },
    setup () {
        const router = useRouter();
        const { t } = useI18n();

        return {
            router,
            t
        };
    }
});
</script>

<template>
    <i-header fluid>
        <div class="mobile-background" />
        <i-container class="header-content">
            <i-row>
                <i-column xl="8" lg="9">
                    <h2 class="title">
                        {{ t('index.header.title') }}
                        <span class="_text:primary">
                            {{ t('index.header.titleHighlight') }}
                        </span>
                    </h2>
                    <h1 class="lead description _margin-bottom:2">
                        {{ t('index.header.description') }}
                    </h1>
                </i-column>
            </i-row>
            <i-row>
                <i-column>
                    <div class="header-buttons">
                        <i-button id="get-started-button" size="lg" color="primary" class="_xs:margin-right:1" :to="{ name: 'docs-introduction' }">
                            {{ t('index.header.button') }}
                        </i-button>
                        <i-button id="github-button" aria-label="GitHub" size="lg" href="https://github.com/inkline/inkline" rel="noopener">
                            <icon-fa-brands-github class="_margin-right:1/2" />
                            <span>GitHub</span>
                        </i-button>
                    </div>
                </i-column>
            </i-row>
            <i-row id="index-header-osawards">
                <i-column>
                    <os-awards />
                </i-column>
            </i-row>
        </i-container>
    </i-header>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

$navbar-height: 72px;

@include i-header() {
    padding-top: calc(var(----padding-top) + #{$navbar-height});
    padding-bottom: var(----padding-bottom);
    background-image: url('~/assets/images/header/index-christmas.svg');
    background-repeat: no-repeat;
    background-size: auto 800px;
    width: 100%;

    .mobile-background {
        background-size: auto 100%;
        background-position: center center;
        background-repeat: no-repeat;
        flex-grow: 1;
        background-image: url('~/assets/images/header/index-christmas-centered.svg');
    }

    .title {
        font-size: display-font-size('d5');
    }

    .description {
        font-size: heading-font-size('h4');
    }

    .osawards {
        width: 376px;
        margin-top: spacing();
    }

    @include i-button() {
        min-width: 180px;
        font-size: heading-font-size('h4');

        svg {
            height: heading-font-size('h4');
        }
    }

    /**
     * Color variants
     */

    @include variant('light') {
        background-color: color('white');

        .description {
            color: color('gray-70')
        }
    }

    @include variant('dark') {
        background-color: color('gray-90');

        .description {
            color: color('gray-30')
        }
    }

    /**
     * Responsive design
     */

    @include breakpoint-down('md') {
        background-image: none;
        padding-top: $navbar-height;
        background-position: center $navbar-height;
        background-size: 1280px auto;
        height: 100vh;
        padding-bottom: 0;

        .mobile-background {
            display: flex;
        }

        .title {
            font-size: display-font-size('d6');
        }

        .title,
        .description {
            text-align: center;
        }

        > :deep(.container) {
            width: 100%;
            padding: 0;
            margin: 0;

            > .row {
                width: 100%;
                height: 100%;
                padding: 0;
                margin: 0;

                > .column {
                    width: 100%;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-grow: 1;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding-bottom: 1rem;
                }
            }
        }

        .header-buttons {
            display: flex;
            justify-content: space-between;
            flex-basis: 100%;

            @include i-button() {
                min-width: auto;
            }
        }

        #get-started-button {
            width: 100%;
        }

        #github-button {
            svg {
                margin-right: 0 !important;
            }

            span {
                display: none;
            }
        }

        #index-header-osawards {
            display: none;
        }
    }

    @include breakpoint-down('sm') {
        .title {
            font-size: heading-font-size('h1');
        }
    }

    @include breakpoint-down('xs') {
        .title {
            font-size: 7.5vw;
        }

        .description {
            font-size: font-size();
        }
    }

    @include breakpoint-up('lg') {
        background-position: 150% 0;
        padding-top: calc(var(----padding-top) * 0.5 + #{$navbar-height});

        .mobile-background {
            display: none;
        }
    }

    @include breakpoint-up('xl') {
        background-position: right 0;
    }

    @include breakpoint-up('xxl') {
        padding-top: calc(var(----padding-top) + #{$navbar-height});
    }

    @media screen and (min-width: 1920px) {
        background-size: auto 920px;
    }

    @media screen and (min-width: 2560px) {
        background-size: auto 800px;
        background-position: right 0;
        background-image: url('~/assets/images/header/index-christmas-wide.svg');
    }
}
</style>
