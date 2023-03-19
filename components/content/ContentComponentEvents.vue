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
        const componentEvents = computed(() => manifest.value?.events || []);

        const columns = ref<ConfigurationTableColumn[]>([
            { label: 'Event', key: 'name', type: 'code' },
            { label: '', key: 'description', type: 'plaintext' }
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
