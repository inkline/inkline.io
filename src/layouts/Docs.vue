<script lang="ts" setup>
import { useSidebarNavigation } from '~/composables';
import { useI18n } from 'vue-i18n';

const navigation = useSidebarNavigation();
const { t } = useI18n();
</script>

<template>
    <LayoutsContent type="docs">
        <template #navbar>
            <INav class="_lg:hidden">
                <span class="_text:weakest _margin-left:1 _margin-y:1/2">
                    {{ t('navigation.documentation') }}
                </span>
                <AppSidebarNavigation :navigation="navigation" />
            </INav>
        </template>
        <template #sidebar>
            <AppSidebarNavigation :navigation="navigation" />
            <AppSidebarApps class="_margin-top:2!" />
        </template>

        <slot />

        <AppDocsPageFooter />
    </LayoutsContent>
</template>
