<script lang="ts">
import DesignSystem1 from './embed/design-system-1.md';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    components: {
        DesignSystem1
    },
    setup() {
        const { t } = useI18n();

        return {
            t
        };
    }
});
</script>

<template>
    <i-header>
        <i-row>
            <i-column class="_text:center" lg="8" offset-lg="2">
                <section-header>
                    <template #title>
                        {{ t('index.designSystem.title') }}
                    </template>
                    <template #description>
                        {{ t('index.designSystem.description') }}
                    </template>
                </section-header>
                <i-tabs>
                    <i-tab>
                        <design-system-1></design-system-1>
                    </i-tab>
                    <i-tab>
                        <design-system-1></design-system-1>
                    </i-tab>
                </i-tabs>
            </i-column>
        </i-row>
    </i-header>
</template>

<style lang="scss" scoped>
@import "@inkline/inkline/css/variables";
@import "@inkline/inkline/css/mixins";

@include i-header() {
    @include variant('light') {
        background: white;
    }
}
</style>
