<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useDesignToken } from '~/composables/useDesignToken';
import { sizeModifierDisplayName } from '~/utils';

const cssVariableSizes = [
    '2xs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '1-2',
    '1-3',
    '1-4',
    '1-5',
    '2-3',
    '3-4',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
];

export default defineComponent({
    props: {
        token: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const token = computed(() => props.token);
        const { isBasicToken, componentName, modifierName, propertyName } = useDesignToken(token);

        const sizeDisplayName = computed(() => sizeModifierDisplayName(modifierName));

        return {
            isBasicToken,
            sizeDisplayName,
            componentName,
            modifierName,
            propertyName
        };
    }
});
</script>

<template>
    <div class="design-token-color-code">
        <pre><code><ExampleDesignTokensLine :token="token" :value="`calc(var(${ isBasicToken ? `--${propertyName}` : `--${componentName}--${propertyName}`}) * ${ sizeDisplayName })`"
        /></code></pre>
    </div>
</template>
