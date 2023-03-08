<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
    props: {
        token: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const isComposedToken = computed(() => {
            return ['--border-width', '--border-style', '--border-color'].includes(props.token);
        });

        const propertyName = computed(() => {
            return props.token.split('-').pop();
        });

        return {
            isComposedToken,
            propertyName
        };
    }
});
</script>

<template>
    <div class="design-token-color-code">
        <pre><code
            v-if="isComposedToken"
        ><ExampleDesignTokensLine :token="`--border-top-${propertyName}`"
        /><ExampleDesignTokensLine :token="`--border-right-${propertyName}`"
        /><ExampleDesignTokensLine :token="`--border-bottom-${propertyName}`"
        /><ExampleDesignTokensLine :token="`--border-left-${propertyName}`"
        /><ExampleDesignTokensLine
            :token="token"
            :value="`
    var(--border-top-${propertyName})
    var(--border-right-${propertyName})
    var(--border-bottom-${propertyName})
    var(--border-left--${propertyName})`"
        /></code><code
            v-else
        ><ExampleDesignTokensLine :token="token" /></code></pre>
    </div>
</template>
