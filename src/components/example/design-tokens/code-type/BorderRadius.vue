<script lang="ts">
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
        const { modifierName, propertyName } = useDesignToken(token);

        const sizeDisplayName = computed(() => sizeModifierDisplayName(modifierName));

        const isComposedToken = computed(() => {
            return token.value.startsWith('--border-radius');
        });

        return {
            isComposedToken,
            modifierName,
            sizeDisplayName,
            propertyName
        };
    }
});
</script>

<template>
    <div class="design-token-color-code">
        <pre><code
            v-if="isComposedToken"
><ExampleDesignTokensLine
    :token="`--border-top-left-radius${ modifierName ? `-${modifierName}` : ''}`"
    :value="modifierName ? `calc(var(--border-top-left-radius) * ${sizeDisplayName})` : ''"
/><ExampleDesignTokensLine
    :token="`--border-top-right-radius${ modifierName ? `-${modifierName}` : ''}`"
    :value="modifierName ? `calc(var(--border-top-right-radius) * ${sizeDisplayName})` : ''"
/><ExampleDesignTokensLine
    :token="`--border-bottom-right-radius${ modifierName ? `-${modifierName}` : ''}`"
    :value="modifierName ? `calc(var(--border-bottom-right-radius) * ${sizeDisplayName})` : ''"
/><ExampleDesignTokensLine
    :token="`--border-bottom-left-radius${ modifierName ? `-${modifierName}` : ''}`"
    :value="modifierName ? `calc(var(--border-bottom-left-radius) * ${sizeDisplayName})` : ''"
/><ExampleDesignTokensLine
    :token="token"
    :value="`
    var(--border-top-left-radius${ modifierName ? `-${modifierName}` : ''})
    var(--border-top-right-radius${ modifierName ? `-${modifierName}` : ''})
    var(--border-bottom-right-radius${ modifierName ? `-${modifierName}` : ''})
    var(--border-bottom-left-radius${ modifierName ? `-${modifierName}` : ''})`"
/></code><code
            v-else
        ><ExampleDesignTokensLine :token="token" /></code></pre>
    </div>
</template>
