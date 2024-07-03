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
        const spacingToken = computed(() => {
            return ['margin', 'padding'].find((key) => token.value.includes(key));
        });
        const { modifierName, propertyName } = useDesignToken(token);

        const sizeDisplayName = computed(() => sizeModifierDisplayName(modifierName));

        const isComposedToken = computed(() => {
            return ['margin', 'padding'].includes(propertyName.value);
        });

        return {
            isComposedToken,
            modifierName,
            sizeDisplayName,
            propertyName,
            spacingToken
        };
    }
});
</script>

<template>
    <div class="design-token-color-code">
        <pre v-if="isComposedToken"><code
><ExampleDesignTokensLine
    :token="`--${spacingToken}-top${ modifierName ? `-${modifierName}` : ''}`"
    :value="modifierName ? `calc(var(--${spacingToken}-top) * ${sizeDisplayName})` : ''"
/>
<ExampleDesignTokensLine
    :token="`--${spacingToken}-right${ modifierName ? `-${modifierName}` : ''}`"
    :value="modifierName ? `calc(var(--${spacingToken}-right) * ${sizeDisplayName})` : ''"
/>
<ExampleDesignTokensLine
    :token="`--${spacingToken}-bottom${ modifierName ? `-${modifierName}` : ''}`"
    :value="modifierName ? `calc(var(--${spacingToken}-bottom) * ${sizeDisplayName})` : ''"
/>
<ExampleDesignTokensLine
    :token="`--${spacingToken}-left${ modifierName ? `-${modifierName}` : ''}`"
    :value="modifierName ? `calc(var(--${spacingToken}-left) * ${sizeDisplayName})` : ''"
/>
<ExampleDesignTokensLine
    :token="token"
    :value="`
    var(--${spacingToken}-top${ modifierName ? `-${modifierName}` : ''})
    var(--${spacingToken}-right${ modifierName ? `-${modifierName}` : ''})
    var(--${spacingToken}-bottom${ modifierName ? `-${modifierName}` : ''})
    var(--${spacingToken}-left${ modifierName ? `-${modifierName}` : ''})`"
/></code></pre>
        <ExampleDesignTokensCodeTypeSizeMultiplier v-else-if="modifierName" :token="token" />
        <pre v-else><code><ExampleDesignTokensLine :token="token" /></code></pre>
    </div>
</template>
