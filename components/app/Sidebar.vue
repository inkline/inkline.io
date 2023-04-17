<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from '#imports';

export default defineComponent({
    setup() {
        const { t } = useI18n();

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
