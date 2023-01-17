<script lang="ts">
import { defineComponent, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { navigation } from '~/constants';

export default defineComponent({
    props: {
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const menu = ref(navigation);
        const { t } = useI18n();

        onBeforeRouteLeave(() => {
            emit('update:modelValue', false);
        });

        return {
            t,
            menu
        };
    }
});
</script>

<template>
    <ISidebar class="app-sidebar" :collapse="false">
        <AppSidebarApps />
        <AppSidebarNavigation />
    </ISidebar>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/css/mixins';

.app-sidebar {
    --sidebar--background: transparent;
    --sidebar--border-top-width: 0;
    --sidebar--border-bottom-width: 0;
    --sidebar--border-left-width: 0;
    --sidebar--padding-top: 0;
    --sidebar--padding-right: 0;
    --sidebar--padding-bottom: 0;
    --sidebar--padding-left: 0;

    margin-left: calc(var(--margin-left-1-2) * -1);
}
</style>
