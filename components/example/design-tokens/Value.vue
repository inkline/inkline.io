<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    props: {
        token: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const cssVariable = ref('');

        const tokenParts = computed(() => {
            return props.token.split('--').splice(1);
        });

        onMounted(() => {
            cssVariable.value = getComputedStyle(document.documentElement).getPropertyValue(
                props.token
            );
        });

        const resolvedCssVariable = computed(() => {
            if (
                cssVariable.value.startsWith('hsla') &&
                (tokenParts.value[1]?.includes('color') || tokenParts.value[0]?.includes('color'))
            ) {
                return cssVariable.value.replace(/(\d+)\.\d+/g, '$1');
            }

            return cssVariable.value;
        });

        return {
            resolvedCssVariable
        };
    }
});
</script>

<template>
    <span class="design-token-color-value" v-show="resolvedCssVariable">{{
        resolvedCssVariable
    }}</span>
</template>
