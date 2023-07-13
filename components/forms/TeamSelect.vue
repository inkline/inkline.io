<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '~/stores';

export default defineComponent({
    setup() {
        const authStore = useAuthStore();
        const options = [{ id: 1, label: authStore.currentUser.name }];

        return { options };
    }
});
</script>
<template>
    <ISelect :options="options"></ISelect>
</template>
