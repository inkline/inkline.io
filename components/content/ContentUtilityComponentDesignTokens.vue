<script lang="ts">
import { defineComponent, toRef } from 'vue';
import { useUtilsManifest } from '~/composables';

export default defineComponent({
    props: {
        component: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const componentName = toRef(props, 'component');
        const { manifest } = useUtilsManifest(componentName);

        return {
            manifest
        };
    }
});
</script>

<template>
    <ConfigurationManifestDesignTokens v-if="manifest" :manifest="manifest" />
</template>
