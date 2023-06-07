<script lang="ts">
import { useHead, useSeoMeta } from '#imports';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        useSeoMeta({});

        return {};
    }
});
</script>
<template>
    <main>
        <NuxtLoadingIndicator color="var(--color-primary)" :height="3" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <IToastContainer />
    </main>
</template>
