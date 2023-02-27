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
        <AppNavbar />
        <slot />
        <IToastContainer />
    </main>
</template>

<style lang="scss">
#default-layout {
    .app-navbar {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
    }
}
</style>
