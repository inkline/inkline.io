<script lang="ts">
/* eslint-disable vue/html-closing-bracket-newline, vue/html-indent */
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        token: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        }
    }
});
</script>

<template>
    <span class="color-design-token-line line"
        ><span class="shiki-token-keyword">{{ token }}</span
        >: <span v-if="value">{{ value }}</span
        ><ExampleDesignTokensValue v-else class="shiki-token-text" :token="token" />;</span
    >
</template>

<style lang="scss">
.color-design-token-line {
    .shiki-token-keyword {
        color: var(--shiki-token-keyword);
    }

    .shiki-token-text {
        color: var(--shiki-token-text);
    }
}
</style>
