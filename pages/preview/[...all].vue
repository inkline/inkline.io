<script lang="ts">
import { Component, computed, defineComponent, h, markRaw, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { ILoader } from '@inkline/inkline';

export default defineComponent({
    setup() {
        const dynamicComponent = ref<Component | undefined>(() => h(ILoader));

        const route = useRoute();
        const routeParts = computed(() => route.path.split('/').slice(2));

        onMounted(async () => {
            try {
                let componentModule;
                if (routeParts.value[0] === 'components') {
                    componentModule = await import(
                        `../../node_modules/@inkline/inkline/${routeParts.value[0]}/${routeParts.value[1]}/examples/${routeParts.value[3]}.vue`
                    );
                } else {
                    componentModule = await import(
                        `../../node_modules/@inkline/inkline/stories/${routeParts.value[1]}/${routeParts.value[2]}/${routeParts.value[3]}.vue`
                    );
                }

                dynamicComponent.value = markRaw(componentModule.default);
            } catch (error) {
                console.error(error);

                dynamicComponent.value = () => h('div', {}, 'Not found');
            }
        });

        return {
            dynamicComponent
        };
    }
});
</script>

<template>
    <ContentPreview :component="dynamicComponent" />
</template>

<style lang="scss">
html,
body,
#__nuxt {
    width: 100%;
    height: 100%;
}
</style>
