<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { clearError } from '#imports';

export default defineComponent({
    setup() {
        const { t } = useI18n();

        function handleError() {
            clearError({ redirect: '/' });
        }

        return {
            handleError,
            t
        };
    }
});
</script>

<template>
    <IContainer class="app-error">
        <IRow>
            <IColumn>
                <NuxtImg class="image -fluid" src="/images/illustrations/404.svg" alt="Error 404" />
                <h1 class="d5 _margin-top:1/2">
                    {{ t('errors.404.title') }}
                </h1>
                <p class="_font-size:lg">
                    {{ t('errors.404.description') }}
                </p>
                <a
                    class="_font-size:lg _display:inline-flex _align-items:center _justify-content:center _cursor:pointer"
                    @click="handleError"
                >
                    <Icon name="la:arrow-left" class="_margin-right:1/2" />
                    {{ t('errors.404.button') }}
                </a>
            </IColumn>
        </IRow>
    </IContainer>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.app-error {
    text-align: center;

    .column {
        padding-top: var(--padding-top-2);
        padding-bottom: var(--padding-bottom-2);
    }

    img {
        max-width: 480px;
        margin-bottom: var(--margin-bottom-4);
    }
}
</style>
