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
        <AppFooter />
    </main>
</template>

<style lang="scss">
#default-layout {
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    background-image: radial-gradient(at 36% 0%, hsla(246, 100%, 74%, 0.15) 0px, transparent 50%),
        radial-gradient(at 99% 13%, hsla(22, 100%, 56%, 0.15) 0px, transparent 50%),
        radial-gradient(at 63% 58%, hsla(240, 0%, 50%, 0.15) 0px, transparent 50%),
        radial-gradient(at 0% 0%, hsla(21, 0%, 100%, 0.15) 0px, transparent 50%);
}
</style>
