<script lang="ts">
import { ref, computed, defineComponent } from 'vue';
import { useManifest } from '~/composables';
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
        const componentProps = computed(() => manifest.value?.props || []);

        const columns = ref<ConfigurationTableColumn[]>([
            { label: 'Property', key: 'name', type: 'code', width: 4 },
            { label: 'Type', key: 'type', type: 'code', width: 4 },
            { label: 'Default', key: 'default', type: 'code', width: 4 },
            { label: '', key: 'description' }
        ]);

        return {
            componentProps,
            columns
        };
    }
});
</script>

<template>
    <ConfigurationTable :rows="componentProps" :columns="columns" />
</template>
