<script lang="ts">
import { defineComponent, toRef } from 'vue';
import type { PropType } from 'vue';
import { useManifest } from '~/composables';
import type { ComponentManifestProp } from '@inkline/inkline';

export default defineComponent({
    props: {
        additionalProps: {
            type: Array as PropType<ComponentManifestProp[]>,
            default: () => []
        },
        component: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const componentName = toRef(props, 'component');
        const { manifest } = useManifest(componentName);

        return {
            manifest
        };
    }
});
</script>

<template>
    <ConfigurationManifestProps
        v-if="manifest"
        :manifest="manifest"
        :additional-props="additionalProps"
    />
</template>
