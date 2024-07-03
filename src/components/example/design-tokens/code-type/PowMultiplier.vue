<script lang="ts">
/* eslint-disable vue/html-closing-bracket-newline */
import { computed, defineComponent } from 'vue';
import { useDesignToken } from '~/composables';

export default defineComponent({
    props: {
        token: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const token = computed(() => props.token);
        const { propertyName, modifierName } = useDesignToken(token);

        const mappedPowOperation = computed(() => {
            return {
                '2xs': ['/', '3'],
                xs: ['/', '2'],
                sm: ['/', '1'],
                md: null,
                lg: ['*', '1'],
                xl: ['*', '2'],
                '2xl': ['*', '3']
            }[modifierName.value!];
        });

        return {
            modifierName,
            mappedPowOperation,
            propertyName
        };
    }
});
</script>

<template>
    <div class="design-token-color-code">
        <pre><code><ExampleDesignTokensLine :token="token" :value="mappedPowOperation ? `calc(var(--${propertyName}) ${mappedPowOperation[0]} var(--scale-ratio-pow-${mappedPowOperation[1]}))` : `var(--${propertyName})`"
        /></code></pre>
    </div>
</template>
