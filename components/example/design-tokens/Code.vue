<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        type: {
            type: String,
            default: ''
        },
        token: {
            type: String,
            default: ''
        }
    }
});
</script>
<template>
    <ExampleDesignTokensCodeTypeColor v-if="type === 'color'" :token="token" />
    <ExampleDesignTokensCodeTypeBorderRadius v-else-if="type === 'border-radius'" :token="token" />
    <ExampleDesignTokensCodeTypeBorder v-else-if="type === 'border'" :token="token" />
    <ExampleDesignTokensCodeTypeBoxShadow v-else-if="type === 'box-shadow'" :token="token" />
    <ExampleDesignTokensCodeTypeSpacing v-else-if="type === 'spacing'" :token="token" />
    <ExampleDesignTokensCodeTypeSizeMultiplier
        v-else-if="type === 'size-multiplier'"
        :token="token"
    />
    <ExampleDesignTokensCodeTypePowMultiplier
        v-else-if="type === 'pow-multiplier'"
        :token="token"
    />
    <ExampleDesignTokensCodeTypeGeneric v-else :token="token" />
</template>
