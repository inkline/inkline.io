<script lang="ts">
import { defineComponent } from 'vue';
import { useHead, useLocaleHead } from '#imports';

export default defineComponent({
    setup() {
        const sidebarOpen = ref(false);

        useHead(
            useLocaleHead({
                addDirAttribute: true,
                identifierAttribute: 'id',
                addSeoAttributes: true
            })
        );

        return { sidebarOpen };
    }
});
</script>

<template>
    <ILayout id="documentation-layout">
        <ILayoutHeader>
            <AppNavbar />
        </ILayoutHeader>
        <ILayout vertical>
            <ILayoutContent>
                <IContainer>
                    <AppSidebar />
                    <article id="documentation-page">
                        <slot />
                        <!--                            <PageFooterNavigation />-->
                    </article>
                    <!--                        <PageNavigation />-->
                </IContainer>
            </ILayoutContent>
        </ILayout>
    </ILayout>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/css/mixins';

#documentation-layout {
    min-height: 100vh;

    .container {
        height: 100%;
        padding-left: 0;
        padding-right: 0;
    }

    .sidebar-wrapper {
        position: fixed;
        top: 0;
    }
}

#documentation-page {
    margin-top: calc(var(--navbar--height) + var(--article--margin-top));
    margin-left: var(--sidebar--width);
    margin-right: var(--sidebar--width);

    @include breakpoint-down('md') {
        margin-left: 0;
    }

    @include breakpoint-down('lg') {
        margin-right: 0;
    }
}

#page-navigation {
    @include breakpoint-down('lg') {
        display: none;
    }
}
</style>
