<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { definePageMeta } from '#imports';

export default defineComponent({
    async setup() {
        const { t } = useI18n();

        definePageMeta({
            layout: 'dashboard',
            middleware: 'authenticated'
        });

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
                <div id="upsell-message" class="_height:100%">
                    <NuxtImg
                        height="80"
                        width="80"
                        src="/images/icons/icon-lock.svg"
                        alt="Upgrade to Inkline Pro"
                        class="_margin-bottom:2"
                    />
                    <h2>
                        {{ t('pages.dashboard.upsell.title') }}
                    </h2>
                    <p>
                        {{ t('pages.dashboard.upsell.description') }}
                    </p>
                    <IButton to="/pricing" size="lg" color="primary" class="_margin-top:1">
                        {{ t('pages.dashboard.upsell.button') }}
                    </IButton>
                </div>
            </ICard>
        </IColumn>
    </IRow>
</template>

<style lang="scss">
#current-plan-button {
    pointer-events: none;
}

#upsell-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}
</style>
