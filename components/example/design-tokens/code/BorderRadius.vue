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
            v-if="token=== '--border-radius'"
        ><ExampleDesignTokensLine token="--border-top-left-radius"
        /><ExampleDesignTokensLine token="--border-top-right-radius"
        /><ExampleDesignTokensLine token="--border-bottom-right-radius"
        /><ExampleDesignTokensLine token="--border-bottom-left-radius"
        /><ExampleDesignTokensLine
            :token="token"
            :value="`
    var(--border-top-left-radius)
    var(--border-top-right-radius)
    var(--border-bottom-right-radius)
    var(--border-bottom-left-radius)`"
        /></code><code
            v-else
        ><ExampleDesignTokensLine :token="token" /></code></pre>
    </div>
</template>
