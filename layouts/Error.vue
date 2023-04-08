<script lang="ts">
import { defineComponent } from 'vue';
import { useHead, useLocaleHead } from '#imports';

export default defineComponent({
    setup() {
        useHead(
            useLocaleHead({
                addDirAttribute: true,
                identifierAttribute: 'id',
                addSeoAttributes: true
            })
        );

        return {};
    }
});
</script>

<template>
    <main id="error-layout">
        <AppNavbar />
        <slot />
    </main>
</template>

<style lang="scss">
#error-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    footer {
        margin-top: auto;
    }
}
</style>
