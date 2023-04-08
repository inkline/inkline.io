<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n, onBeforeRouteLeave } from '#imports';

export default defineComponent({
    props: {
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const { t } = useI18n();

        onBeforeRouteLeave(() => {
            emit('update:modelValue', false);
        });

        return {
            t
        };
    }
});
</script>

<template>
    <ISidebar class="app-sidebar" :collapse="false">
        <slot />
    </ISidebar>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.app-sidebar {
    --sidebar--light--background: transparent;
    --sidebar--dark--background: transparent;
    --sidebar--border-top-width: 0;
    --sidebar--border-bottom-width: 0;
    --sidebar--border-left-width: 0;
    --sidebar--md--padding-top: 0;
    --sidebar--md--padding-right: 0;
    --sidebar--md--padding-bottom: 0;
    --sidebar--md--padding-left: 0;

    .sidebar-content {
        //padding-left: var(--padding-left-1-2);
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
}
</style>
