<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
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
