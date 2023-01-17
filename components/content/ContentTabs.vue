<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const active = ref('config');
        const tabs = ref([
            { name: 'config', title: 'Configuration' },
            { name: 'output', title: 'Output' }
        ]);

        return {
            active,
            tabs
        };
    }
});
</script>

<template>
    <ITabs class="content-tabs" v-model="active" v-bind="$attrs">
        <template #header>
            <ITabTitle v-for="tab in tabs" :key="tab.name" :for="tab.name">
                {{ tab.title }}
            </ITabTitle>
        </template>
        <template v-for="tab in tabs">
            <ITab v-if="$slots[tab.name]" :key="tab.name" :name="tab.name">
                <slot :name="tab.name" />
            </ITab>
        </template>
    </ITabs>
</template>

<style lang="scss">
.content-tabs {
    margin-bottom: var(--margin-bottom-2);

    .tabs-header {
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

    .tab {
        border-top-left-radius: 0;
        border-top-right-radius: 0;

        pre {
            margin-bottom: 0;
        }
    }
}
</style>
