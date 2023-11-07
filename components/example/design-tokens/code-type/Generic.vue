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
    <div class="design-token-generic-code">
        <pre><code><ExampleDesignTokensLine :token="token" /></code></pre>
    </div>
</template>
