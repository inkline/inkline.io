<script lang="ts" setup>
const props = defineProps({
    number: {
        type: Number,
        default: 1
    }
});
</script>
<template>
    <div class="install-step">
        <div class="install-step-title">
            <span class="install-step-number">
                {{ number }}
            </span>
            <slot name="title" />
        </div>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
:deep(.pre) {
    background: var(--code--background);
    padding: var(--padding);

    .line {
        display: block;
    }
}
</style>
