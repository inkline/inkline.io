<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        return {};
    }
});
</script>
<template>
    <ISidebar class="dashboard-sidebar" :collapse="false">
        <FormsTeamSelect />
        <INav vertical>
            <INavItem to="/"> Set up </INavItem>
            <INavItem to="/"> Create team </INavItem>
        </INav>
    </ISidebar>
</template>

<style lang="scss">
.dashboard-sidebar {
    --sidebar--width: 300px;
    --sidebar--light--background: white;

    overflow: visible;

    .sidebar .sidebar-content {
        overflow: visible;
    }
}
</style>
