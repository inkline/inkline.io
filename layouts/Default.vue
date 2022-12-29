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
    <main id="default-layout">
        <AppNavbar />g
        <slot />
    </main>
</template>
