<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        token: {
            type: String,
            default: ''
        }
    }
});
</script>

<template>
    <div class="design-token-color-code">
        <pre><code
            v-if="token=== '--box-shadow'"
        ><ExampleDesignTokensLine token="--box-shadow-offset-x"
        /><ExampleDesignTokensLine token="--box-shadow-offset-y"
        /><ExampleDesignTokensLine token="--box-shadow-blur-radius"
        /><ExampleDesignTokensLine token="--box-shadow-spread-radius"
        /><ExampleDesignTokensLine token="--box-shadow-color"
        /><ExampleDesignTokensLine
            :token="token"
            :value="`
    var(--box-shadow-offset-x)
    var(--box-shadow-offset-y)
    var(--box-shadow-blur-radius)
    var(--box-shadow-spread-radius)
    var(--box-shadow-color)`"
        /></code><code
            v-else
        ><ExampleDesignTokensLine :token="token" /></code></pre>
    </div>
</template>
