<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();

        return {
            t
        };
    }
});
</script>

<template>
    <SectionsComponentsSection class="sponsors-section" fluid>
        <IContainer>
            <IRow>
                <IColumn class="_text:center" lg="8" offset-lg="2">
                    <SectionsComponentsHeader>
                        <template #title>
                            {{ t('pages.index.subscribePro.title') }}
                        </template>
                        <template #description>
                            {{ t('pages.index.subscribePro.description') }}
                        </template>
                    </SectionsComponentsHeader>
                </IColumn>
            </IRow>
        </IContainer>
        <SectionsComponentsRoadmapTimeline class="_margin-top:2" />
        <IContainer>
            <IRow class="_margin-top:4">
                <IColumn lg="6" offset-lg="3">
                    <FormsNewsletterForm />
                </IColumn>
            </IRow>
        </IContainer>
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
