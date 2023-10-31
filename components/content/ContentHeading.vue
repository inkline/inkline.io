<script lang="ts" setup>
defineProps({
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    }
});
</script>
<template>
    <h1 class="content-heading">
        <small v-if="subtitle">{{ subtitle }}{{ ' ' }}</small>
        {{ title }}
    </h1>
</template>
<style lang="scss">
.content-heading {
    position: relative;

    small {
        position: absolute;
        top: -1.2rem;
        left: 0;
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-md);
        color: var(--text-color-weaker);
    }
}
</style>
