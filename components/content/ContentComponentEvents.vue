<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useManifest } from '~/composables';

export default defineComponent({
    props: {
        component: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const componentName = computed(() => props.component);
        const { manifest } = useManifest(componentName);
        const componentEvents = computed(() => manifest.value?.events || []);

        return {
            componentEvents
        };
    }
});
</script>

<template>
    <ConfigurationTable v-show="componentEvents.length > 0" type="events">
        <li v-for="event in componentEvents" :key="event.name" class="tbody">
            <div class="tr">
                <div class="td property-name">
                    <span>Property</span>
                    <div>
                        <code>
                            {{ event.name }}
                        </code>
                    </div>
                </div>
            </div>
            <div class="tr">
                <div class="td property-description">
                    {{ event.description }}
                </div>
            </div>
        </li>
    </ConfigurationTable>
</template>
