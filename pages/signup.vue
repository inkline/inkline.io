<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useAuthStore } from '~/stores';

export default defineComponent({
    setup() {
        const { login } = useAuthStore();

        onMounted(async () => {
            await login();
        });

        return {};
    }
});
</script>

<template>
    <div />
</template>
