<script lang="ts">
import { defineComponent } from 'vue';
import { useInkline } from '@inkline/inkline';

export default defineComponent({
    setup() {
        const inkline = useInkline();
        const colorMode = computed<'light' | 'dark'>(() => inkline.options.colorMode);

        function toggleColorMode() {
            inkline.options.colorMode = colorMode.value === 'light' ? 'dark' : 'light';
        }

        return {
            colorMode,
            toggleColorMode
        };
    }
});
</script>

<template>
    <INavbar>
        <INavbarBrand to="/"> Inkline </INavbarBrand>
        <INavbarCollapsible>
            <INav>
                <INavItem to="/"> Home </INavItem>
                <INavItem to="/pricing"> Pricing </INavItem>
                <INavItem to="/docs"> Documentation </INavItem>
            </INav>
            <INav class="_margin-left:auto">
                <INavItem href="/docs"><Icon name="bi:discord" size="24px" /></INavItem>
                <INavItem href="/docs"><Icon name="bi:github" size="24px" /></INavItem>
                <INavItem class="_cursor:pointer" @click="toggleColorMode">
                    <Icon v-if="colorMode === 'light'" name="fa6-solid:moon" size="24px" />
                    <Icon v-else name="fa6-solid:sun" size="24px" />
                </INavItem>
            </INav>
            <INav>
                <INavItem to="/docs"> Sign in </INavItem>
                <IButton color="primary">Sign up</IButton>
            </INav>
        </INavbarCollapsible>
    </INavbar>
</template>
