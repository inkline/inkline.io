<script lang="ts">
import { computed, defineComponent, toRef } from 'vue';
import { useComponentColor, useComponentSize } from '@inkline/inkline';

const componentName = 'OsAwards';

export default defineComponent({
    props: {
        color: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const currentColor = toRef(props, 'color');
        const currentSize = toRef(props, 'size');
        const { color } = useComponentColor({ componentName, currentColor });
        const { size } = useComponentSize({ componentName, currentSize });

        const classes = computed(() => ({ [`-${color.value}`]: true, [`-${size.value}`]: true }));

        return {
            classes
        };
    }
});
</script>

<template>
    <section :class="['section', classes]">
        <IContainer>
            <slot />
        </IContainer>
    </section>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.section {
    width: 100%;
    display: block;
    position: relative;

    &.-light {
        background-color: var(--section--light--background, var(--color-light));
    }

    &.-dark {
        background-color: var(--section--dark--background, var(--color-dark));
    }

    &.-sm,
    &.-fullscreen {
        padding: calc(var(--padding-top) * 6) 0 calc(var(--padding-bottom) * 6) 0;
    }

    &.-md {
        padding: calc(var(--padding-top) * 8) 0 calc(var(--padding-bottom) * 8) 0;
    }

    &.-lg {
        padding: calc(var(--padding-top) * 10) 0 calc(var(--padding-bottom) * 10) 0;
    }

    &.-fullscreen {
        flex: 1;
        display: flex;
        align-items: center;
    }
}
</style>
