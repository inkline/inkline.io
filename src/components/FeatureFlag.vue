<script lang="ts">
import { defineComponent } from 'vue';

/**
 * Not yet implemented
 */

export default defineComponent({
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    setup() {
        const enabled = false;

        return {
            enabled
        };
    }
});
</script>

<template>
    <slot v-if="enabled" />
    <slot v-else name="fallback" />
</template>
