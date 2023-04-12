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
    <IHeader class="ui-ux-dx-section">
        <IRow>
            <IColumn class="_text:center" lg="8" offset-lg="2">
                <SectionsComponentsHeader>
                    <template #title>
                        {{ t('pages.index.uiuxdx.title') }}
                    </template>
                    <template #description>
                        {{ t('pages.index.uiuxdx.description') }}
                    </template>
                </SectionsComponentsHeader>
            </IColumn>
        </IRow>
        <IRow class="_margin-top:4">
            <IColumn md="6" lg="4">
                <SectionsComponentsFeature
                    :image="UIIcon"
                    :title="t('pages.index.features.ui.title')"
                    :description="t('pages.index.features.ui.description')"
                />
            </IColumn>
            <IColumn md="6" lg="4">
                <SectionsComponentsFeature
                    :image="UXIcon"
                    :title="t('pages.index.features.ux.title')"
                    :description="t('pages.index.features.ux.description')"
                />
            </IColumn>
            <IColumn md="6" lg="4">
                <SectionsComponentsFeature
                    :image="DXIcon"
                    :title="t('pages.index.features.dx.title')"
                    :description="t('pages.index.features.dx.description')"
                />
            </IColumn>
            <IColumn md="6" offset-lg="2" lg="4">
                <SectionsComponentsFeature
                    :image="ModularIcon"
                    :title="t('pages.index.features.accessible.title')"
                    :description="t('pages.index.features.accessible.description')"
                />
            </IColumn>
            <IColumn md="6" offset-md="3" lg="4" offset-lg="0">
                <SectionsComponentsFeature
                    :image="CustomizableIcon"
                    :title="t('pages.index.features.customizable.title')"
                    :description="t('pages.index.features.customizable.description')"
                />
            </IColumn>
        </IRow>
    </IHeader>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.ui-ux-dx-section {
    background: transparent;
    padding-top: var(--section--padding-top);
    padding-bottom: var(--section--padding-bottom);
    border-top: var(--border-top-width) var(--border-top-style) var(--border-top-color);

    .section-feature {
        padding: var(--padding-top) 0 var(--padding-bottom) 0;
    }
}
</style>
