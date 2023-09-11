<script lang="ts">
import { ref, computed, defineComponent } from 'vue';
import { useManifest } from '~/composables';
import { ConfigurationTableColumn } from '~/types';

export default defineComponent({
    props: {
        component: {
            type: String,
            required: true
        },
        additionalProps: {
            type: Array,
            default: () => []
        }
    },
    setup(props) {
        const componentName = computed(() => props.component);
        const { manifest } = useManifest(componentName);
        const componentProps = computed(() => manifest.value?.props || []);

        const columns = ref<ConfigurationTableColumn[]>([
            { label: 'Property', key: 'name', type: 'code', width: 4 },
            { label: 'Type', key: 'type', type: 'code', width: 4 },
            { label: 'Default', key: 'default', type: 'code', width: 4 },
            { label: '', key: 'description' }
        ]);

        const resolvedComponentProps = computed(() =>
            [...props.additionalProps, ...componentProps.value].sort((a, b) =>
                a.name.localeCompare(b.name)
            )
        );

        return {
            componentProps,
            resolvedComponentProps,
            columns
        };
    }
});
</script>

<template>
    <ConfigurationTable :rows="resolvedComponentProps" :columns="columns" />
</template>
