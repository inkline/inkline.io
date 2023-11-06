<script lang="ts">
import { defineComponent, toRef } from 'vue';
import { useManifest } from '~/composables';

export default defineComponent({
    props: {
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
    <ConfigurationManifestEvents v-if="manifest" :manifest="manifest" />
</template>
