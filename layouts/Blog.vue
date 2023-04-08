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
    </LayoutsContent>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

#blog-layout {
    background: var(--color-gray-50);

    @include breakpoint-down('sm') {
        .content-layout-container {
            display: flex;
            justify-content: center;
        }

        .content-page {
            max-width: 360px;
        }
    }

    .blog-list-item {
        margin-bottom: var(--margin-bottom-2);
    }
}
</style>
