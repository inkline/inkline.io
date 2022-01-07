<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup () {
        const router = useRouter();
        const { t } = useI18n();

        return {
            router,
            t
        };
    }
});
</script>

<template>
    <main id="error-layout">
        <navbar type="default" />
        <router-view />
        <Footer />
    </main>
</template>

<style lang="scss">
#error-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    footer {
        margin-top: auto;
    }
}
</style>
