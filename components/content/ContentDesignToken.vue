<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        type: {
            type: String,
            default: ''
        },
        token: {
            type: String,
            default: ''
        }
    }
});
</script>

<template>
    <IRow class="design-token">
        <IColumn>
            <div></div>
        </IColumn>
        <IColumn>
            <slot />
        </IColumn>
        <IColumn>
            <ITooltip class="copy-to-clipboard">
                <IButton size="sm">
                    <Icon size="16" name="material-symbols:content-copy-outline" />
                </IButton>
                <template #body>
                    <span>Copy to clipboard</span>
                </template>
            </ITooltip>
            <IInput readonly :model-value="`var(${token})`" />
        </IColumn>
    </IRow>
</template>

<style lang="scss">
.design-token {
    margin-left: 0;
    margin-right: 0;

    .column {
        padding: var(--padding-top) var(--padding-right) var(--padding-bottom) var(--padding-left);
        position: relative;
    }

    .input-wrapper {
        --input--light--disabled--background: var(--color-gray-50);
    }

    .copy-to-clipboard {
        position: absolute;
        right: calc(var(--margin-right) + 6px);
        top: calc(var(--margin-top) + 6px);
        z-index: 1;
    }
}
</style>
