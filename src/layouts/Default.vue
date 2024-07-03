<script lang="ts" setup>
import { useLocaleHead } from '#imports';

useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
});
</script>

<template>
    <main id="default-layout">
        <AppNavbar />
        <slot />
        <AppFooter />
    </main>
</template>
