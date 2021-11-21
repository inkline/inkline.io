<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
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
    <i-header>
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
            <i-column class="buttons">
                <i-button id="get-started-button" size="lg" color="primary" class="_xs:margin-right:1">
                    {{ t('index.header.button') }}
                </i-button>
                <i-button id="github-button" size="lg">
                    <i-icon name="fab-github" class="_margin-right:1/2" />
                    <span>GitHub</span>
                </i-button>
            </i-column>
        </i-row>
    </i-header>
</template>

<style lang="scss" scoped>
@import '~@inkline/inkline/css/variables';
@import '~@inkline/inkline/css/mixins';

$navbar-height: 72px;

@include i-header() {
    padding-top: calc(var(----padding-top) + #{$navbar-height});
    padding-bottom: var(----padding-bottom);
    background-repeat: no-repeat;

    .title {
        font-size: display-font-size('d5');
    }

    .description {
        font-size: heading-font-size('h4');
    }

    @include variant('light') {
        background-color: color('white');

        .description {
            color: color('gray-70')
        }
    }

    @include variant('dark') {
        background-color: color('gray-85');

        .description {
            color: color('gray-30')
        }
    }

    @include i-button() {
        min-width: 180px;
        font-size: heading-font-size('h4');

        @include i-icon() {
            height: heading-font-size('h4');
        }
    }

    @include breakpoint-down('md') {
        background-image: url('~/assets/images/header/index-centered.svg');
        padding-top: calc(340px + #{$navbar-height});
        background-position: center $navbar-height;
        background-size: 800px auto;
        height: 100vh;
        padding-bottom: 0;

        .title {
            font-size: display-font-size('d6');
        }

        .title,
        .description {
            text-align: center;
        }

        .buttons {
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
            @include i-icon() {
                margin-right: 0 !important;
            }

            span {
                display: none;
            }
        }

        .osawards {
            display: flex;
            justify-content: center;
        }
    }

    @include breakpoint-down('sm') {
        .container > .row {
            background: red;
            align-self: stretch;
            flex-direction: column;

            > .column {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }

        .title {
            font-size: heading-font-size('h1');
        }
    }

    @include breakpoint-down('xs') {
        .title {
            font-size: heading-font-size('h3');
        }

        .description {
            font-size: font-size();
        }
    }

    @include breakpoint-up('lg') {
        background-image: url('~/assets/images/header/index-christmas.svg');
        background-position: 120% $navbar-height;
        background-size: auto 650px;
    }

    @include breakpoint-up('xl') {
        background-position: right $navbar-height;
        background-size: auto 700px;
    }
}
</style>
