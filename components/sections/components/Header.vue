<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        heading: {
            type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
            default: 'h2'
        }
    }
});
</script>

<template>
    <div class="section-header">
        <component :is="heading" class="title">
            <slot name="title" />
        </component>
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
        font-size: var(--font-size-lg);
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
