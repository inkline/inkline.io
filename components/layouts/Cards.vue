<template>
    <div class="cards-layout">
        <slot />
    </div>
</template>

<style lang="scss">
.cards-layout,
.cards-layout > form {
    > .card,
    > .alert {
        margin-bottom: var(--margin-bottom);
    }
}
</style>
