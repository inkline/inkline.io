<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';
import { clearError, definePageMeta } from '#imports';

export default defineComponent({
    setup() {
        const { t } = useI18n();

        definePageMeta({
            layout: 'error'
        });

        useHead({
            title: 'Error 404 - Inkline',
            meta: [
                {
                    name: 'description',
                    content:
                        'Inkline is the intuitive UI UX DX Components library that gives you the foundation for building high-quality, accessible, and customizable Vue.js Design Systems.'
                }
            ]
        });

        function handleError() {
            clearError({ redirect: '/' });
        }

        return {
            t
        };
    }
});
</script>

<template>
    <IContainer id="error-page">
        <IRow>
            <IColumn>
                <NuxtImg class="image -fluid" src="/images/illustrations/404.svg" alt="Error 404" />
                <h1 class="d5 _margin-top:1/2">
                    {{ t('errors.404.title') }}
                </h1>
                <p class="_font-size:lg">
                    <strong class="_text:muted _margin-right:1/2">
                        {{ t('errors.404.name') }}
                    </strong>
                    {{ t('errors.404.description') }}
                </p>
                <NuxtLink
                    to="/"
                    class="_font-size:lg _display:inline-flex _align-items:center _justify-content:center"
                >
                    <Icon name="la:arrow-left" class="_margin-right:1/2" />
                    {{ t('errors.404.button') }}
                </NuxtLink>
            </IColumn>
        </IRow>
    </IContainer>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

#error-page {
    margin-top: auto;
    text-align: center;
    img {
        max-width: 480px;
        margin-bottom: var(--margin-bottom-4);
    }
}
</style>
