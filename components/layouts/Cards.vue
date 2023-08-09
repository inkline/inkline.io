<template>
    <div class="cards-layout">
        <slot />
    </div>
</template>

<style lang="scss">
.cards-layout,
.cards-layout > form {
    > .card,
    > .alert,
    > p {
        margin-bottom: var(--margin-bottom);
    }
}
</style>
