<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        src: {
            type: String,
            default: ''
        }
    }
});
</script>

<template>
    <iframe :src="`/preview${src}`" />
</template>

<style lang="scss">
iframe {
    width: 100%;
    height: auto;
    min-height: 360px;
}
</style>
