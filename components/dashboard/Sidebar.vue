<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        return {};
    }
});
</script>
<template>
    <ISidebar :collapse="false">
        <FormsTeamSelect />
        <INav vertical>
            <INavItem to="/"> Set up </INavItem>
            <INavItem to="/"> Create team </INavItem>
        </INav>
    </ISidebar>
</template>
