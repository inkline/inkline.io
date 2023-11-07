<script lang="ts">
/* eslint-disable vue/html-closing-bracket-newline */
import { computed, defineComponent } from 'vue';
import { useDesignToken } from '~/composables/useDesignToken';
import { sizeModifierDisplayName } from '~/utils';

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
        <pre><code
        ><ExampleDesignTokensLine
            :token="token"
            :value="`calc(var(${ isBasicToken ? `--${propertyName}` : `--${componentName}--${propertyName}`}) * ${ sizeDisplayName })`"
        /></code></pre>
    </div>
</template>
