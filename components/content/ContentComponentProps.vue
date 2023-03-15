<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useManifest } from '~/composables';

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

        return {
            manifest
        };
    }
});
</script>

<template>
    <div>
        <span v-if="manifest">
            {{ manifest }}
        </span>
    </div>
</template>
