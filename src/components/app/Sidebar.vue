<template>
    <ISidebar class="app-sidebar" :collapse="false">
        <slot />
    </ISidebar>
</template>

<style lang="scss">
.app-sidebar {
    --sidebar--background: transparent;
    --sidebar--border-top-width: 0;
    --sidebar--border-bottom-width: 0;
    --sidebar--border-left-width: 0;
    --sidebar--padding-top: 0;
    --sidebar--padding-right: 0;
    --sidebar--padding-bottom: 0;
    --sidebar--padding-left: 0;
    --sidebar--item--background: transparent;

    .sidebar-content {
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
}
</style>
