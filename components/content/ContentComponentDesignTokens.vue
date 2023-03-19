<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useManifest } from '~/composables';
import { cssVariableDisplayValue } from '~/utils';
import { ConfigurationTableColumn } from '~/types';

export default defineComponent({
    props: {
        component: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const componentName = computed(() => props.component);
        const { manifest } = useManifest(componentName);
        const cssVariables = computed(() => manifest.value?.css?.variables || []);

        const columns = ref<ConfigurationTableColumn[]>([
            { label: 'Token', key: 'name', type: 'code', width: 4 },
            {
                label: 'Value',
                key: 'value',
                type: 'code',
                width: 8,
                render: (row) => cssVariableDisplayValue(row.value)
            }
        ]);

        return {
            cssVariables,
            columns
        };
    }
});
</script>

<template>
    <ConfigurationTable :rows="cssVariables" :columns="columns" />
</template>
