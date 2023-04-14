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
        <AppFooter />
    </main>
</template>

<style lang="scss">
#error-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    .app-error {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    footer {
        margin-top: auto;
    }
}
</style>
