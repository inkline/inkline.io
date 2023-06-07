<script lang="ts">
import { defineComponent } from 'vue';
import { useSidebarNavigation } from '~/composables';
import { useI18n } from 'vue-i18n';
import { useContentHead } from '#imports';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'Docs',
    setup() {
        const navigation = useSidebarNavigation();
        const { t } = useI18n();

        return { navigation, t };
    }
});
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
            <AppSidebarApps />
        </template>

        <slot />

        <AppDocsPageFooter />
    </LayoutsContent>
</template>
