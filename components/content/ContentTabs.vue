<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    setup(props, { slots }) {
        const active = ref(Object.keys(slots)[0]);
        const tabs = ref([
            { name: 'preview', title: 'Preview' },
            { name: 'config', title: 'inkline.config.ts' },
            { name: 'vite', title: 'vite.config.ts' },
            { name: 'nuxt', title: 'nuxt.config.ts' },
            { name: 'webpack', title: 'webpack.config.js' },
            { name: 'main', title: 'main.ts' },
            { name: 'app', title: 'App.vue' },
            { name: 'vue', title: 'Component.vue' },
            { name: 'scss', title: 'style.scss' },
            { name: 'output', title: 'Output' }
        ]);

        const availableTabs = computed(() => tabs.value.filter((tab) => !!slots[tab.name]));

        return {
            active,
            tabs,
            availableTabs
        };
    }
});
</script>

<template>
    <ITabs v-model="active" class="content-tabs" v-bind="$attrs">
        <template #header>
            <ITabTitle v-for="tab in availableTabs" :key="tab.name" :for="tab.name">
                {{ tab.title }}
            </ITabTitle>
        </template>
        <ITab v-for="tab in availableTabs" :key="tab.name" :name="tab.name">
            <slot :name="tab.name" />
        </ITab>
    </ITabs>
</template>

<style lang="scss">
.content-tabs {
    margin-bottom: var(--margin-bottom-2);

    > .tabs-header {
        justify-content: flex-end;
        margin-bottom: 0;
        border-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        .tab-title {
            border-right: 0;
            border-left: 1px solid var(--border-top-color);
        }
    }

    > .tab {
        border-top-left-radius: 0;
        border-top-right-radius: 0;

        .tab-body {
            > pre {
                margin-bottom: 0;
            }
        }
    }
}
</style>
