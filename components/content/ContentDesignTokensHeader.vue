<template>
    <IRow class="design-tokens-header">
        <IColumn md="4"> Example </IColumn>
        <IColumn md="4"> Description </IColumn>
        <IColumn md="4"> Token </IColumn>
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
    color: var(--text--color-weak);

    .column {
        padding: var(--padding-top-1-2) var(--padding-right) var(--padding-bottom-1-2)
            var(--padding-left);
    }
}
</style>
