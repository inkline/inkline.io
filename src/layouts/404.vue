<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
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
    <main>
        <router-view />
        <div>
            <button @click="router.back()">
                {{ t('button.back') }}
            </button>
        </div>
    </main>
</template>
