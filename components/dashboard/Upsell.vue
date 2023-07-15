<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    async setup() {
        const { t } = useI18n();

        return { t };
    }
});
</script>

<template>
    <IRow>
        <IColumn lg="4" xl="3" class="_margin-bottom:1">
            <PricingTablesOpenSource>
                <template #footer>
                    <IButton id="current-plan-button" block>
                        {{ t('pages.pricing.table.current') }}
                    </IButton>
                </template>
            </PricingTablesOpenSource>
        </IColumn>
        <IColumn lg="8" xl="9" class="_margin-bottom:1">
            <ICard class="_height:100%">
                <DashboardUpsellMessage />
            </ICard>
        </IColumn>
    </IRow>
</template>

<style lang="scss">
#current-plan-button {
    pointer-events: none;
}
</style>
