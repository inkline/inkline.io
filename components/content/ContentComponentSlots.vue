<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
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
        const componentSlots = computed(() => manifest.value?.slots || []);

        const columns = ref<ConfigurationTableColumn[]>([
            { label: 'Slot', key: 'name', type: 'code' },
            { label: '', key: 'description' }
        ]);

        return {
            componentSlots,
            columns
        };
    }
});
</script>

<template>
    <ConfigurationTable :rows="componentSlots" :columns="columns" />
</template>
