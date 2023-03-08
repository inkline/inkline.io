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
        <pre><code><ExampleDesignTokensLine :token="`${token}-h`"
        /><ExampleDesignTokensLine :token="`${token}-s`"
        /><ExampleDesignTokensLine :token="`${token}-l`"
        /><ExampleDesignTokensLine :token="`${token}-a`"
        /><ExampleDesignTokensLine
            :token="token"
            :value="`hsla(
    var(${token}-h),
    var(${token}-s),
    var(${token}-l),
    var(${token}-a)
)`"
        /></code></pre>
    </div>
</template>
