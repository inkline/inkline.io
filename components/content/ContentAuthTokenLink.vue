<script lang="ts" setup>
import { useServiceAccountRoutes } from '~/composables';

const props = defineProps({
    content: {
        type: String,
        default: 'auth token'
    }
});

const { routes } = useServiceAccountRoutes();
</script>
<template>
    <NuxtLink :to="routes['/token']">
        <strong>{{ content }}</strong>
    </NuxtLink>
</template>
