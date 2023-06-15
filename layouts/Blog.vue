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
    background-repeat: no-repeat;
    background-image: radial-gradient(at 36% 0%, hsla(246, 100%, 74%, 0.15) 0px, transparent 50%),
        radial-gradient(at 99% 13%, hsla(22, 100%, 56%, 0.15) 0px, transparent 50%),
        radial-gradient(at 63% 58%, hsla(240, 0%, 100%, 0.15) 0px, transparent 50%),
        radial-gradient(at 0% 0%, hsla(21, 0%, 100%, 0.15) 0px, transparent 50%);

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
