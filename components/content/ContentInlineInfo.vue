<template>
    <div class="inline-info">
        <Icon class="_margin-right:1/2" name="mdi:info-outline" /> <slot />
    </div>
</template>

<style lang="scss">
.inline-info {
    display: flex;
    align-items: center;
    color: var(--text-color-weaker);
    margin-bottom: var(--margin-bottom);

    p {
        margin-bottom: 0;
    }
}
</style>
