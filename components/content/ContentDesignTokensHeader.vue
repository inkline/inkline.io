<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    setup() {
        const { t } = useI18n();

        return { t };
    }
});
</script>

<template>
    <IRow class="design-tokens-header">
        <IColumn md="8"> {{ t('common.description') }} </IColumn>
        <IColumn md="4" class="_text:right"> {{ t('common.token') }} </IColumn>
    </IRow>
</template>

<style lang="scss">
.design-tokens-header {
    margin-top: var(--margin-top-2);
    margin-left: 0;
    margin-right: 0;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    background: var(--color-gray-100);
    color: var(--text-color-weak);

    .dark-theme & {
        background: var(--color-gray-900);
    }

    .column {
        padding-top: var(--padding-top-1-2);
        padding-bottom: var(--padding-bottom-1-2);
    }
}
</style>
