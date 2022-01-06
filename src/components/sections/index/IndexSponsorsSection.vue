<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import vueSchoolImageLight from '~/assets/images/sponsors/vueschool-light.png';
import vueSchoolImageDark from '~/assets/images/sponsors/vueschool-dark.png';
import nuxtImageLight from '~/assets/images/sponsors/nuxt-light.png';
import nuxtImageDark from '~/assets/images/sponsors/nuxt-dark.png';
import DigitalOceanImageLight from '~/assets/images/sponsors/digitalocean-light.png';
import DigitalOceanImageDark from '~/assets/images/sponsors/digitalocean-dark.png';
import icons8ImageLight from '~/assets/images/sponsors/icons8-light.png';
import icons8ImageDark from '~/assets/images/sponsors/icons8-dark.png';
// import tideliftImageLight from '~/assets/images/sponsors/tidelift-light.png';
// import tideliftImageDark from '~/assets/images/sponsors/tidelift-dark.png';
import patreonImage from '~/assets/images/sponsors/patreon.png';

const sponsors = [
    {
        name: 'VueSchool',
        url: 'https://vueschool.io',
        image: {
            light: vueSchoolImageLight,
            dark: vueSchoolImageDark
        }
    },
    {
        name: 'DigitalOcean',
        url: 'https://m.do.co/c/b3ab46156be7',
        image: {
            light: DigitalOceanImageLight,
            dark: DigitalOceanImageDark
        }
    },
    {
        name: 'Icons8',
        url: 'https://icons8.com?ref=alexgrozav',
        image: {
            light: icons8ImageLight,
            dark: icons8ImageDark
        }
    },
    // {
    //     name: 'Tidelift',
    //     url: 'https://tidelift.com',
    //     image: {
    //         light: tideliftImageLight,
    //         dark: tideliftImageDark
    //     }
    // },
    {
        name: 'Nuxt',
        url: 'https://nuxtjs.org',
        image: {
            light: nuxtImageLight,
            dark: nuxtImageDark
        }
    }
];

export default defineComponent({
    setup () {
        const { t } = useI18n();

        return {
            t,
            sponsors,
            patreonImage
        };
    }
});
</script>

<template>
    <i-header>
        <i-row>
            <i-column class="_text:center _margin-bottom:5">
                <span>
                    <icon-fa-solid-heart />
                </span>
            </i-column>
        </i-row>
        <i-row>
            <i-column>
                <div class="_display:flex _justify-content:center _align-items:center _flex-wrap:wrap">
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
                        />
                        <img class="image -light" height="45" :src="sponsor.image.light" :alt="sponsor.name">
                        <img class="image -dark" height="45" :src="sponsor.image.dark" :alt="sponsor.name">
                    </div>
                </div>
            </i-column>
        </i-row>
        <i-row class="_margin-top:2">
            <i-column lg="8" offset-lg="2" class="_text:center">
                <p class="_text:muted">
                    {{ t('index.sponsors.description') }}
                </p>
                <i-button href="https://www.patreon.com/bePatron?u=18449490" target="_blank" color="primary" size="lg" class="-patreon _margin-top:2">
                    <img :src="patreonImage" alt="Patreon">
                    {{ t('index.sponsors.button') }}
                </i-button>
            </i-column>
        </i-row>
    </i-header>
</template>

<style lang="scss" scoped>
@import "@inkline/inkline/css/variables";
@import "@inkline/inkline/css/mixins";

@include i-header() {
    background: transparent;

    @include variant('light') {
        .sponsor img {
            &.-light {
                display: block;
            }

            &.-dark {
                display: none;
            }
        }
    }

    @include variant('dark') {
        .sponsor img {
            &.-light {
                display: none;
            }

            &.-dark {
                display: block;
            }
        }
    }

    .button.-patreon {
        ----background: #f25f5c;
        ----border-color: #d95250;

        &:hover,
        &:focus {
            ----background: #e15856;
            ----border-color: #d95250;
        }

        &:active {
            ----background: #c74d4b;
            ----border-color: #d95250;
        }

        img {
            height: 24px;
            margin-right: spacing('1/2');
        }
    }

    svg {
        font-size: 4rem;

        color: color('red');
    }
}

.sponsor {
    position: relative;
    display: inline-flex;
    margin: 0 calc(var(--spacing) * 2) calc(var(--spacing) * 2);

    img {
        transition: all 0.3s ease;
        opacity: 0.5;
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

    &[data-sponsor="tidelift"] img {
        height: 35px;
    }

    &[data-sponsor="nuxt"] img {
        height: 35px;
    }

    @include breakpoint-down('md') {
        img {
            height: 30px;
        }

        &[data-sponsor="tidelift"] img {
            height: 25px;
        }

        &[data-sponsor="nuxt"] img {
            height: 25px;
        }
    }
}
</style>
