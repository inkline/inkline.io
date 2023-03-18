<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const route = useRoute();
        const path = computed(() => '/' + route.path.split('/').slice(2).join('/'));

        return {
            path
        };
    }
});
</script>

<template>
    <ContentPreview :src="path" />
</template>

<style lang="scss">
html,
body,
#__nuxt {
    width: 100%;
    height: 100%;
}
</style>
