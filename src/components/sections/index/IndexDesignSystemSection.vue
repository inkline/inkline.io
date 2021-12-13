<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import profileImage from '~/assets/images/sample/profile.jpg';
import coverImage from '~/assets/images/sample/cover.jpg';

const coverImages: { [key: string]: any } = {
    default: coverImage,
    modern: coverImage,
    minimalist: coverImage,
    glassmorphism: coverImage
};

export default defineComponent({
    setup () {
        const { t } = useI18n();
        const styles = ref([
            'default',
            'modern',
            'minimalist',
            'glassmorphism'
        ]);
        const selectedStyle = ref('default');

        return {
            t,
            selectedStyle,
            styles,
            profileImage,
            coverImage: coverImages[selectedStyle.value]
        };
    }
});
</script>

<template>
    <i-header color="dark" :class="`-${selectedStyle}`">
        <i-row>
            <i-column class="section-header" lg="8" offset-lg="2">
                <section-header>
                    <template #title>
                        {{ t('index.designSystem.title') }}
                        <span class="_text:primary">
                            {{ t('index.designSystem.titleHighlight') }}
                        </span>
                    </template>
                    <template #description>
                        {{ t('index.designSystem.description') }}
                    </template>
                </section-header>
            </i-column>
        </i-row>
        <i-row middle center class="_margin-y:4">
            <i-column class="style-selector">
                <i-button
                    v-for="style in styles"
                    :key="style"
                    size="lg"
                    :active="selectedStyle === style"
                    @click="selectedStyle = style"
                >
                    {{ t(`index.designSystem.styles.${style}`) }}
                </i-button>
            </i-column>
        </i-row>
        <i-row class="examples">
            <i-column lg="6" xl="4">
                <design-system-profile-card :profile="profileImage" :cover="coverImage" class="_margin-bottom:2" />
                <design-system-pricing-card class="_xl:hidden _margin-bottom:2" />
            </i-column>
            <i-column lg="6" xl="4">
                <design-system-tasks-card class="_margin-bottom:2" />
                <design-system-login-card class="_margin-bottom:2" />
                <design-system-post-card class="_xl:hidden _margin-bottom:2" />
            </i-column>
            <i-column lg="6" xl="4">
                <design-system-pricing-card class="_xl:visible _margin-bottom:2" />
                <design-system-post-card class="_xl:visible _margin-bottom:2" />
            </i-column>
        </i-row>
    </i-header>
</template>

<style lang="scss" scoped>
@import "@inkline/inkline/css/variables";
@import "@inkline/inkline/css/mixins";

@include i-header() {
    .section-header {
        text-align: center;
    }

    @include variant('dark') {
        ----background: #{color('gray-85')};
    }

    .style-selector {
        @include i-button() {
            ----background: rgba(0 0 0 / 0.25);
            ----color: #{color('white')};
            ----border-width: 0;
            margin-right: spacing();
            margin-bottom: spacing();

            &:last-child {
                margin-right: 0;
            }

            &:hover,
            &:focus {
                ----background: rgba(0 0 0 / 0.33);
            }

            &:active {
                ----background: rgba(0 0 0 / 0.5);
            }

            @include variant('active') {
                ----background: #{color('primary')};
                ----color: #{color('white')};
            }
        }
    }

    :deep(.examples) {
        * {
            transition-property: padding, margin, border, width, height, border-radius, background, transform, opacity, box-shadow;
            transition-duration: var(--transition-duration);
            transition-timing-function: var(--transition-easing);
        }
    }

    &.-modern :deep(.examples) {
        --color--primary: var(--color--purple);
        --color--primary-55: var(--color--purple-55);
        --color--primary-60: var(--color--purple-60);
        --spacing: 1.5rem;
        --padding-top: 1.5rem;
        --padding-bottom: 1.5rem;
        --padding-left: 1.5rem;
        --padding-right: 1.5rem;
        --padding: 1.5rem;
        --margin-top: 1.5rem;
        --margin-bottom: 1.5rem;
        --margin-left: 1.5rem;
        --margin-right: 1.5rem;
        --margin: 1.5rem;
        --border-top-left-radius: 1rem;
        --border-top-right-radius: 1rem;
        --border-bottom-right-radius: 1rem;
        --border-bottom-left-radius: 1rem;
        --border-radius: 1rem;
        --font-size: 1rem;
        --h4--font-size: 1.5rem;
        --h3--font-size: 2rem;
        --h2--font-size: 2.5rem;
        --h1--font-size: 3rem;

        .button.-primary,
        .progress.-light {
            ----box-shadow-color: var(--color--purple);
            ----box-shadow-offset-y: 10px;
        }
    }

    &.-minimalist :deep(.examples) {
        --color--primary: var(--color--gray-90);
        --color--primary-55: var(--color--gray-95);
        --color--primary-60: var(--color--black);
        --spacing: 1rem;
        --padding-top: 1rem;
        --padding-bottom: 1rem;
        --padding-left: 1rem;
        --padding-right: 1rem;
        --padding: 1rem;
        --margin-top: 1rem;
        --margin-bottom: 1rem;
        --margin-left: 1rem;
        --margin-right: 1rem;
        --margin: 1rem;
        --border-top-left-radius: 0;
        --border-top-right-radius: 0;
        --border-bottom-right-radius: 0;
        --border-bottom-left-radius: 0;
        --border-radius: 0;
        --font-size: 0.9rem;
        --h4--font-size: 1.1rem;
        --h3--font-size: 1.25rem;
        --h2--font-size: 1.5rem;
        --h1--font-size: 1.75rem;
        --border-top-width: 2px;
        --border-right-width: 2px;
        --border-bottom-width: 2px;
        --border-left-width: 2px;

        .profile-header img,
        .media img {
            width: 64px;
        }

        .-light .profile-header {
            background: var(--color--gray-10);
        }

        .-dark .profile-header {
            background: var(--color--gray-85);
        }
    }

    background-image:
        radial-gradient(at 40% 20%, hsla(28,100%,74%,0.15) 0, transparent 50%),
        radial-gradient(at 80% 0%, hsla(189,100%,56%,0.15) 0, transparent 50%),
        radial-gradient(at 0% 50%, hsla(355,85%,93%,0.25) 0, transparent 50%),
        radial-gradient(at 80% 50%, hsla(340,100%,76%,0.5) 0, transparent 50%),
        radial-gradient(at 0% 100%, hsla(22,100%,77%,0.5) 0, transparent 50%),
        radial-gradient(at 80% 100%, hsla(var(--color--secondary--h),var(--color--secondary--s),var(--color--secondary--l),1) 0, transparent 50%),
        radial-gradient(at 0% 0%, hsla(var(--color--primary--h),var(--color--primary--s),var(--color--primary--l),1) 0, transparent 50%);

    &.-glassmorphism {
        :deep(.examples) {
            --color--primary: hsla(var(--color--teal--h), var(--color--teal--s), var(--color--teal--l), 0.8);
            --color--primary-55: hsla(var(--color--teal--h), var(--color--teal--s), var(--color--teal--l), 0.85);
            --color--primary-60: hsla(var(--color--teal--h), var(--color--teal--s), var(--color--teal--l), 0.9);
            --color--light: hsla(var(--color--light--h), var(--color--light--s), var(--color--light--l), 0.8);
            --color--light-55: hsla(var(--color--light--h), var(--color--light--s), var(--color--light--l), 0.85);
            --color--light-60: hsla(var(--color--light--h), var(--color--light--s), var(--color--light--l), 0.9);
            --color--dark: hsla(var(--color--dark--h), var(--color--dark--s), var(--color--dark--l), 0.75);
            --color--dark-55: hsla(var(--color--dark--h), var(--color--dark--s), var(--color--dark--l), 0.8);
            --color--dark-60: hsla(var(--color--dark--h), var(--color--dark--s), var(--color--dark--l), 0.85);
            --spacing: 1.25rem;
            --padding-top: 1.25rem;
            --padding-bottom: 1.25rem;
            --padding-left: 1.25rem;
            --padding-right: 1.25rem;
            --padding: 1.25rem;
            --border-top-left-radius: 1rem;
            --border-top-right-radius: 1rem;
            --border-bottom-right-radius: 1rem;
            --border-bottom-left-radius: 1rem;
            --border-radius: 1rem;
            --border-top-width: 1px;
            --border-right-width: 0;
            --border-bottom-width: 0;
            --border-left-width: 1px;
            --text-muted: rgba(255 255 255 / 0.66);

            @include i-card() {
                color: var(--color--white);
                backdrop-filter: blur(50px);
                -webkit-backdrop-filter: blur(50px);

                @include variant('light') {
                    ----border-color: rgba(255 255 255 / 0.18);

                    background: linear-gradient(to bottom right, rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.3));
                }

                @include variant('dark') {
                    ----border-color: rgba(0 0 0 / 0.18);

                    background: linear-gradient(to bottom right, rgba(0 0 0 / 0.15), rgba(0 0 0 / 0.3));
                }

                .card-body {
                    color: var(--color--white);
                    background: transparent;
                }
            }

            @include i-progress() {
                ----border-width: 0;
            }

            @include i-input() {
                ----placeholder--color: rgba(255 255 255 / 0.66);
                ----color: rgba(255 255 255 / 1);

                @include variant('light') {
                    ----background: rgba(255 255 255 / 0.35);
                    ----border-color: rgba(255 255 255 / 0.5);
                }

                @include variant('dark') {
                    ----background: rgba(0 0 0 / 0.35);
                    ----border-color: rgba(0 0 0 / 0.5);
                }
            }
        }
    }
}
</style>
