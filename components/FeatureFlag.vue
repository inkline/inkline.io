<script lang="ts">
import { useAppConfig } from '#imports';
import { defineComponent, computed } from 'vue';

export default defineComponent({
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const app = useAppConfig();
        const enabled = computed(() => (app.features as Record<string, boolean>)[props.name]);

        return {
            enabled
        };
    }
});
</script>

<template>
    <slot v-if="enabled" />
    <slot name="fallback" v-else />
</template>
