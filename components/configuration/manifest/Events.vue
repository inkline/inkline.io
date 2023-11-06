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
        const componentEvents = computed(() => props.manifest.events || []);

        const columns = ref<ConfigurationTableColumn[]>([
            { label: 'Event', key: 'name', type: 'code' },
            { label: '', key: 'description' }
        ]);

        return {
            componentEvents,
            columns
        };
    }
});
</script>

<template>
    <ConfigurationTable :rows="componentEvents" :columns="columns" />
</template>
