<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from 'vue-i18n-routing';

interface SeasonalTheme {
    image: string;
    from: Date;
    to: Date;
}

const today = new Date();
const year = today.getFullYear();
const seasonalThemes: SeasonalTheme[] = [
    {
        image: '/images/header/index-christmas.svg',
        from: new Date(year, 0, 1),
        to: new Date(year, 0, 10)
    },
    {
        image: '/images/header/index-christmas.svg',
        from: new Date(year, 11, 1),
        to: new Date(year, 11, 31)
    }
];
const defaultImage = '/images/header/index.svg';

export default defineComponent({
    setup() {
        const localePath = useLocalePath();
        const { t } = useI18n();

        const image = computed(() => {
            const seasonalTheme = seasonalThemes.find(
                (theme) =>
                    theme.from.valueOf() <= today.valueOf() && today.valueOf() <= theme.to.valueOf()
            );

            return seasonalTheme?.image || defaultImage;
        });

        return {
            t,
            image,
            localePath
        };
    }
});
</script>

<template>
    <IHeader class="index-page-header">
        <NuxtImg :src="image" class="header-illustration" />
        <IRow class="header-content">
            <IColumn lg="8" xl="8">
                <h2 class="title">
                    {{ t('pages.index.header.title') }}
                    <span class="_color:primary">
                        {{ t('pages.index.header.titleHighlight') }}
                    </span>
                </h2>
                <h1 class="lead description _margin-bottom:2">
                    {{ t('pages.index.header.description') }}
                </h1>
            </IColumn>
        </IRow>
        <IRow>
            <IColumn>
                <div class="header-buttons">
                    <IButton
                        id="get-started-button"
                        size="lg"
                        color="primary"
                        class="_margin-right:1"
                        :to="{ path: '/docs' }"
                    >
                        {{ t('pages.index.header.button') }}
                    </IButton>
                    <IButton
                        id="github-button"
                        aria-label="GitHub"
                        size="lg"
                        href="https://github.com/inkline/inkline"
                        rel="noopener"
                    >
                        <Icon name="fa-brands:github" class="_margin-right:1/2" />
                        <span>GitHub</span>
                    </IButton>
                </div>
            </IColumn>
        </IRow>
        <IRow id="index-header-osawards" class="_margin-top:3">
            <IColumn>
                <CardsOsAwards />
            </IColumn>
        </IRow>
    </IHeader>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

$navbar-height: 72px;

.index-page-header {
    --header--light--background: var(--color-white);

    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: right -100px;
    width: 100%;
    overflow: hidden;

    .header-illustration {
        top: calc(-1 * var(--header--padding-top));
        right: 0;
        height: calc(100% + var(--header--padding-top) + var(--header--padding-bottom));
        width: auto;
        transform: translateX(50%);
        position: absolute;
    }

    .title {
        font-size: calc(var(--font-size) * var(--scale-ratio-pow-6) * var(--scale-ratio));
    }

    .description {
        font-size: var(--font-size-xl);
        line-height: 1.5;
    }

    @include breakpoint-down('xl') {
        .header-illustration {
            transform: translateX(50%);
        }

        .title {
            font-size: calc(var(--font-size) * var(--scale-ratio-pow-6));
        }
    }

    @include breakpoint-down('lg') {
        .header-illustration {
            transform: translate(50%, -10%);
        }

        .title {
            font-size: calc(var(--font-size) * var(--scale-ratio-pow-5));
        }
    }

    @include breakpoint-down('md') {
        --header--md--padding-top: 0;

        text-align: center;
        overflow: hidden;

        .header-illustration {
            top: unset;
            right: unset;
            bottom: unset;
            left: unset;
            transform: translate(0, 0);
            position: relative;
            width: 200%;
            height: auto;
            margin-left: -50%;
        }

        .title {
            font-size: calc(var(--font-size) * var(--scale-ratio-pow-4));
        }

        .description {
            font-size: var(--font-size-md);
        }
    }
}
</style>
