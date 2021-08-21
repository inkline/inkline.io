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
                <i-button size="lg" color="primary" class="_xs:margin-right:0 _sm:margin-right:1">
                    {{ t('index.header.button') }}
                </i-button>
                <i-button size="lg">
                    <i-icon name="fab-github" class="_margin-right:1/2" />
                    GitHub
                </i-button>
            </i-column>
        </i-row>
        <i-row>
            <i-column>
                <os-awards class="_margin-top:2" />
            </i-column>
        </i-row>
    </i-header>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/src/css/variables';
@import '@inkline/inkline/src/css/mixins';

@include i-header() {
    padding-top: calc(var(----padding-top) + 80px);
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
        padding-top: calc(var(----padding-top) + 120px);
        background-position: center -80px;
        background-size: 800px auto;

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

            @include i-button() {
                flex-basis: 50%;
            }
        }

        .osawards {
            display: flex;
            justify-content: center;
        }
    }

    @include breakpoint-down('sm') {
        .title {
            font-size: heading-font-size('h1');
        }
    }

    @include breakpoint-down('xs') {
        .title {
            font-size: heading-font-size('h2');
        }

        .description {
            font-size: font-size();
        }

        .buttons {
            flex-direction: column;

            @include i-button() {
                flex-basis: 100%;
                margin-right: 0;

                + .button {
                    margin-top: spacing();
                }
            }
        }
    }

    @include breakpoint-up('lg') {
        background-image: url('~/assets/images/header/index.svg');
        background-position: 120% top;
        background-size: auto 650px;
    }

    @include breakpoint-up('xl') {
        background-position: right top;
        background-size: auto 700px;
    }
}
</style>

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
