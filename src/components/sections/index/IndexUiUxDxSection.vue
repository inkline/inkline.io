<script lang="ts">
import UIIcon from '~/assets/images/features/icon-ui.svg';
import UXIcon from '~/assets/images/features/icon-ux.svg';
import DXIcon from '~/assets/images/features/icon-dx.svg';
import ModularIcon from '~/assets/images/features/icon-modular.svg';
import CustomizableIcon from '~/assets/images/features/icon-customizable.svg';

import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();

        return {
            t,
            UIIcon,
            UXIcon,
            DXIcon,
            ModularIcon,
            CustomizableIcon
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
                        {{ t('index.uiuxdx.title') }}
                    </template>
                    <template #description>
                        {{ t('index.uiuxdx.description') }}
                    </template>
                </section-header>
            </i-column>
        </i-row>
        <i-row class="_margin-top:4">
            <i-column md="6" lg="4">
                <FeatureBox
                    :image="UIIcon"
                    :title="t('index.features.ui.title')"
                    :description="t('index.features.ui.description')"
                />
            </i-column>
            <i-column md="6" lg="4">
                <FeatureBox
                    :image="UXIcon"
                    :title="t('index.features.ux.title')"
                    :description="t('index.features.ux.description')"
                />
            </i-column>
            <i-column md="6" lg="4">
                <FeatureBox
                    :image="DXIcon"
                    :title="t('index.features.dx.title')"
                    :description="t('index.features.dx.description')"
                />
            </i-column>
            <i-column md="6" offset-lg="2" lg="4">
                <FeatureBox
                    :image="ModularIcon"
                    :title="t('index.features.accessible.title')"
                    :description="t('index.features.accessible.description')"
                />
            </i-column>
            <i-column md="6" offset-md="3" lg="4" offset-lg="0">
                <FeatureBox
                    :image="CustomizableIcon"
                    :title="t('index.features.customizable.title')"
                    :description="t('index.features.customizable.description')"
                />
            </i-column>
        </i-row>
    </i-header>
</template>

<style lang="scss" scoped>
@import "~@inkline/inkline/css/variables";
@import "~@inkline/inkline/css/mixins";

@include i-header() {
    @include variant('light') {
        background: white;
    }

    .feature-box {
        padding: 1rem 0;
    }
}
</style>
