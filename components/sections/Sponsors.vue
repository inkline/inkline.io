<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

const sponsors = [
    {
        name: 'VueSchool',
        url: 'https://vueschool.io',
        image: {
            light: '/images/sponsors/vueschool-light.png',
            dark: '/images/sponsors/vueschool-dark.png',
            height: 60,
            width: 282
        }
    },
    {
        name: 'DigitalOcean',
        url: 'https://m.do.co/c/b3ab46156be7',
        image: {
            light: '/images/sponsors/digitalocean-light.png',
            dark: '/images/sponsors/digitalocean-dark.png',
            height: 60,
            width: 358
        }
    },
    {
        name: 'Icons8',
        url: 'https://icons8.com?ref=alexgrozav',
        image: {
            light: '/images/sponsors/icons8-light.png',
            dark: '/images/sponsors/icons8-dark.png',
            height: 60,
            width: 195
        }
    },
    // {
    //     name: 'Tidelift',
    //     url: 'https://tidelift.com',
    //     image: {
    //         light: tideliftImageLight,
    //         dark: tideliftImageDark,
    //         height: 60,
    //         width: 300
    //     }
    // },
    {
        name: 'Nuxt',
        url: 'https://nuxtjs.org',
        image: {
            light: '/images/sponsors/nuxt-light.png',
            dark: '/images/sponsors/nuxt-dark.png',
            height: 60,
            width: 288
        }
    }
];

export default defineComponent({
    setup() {
        const { t } = useI18n();

        return {
            t,
            sponsors
        };
    }
});
</script>

<template>
    <SectionsComponentsSection class="sponsors-section" tag="div">
        <IRow>
            <IColumn class="_text:center _margin-bottom:5">
                <Icon class="header-icon" name="fa-solid:heart" />
            </IColumn>
        </IRow>
        <IRow>
            <IColumn>
                <div
                    class="_display:flex _justify-content:center _align-items:center _flex-wrap:wrap"
                >
                    <div
                        v-for="sponsor in sponsors"
                        :key="sponsor.name"
                        class="sponsor"
                        :data-sponsor="sponsor.name.toLowerCase()"
                    >
                        <a
                            class="_overlay-link"
                            :href="sponsor.url"
                            target="_blank"
                            rel="sponsored noopener"
                        >
                            <span class="_visually-hidden">
                                {{ sponsor.name }}
                            </span>
                        </a>
                        <NuxtPicture
                            class="image -light"
                            :width="sponsor.image.width"
                            :height="sponsor.image.height"
                            :src="sponsor.image.light"
                            :alt="sponsor.name"
                        />
                        <NuxtPicture
                            class="image -dark"
                            :width="sponsor.image.width"
                            :height="sponsor.image.height"
                            :src="sponsor.image.dark"
                            :alt="sponsor.name"
                        />
                    </div>
                </div>
            </IColumn>
        </IRow>
        <IRow class="_margin-top:2">
            <IColumn lg="8" offset-lg="2" class="_text:center">
                <p class="_text:muted">
                    {{ t('pages.index.sponsors.description') }}
                </p>
                <IButton
                    href="https://github.com/sponsors/alexgrozav"
                    target="_blank"
                    color="danger"
                    size="lg"
                    class="_margin-top:2"
                >
                    <Icon name="fa-solid:heart" class="_margin-right:1/2" width="20" height="20" />
                    {{ t('pages.index.sponsors.button') }}
                </IButton>
            </IColumn>
        </IRow>
    </SectionsComponentsSection>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.sponsors-section {
    --section--light--background: var(--color-gray-50);
    --section--dark--background: var(--color-dark-shade-100);

    &.-light {
        .sponsor picture {
            &.-light {
                display: block;
            }

            &.-dark {
                display: none;
            }
        }
    }

    &.-dark {
        .sponsor picture {
            &.-light {
                display: none;
            }

            &.-dark {
                display: block;
            }
        }
    }

    .header-icon {
        font-size: 5rem;

        color: var(--color-red);
    }

    .button {
        --button--danger--color: white;
    }

    .sponsor {
        position: relative;
        display: inline-flex;
        margin: 0 var(--margin-right-2) var(--margin-bottom-2) var(--margin-left-2);

        img {
            transition: all var(--transition-duration) var(--transition-timing-function);
            opacity: 0.66;
            height: 45px;
            width: auto;
            filter: grayscale(100%);
        }

        &:hover img,
        &:focus img,
        &:active img {
            filter: none !important;
            opacity: 1;
        }

        &[data-sponsor='tidelift'] img {
            height: 35px;
        }

        &[data-sponsor='nuxt'] img {
            height: 35px;
        }

        @include breakpoint-down('md') {
            img {
                height: 30px;
            }

            &[data-sponsor='tidelift'] img {
                height: 25px;
            }

            &[data-sponsor='nuxt'] img {
                height: 25px;
            }
        }
    }
}
</style>
