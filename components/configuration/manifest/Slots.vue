<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import type { ConfigurationTableColumn } from '~/types';
import type { PropType } from 'vue';
import type { ComponentManifest } from '@inkline/inkline';

export default defineComponent({
    props: {
        manifest: {
            type: Object as PropType<ComponentManifest>,
            required: true
        }
    },
    setup(props) {
        const componentSlots = computed(() => props.manifest.slots || []);

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
