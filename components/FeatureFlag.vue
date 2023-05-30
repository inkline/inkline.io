<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useFeatureFlag } from '~/composables';

export default defineComponent({
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const { isEnabled } = useFeatureFlag(props.name);

        return {
            isEnabled
        };
    }
});
</script>

<template>
    <slot v-if="isEnabled" />
    <slot name="fallback" v-else />
</template>
