<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
    <slot name="name" />
    <IRow class="configuration-property">
        <IColumn>
            <ul>
                <li class="configuration-property-type">
                    <strong>Type</strong>: <slot name="type" />
                </li>
                <li class="configuration-property-value">
                    <strong>Default</strong>: <slot name="value" />
                </li>
                <li>
                    <strong>Description</strong>:
                    <slot />
                </li>
            </ul>
        </IColumn>
    </IRow>
</template>

<style lang="scss">
.configuration-property {
    margin-left: 0;
    margin-right: 0;

    .column {
        padding: 0;
        position: relative;

        .configuration-property-type,
        .configuration-property-value {
            > * {
                display: inline;
            }
        }
    }
}
</style>
