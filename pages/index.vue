<script lang="ts">
import { defineComponent } from 'vue';
import { definePageMeta, useHead, useLocaleHead } from '#imports';

export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'default'
        });

        return {};
    }
});
</script>

<template>
    <NuxtLayout>
        <h1 class="_background:secondary">Hello world!</h1>
    </NuxtLayout>
</template>
