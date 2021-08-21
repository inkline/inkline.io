<template>
    <div class="section-header">
        <h2 class="title d5">
            <slot name="title" />
        </h2>
        <p class="description lead">
            <slot name="description" />
        </p>
    </div>
</template>

<style lang="scss">
.section-header {}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
