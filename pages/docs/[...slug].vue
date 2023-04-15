<script lang="ts">
import { defineComponent } from 'vue';
import { definePageMeta } from '#imports';

export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'docs'
        });

        return {};
    }
});
</script>

<template>
    <div id="page">
        <ContentDoc />
    </div>
</template>
