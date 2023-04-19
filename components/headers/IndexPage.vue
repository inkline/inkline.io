<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from 'vue-i18n-routing';
import { useTelemetry } from '~/composables';

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
        const { track } = useTelemetry();

        const image = computed(() => {
            const seasonalTheme = seasonalThemes.find(
                (theme) =>
                    theme.from.valueOf() <= today.valueOf() && today.valueOf() <= theme.to.valueOf()
            );

            return seasonalTheme?.image || defaultImage;
        });

        function onGetStartedClick() {
            track('user clicked "Get started" button on homepage');
        }

        function onGitHubClick() {
            track('user clicked "GitHub" button on homepage');
        }

        function onOSAwardsClick() {
            track('user clicked "Open Source Awards" card on homepage');
        }

        return {
            t,
            image,
            localePath,
            onGetStartedClick,
            onGitHubClick,
            onOSAwardsClick
        };
    }
});
</script>

<template>
    <IHeader class="index-page-header">
        <NuxtImg :src="image" class="header-illustration" />
        <IRow class="header-content">
            <IColumn lg="8" xl="8">
                <div class="_margin-bottom:2">
                    <NuxtLink
                        class="header-release-link"
                        to="/blog/2023-04-04/introducing-inkline-4"
                    >
                        <IBadge color="warning" class="_margin-right:1/2">New in v4.0</IBadge>
                        Configuration file, design tokens, toast notifications and more!
                    </NuxtLink>
                </div>
                <h2 class="header-title">
                    {{ t('pages.index.header.title') }}
                    <span class="_color:primary">
                        {{ t('pages.index.header.titleHighlight') }}
                    </span>
                </h2>
                <h1 class="lead header-description _margin-bottom:2">
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
                        @click="onGetStartedClick"
                    >
                        {{ t('pages.index.header.button') }}
                    </IButton>
                    <IButton
                        id="github-button"
                        aria-label="GitHub"
                        size="lg"
                        href="https://github.com/inkline/inkline"
                        rel="noopener"
                        target="_blank"
                        @click="onGitHubClick"
                    >
                        <Icon name="fa-brands:github" class="_margin-right:1/2" />
                        <span>GitHub</span>
                    </IButton>
                </div>
            </IColumn>
        </IRow>
        <IRow id="index-header-osawards" class="_margin-top:3">
            <IColumn>
                <CardsOsAwards @click="onOSAwardsClick" />
            </IColumn>
        </IRow>
    </IHeader>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

$navbar-height: 72px;

.index-page-header {
    --header--light--background: var(--body--background);
    --header--dark--background: var(--body--background);

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

    .header-title {
        font-size: calc(var(--font-size) * var(--scale-ratio-pow-6) * var(--scale-ratio));
    }

    .header-description {
        font-size: var(--font-size-xl);
        line-height: 1.5;
    }

    .header-release-link {
        color: var(--text-color-weak);
    }

    @include breakpoint-down('xl') {
        .header-illustration {
            transform: translateX(50%);
        }

        .header-title {
            font-size: calc(var(--font-size) * var(--scale-ratio-pow-6));
        }
    }

    @include breakpoint-down('lg') {
        .header-illustration {
            transform: translate(50%, -10%);
        }

        .header-title {
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

        .header-title {
            font-size: calc(var(--font-size) * var(--scale-ratio-pow-4));
        }

        .header-description {
            font-size: var(--font-size-md);
        }
    }
}
</style>
