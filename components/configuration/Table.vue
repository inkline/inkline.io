<script lang="ts">
import { computed, defineComponent, PropType, VNode } from 'vue';
import { ConfigurationTableColumn } from '~/types';

export default defineComponent({
    props: {
        columns: {
            type: Array as PropType<ConfigurationTableColumn[]>,
            default: () => []
        },
        rows: {
            type: Array as PropType<Record<string, any>[]>,
            default: () => []
        }
    },
    setup(props) {
        function renderTdValue(row: Record<string, any>, column: ConfigurationTableColumn) {
            const value = row[column.key];

            if (column.render) {
                return column.render(row, column);
            } else if (typeof value === 'string') {
                return value;
            } else if (typeof value === 'boolean') {
                return value ? 'true' : 'false';
            } else if (typeof value === 'number') {
                return value;
            } else if (Array.isArray(value)) {
                return value.join(', ');
            } else if (typeof value === 'object') {
                return JSON.stringify(value);
            }

            return value;
        }

        const prerenderedTdValues = computed(() => {
            const prerendered: Record<string, Record<string, string | VNode>> = {};

            props.rows.forEach((row) => {
                prerendered[row.name] = {};
                props.columns.forEach((column) => {
                    prerendered[row.name][column.key] = renderTdValue(row, column);
                });
            });

            return prerendered;
        });

        const tdVisibleValues = computed(() => {
            const visible: Record<string, Record<string, boolean>> = {};

            props.rows.forEach((row) => {
                visible[row.name] = {};
                props.columns.forEach((column) => {
                    visible[row.name][column.key] = column.visible
                        ? column.visible(row, column)
                        : true;
                });
            });

            return visible;
        });

        return {
            prerenderedTdValues,
            tdVisibleValues
        };
    }
});
</script>

<template>
    <ul class="configuration-table">
        <IRow v-for="row in rows" :key="row.name" class="tr">
            <template v-for="column in columns">
                <IColumn
                    v-if="tdVisibleValues[row.name][column.key]"
                    :key="column.key"
                    :md="column.width || 12"
                    class="td"
                >
                    <div v-if="column.label" class="label">{{ column.label }}</div>
                    <code v-if="column.type === 'code'">{{
                        prerenderedTdValues[row.name][column.key]
                    }}</code>
                    <component
                        v-else-if="typeof prerenderedTdValues[row.name][column.key] === 'object'"
                        :is="prerenderedTdValues[row.name][column.key]"
                    />
                    <span v-else>{{ prerenderedTdValues[row.name][column.key] }}</span>
                </IColumn>
            </template>
        </IRow>
    </ul>
</template>

<style lang="scss">
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.configuration-table {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top-width: var(--border-top-width);
    border-bottom-width: var(--border-bottom-width);
    border-top-style: var(--border-top-style);
    border-bottom-style: var(--border-bottom-style);
    border-top-color: var(--border-top-color);
    border-bottom-color: var(--border-bottom-color);
    transition-property: border;
    transition-timing-function: var(--transition-timing-function);
    transition-duration: var(--transition-duration);

    .tr {
        margin: 0;
        padding-top: var(--padding-top);
        padding-bottom: var(--padding-bottom);
        border-bottom: var(--border-bottom-width) var(--border-bottom-style)
            var(--border-bottom-color);
        transition-property: border;
        transition-timing-function: var(--transition-timing-function);
        transition-duration: var(--transition-duration);

        &:last-child {
            border-bottom: 0;
        }

        .td {
            margin-bottom: var(--margin-bottom-1-2);

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .label {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-semibold);
        color: var(--text-color-weaker);
    }
}
</style>
