<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    name: 'Blog',
    setup() {
        const { t } = useI18n();

        return { t };
    }
});
</script>

<template>
    <LayoutsContent type="blog" :sidebar="false">
        <slot />
        <template #footer>
            <AppFooter />
        </template>
    </LayoutsContent>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

#blog-layout {
    .light-theme & {
        background: var(--color-light-tint-50);
    }

    .blog-list-item {
        margin-bottom: var(--margin-bottom-2);
    }

    @include breakpoint-down('sm') {
        .content-layout-container {
            display: flex;
            justify-content: center;
        }

        .content-page {
            max-width: 360px;
        }
    }

    @include breakpoint-down('xl') {
        .app-docs-page-sidebar {
            display: none;
        }
    }
}

#blog-layout-container {
    display: flex;
    justify-content: center;
}

#blog-page {
    margin-left: 0;
    margin-right: 0;
    max-width: 980px;
}
</style>
