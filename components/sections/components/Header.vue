<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
    <div class="section-header">
        <h2 class="title">
            <slot name="title" />
        </h2>
        <p class="description lead">
            <slot name="description" />
        </p>
    </div>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.section-header {
    .title {
        font-size: calc(var(--font-size) * var(--scale-ratio-pow-6) * var(--scale-ratio));
    }

    .description {
        font-size: var(--font-size-xl);
    }

    @include breakpoint-down('xl') {
        .title {
            font-size: calc(var(--font-size) * var(--scale-ratio-pow-6));
        }
    }

    @include breakpoint-down('lg') {
        .title {
            font-size: calc(var(--font-size) * var(--scale-ratio-pow-5));
        }
    }

    @include breakpoint-down('md') {
        .title {
            font-size: calc(var(--font-size) * var(--scale-ratio-pow-4));
        }

        .description {
            font-size: var(--font-size-md);
        }
    }
}
</style>
