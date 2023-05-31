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
    <IContainer class="app-error">
        <IRow>
            <IColumn>
                <NuxtImg class="image -fluid" src="/images/illustrations/404.svg" alt="Error 404" />
                <p class="_text:weakest">
                    {{ t('errors.404.name') }}
                </p>
                <h1 class="d5 _margin-top:1/2">
                    {{ t('errors.404.title') }}
                </h1>
                <p class="_font-size:lg">
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
