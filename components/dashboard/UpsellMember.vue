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
    <IRow class="upsell-member">
        <IColumn class="_margin-bottom:1">
            <ICard class="_height:100%">
                <DashboardUpsellMessage context="member" />
            </ICard>
        </IColumn>
    </IRow>
</template>

<style lang="scss">
.upsell-member {
    .card {
        min-height: 400px;
    }
}

#current-plan-button {
    pointer-events: none;
}
</style>
