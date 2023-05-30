<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useAuthStore } from '~/stores';

export default defineComponent({
    setup() {
        const { logout } = useAuthStore();

        onMounted(async () => {
            await logout();
        });

        return {};
    }
});
</script>

<template>
    <div />
</template>
