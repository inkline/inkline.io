<script lang="ts">
import { RenderFunction, DefineComponent, defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        component: {
            type: [Function, Object] as PropType<RenderFunction | DefineComponent>,
            required: true
        }
    }
});
</script>

<template>
    <div class="content-preview">
        <component :is="component" />
    </div>
</template>

<style lang="scss">
@import '@inkline/inkline/css/global/preview';
@import '@inkline/inkline/components/IAlert/css/preview';
@import '@inkline/inkline/components/IBadge/css/preview';
@import '@inkline/inkline/components/IButton/css/preview';
@import '@inkline/inkline/components/IButtonGroup/css/preview';
@import '@inkline/inkline/components/ICard/css/preview';
@import '@inkline/inkline/components/ICard/css/preview';
@import '@inkline/inkline/components/IContainer/css/preview';
@import '@inkline/inkline/components/ICollapsible/css/preview';
@import '@inkline/inkline/components/IDropdown/css/preview';
@import '@inkline/inkline/components/IHamburgerMenu/css/preview';
@import '@inkline/inkline/components/IHeader/css/preview';
@import '@inkline/inkline/components/IInput/css/preview';
@import '@inkline/inkline/components/ILayout/css/preview';
@import '@inkline/inkline/components/IListGroup/css/preview';
@import '@inkline/inkline/components/INav/css/preview';
@import '@inkline/inkline/components/INavbar/css/preview';
@import '@inkline/inkline/components/IPagination/css/preview';
@import '@inkline/inkline/components/IPopover/css/preview';
@import '@inkline/inkline/components/IProgress/css/preview';
@import '@inkline/inkline/components/ISelect/css/preview';
@import '@inkline/inkline/components/ISidebar/css/preview';
@import '@inkline/inkline/components/ITable/css/preview';
@import '@inkline/inkline/components/ITabs/css/preview';
@import '@inkline/inkline/components/IToast/css/preview';
@import '@inkline/inkline/components/ITooltip/css/preview';
@import '@inkline/inkline/css/preview';

.content-preview {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @extend %alert-preview;
    @extend %badge-preview;
    @extend %button-preview;
    @extend %button-group-preview;
    @extend %card-preview;
    @extend %collapsible-preview;
    @extend %dropdown-preview;
    @extend %hamburger-menu-preview;
    @extend %header-preview;
    @extend %grid-preview;
    @extend %input-preview;
    @extend %layout-preview;
    @extend %list-group-preview;
    @extend %nav-preview;
    @extend %navbar-preview;
    @extend %pagination-preview;
    @extend %popover-preview;
    @extend %progress-preview;
    @extend %select-preview;
    @extend %tooltip-preview;
    @extend %sidebar-preview;
    @extend %table-preview;
    @extend %tabs-preview;
    @extend %toast-preview;

    @extend %layout-local-preview;

    @extend %border-utilities-preview;
    @extend %color-utilities-preview;
    @extend %flex-utilities-preview;
    @extend %spacing-utilities-preview;
    @extend %sizing-utilities-preview;
}
</style>
