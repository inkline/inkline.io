<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent } from 'vue';
import image404 from '~/assets/images/illustrations/404.svg';

export default defineComponent({
    setup () {
        const { t } = useI18n();

        return {
            t,
            image404
        };
    }
});
</script>

<template>
    <i-container>
        <i-row>
            <i-column>
                <img class="image -fluid" :src="image404" alt="Error 404">
                <h1 class="d5 _margin-top:1/2">
                    {{ t('errors.404.title') }}
                </h1>
                <p class="_font-size:lg">
                    <strong class="_text:muted _margin-right:1/2">
                        {{ t('errors.404.name') }}
                    </strong>
                    {{ t('errors.404.description') }}
                </p>
                <router-link to="/" class="_font-size:lg">
                    {{ t('errors.404.button') }}
                </router-link>
            </i-column>
        </i-row>
    </i-container>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.container {
    margin-top: auto;
    text-align: center;

    img {
        max-width: 480px;
        margin-bottom: spacing('4');
    }
}
</style>

<route lang="yaml">
meta:
    layout: error
</route>
