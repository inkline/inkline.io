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
        const componentSlots = computed(() => manifest.value?.slots || []);

        return {
            componentSlots
        };
    }
});
</script>

<template>
    <ConfigurationTable v-show="componentSlots.length > 0" type="slots">
        <li v-for="slot in componentSlots" :key="slot.name" class="tbody">
            <div class="tr">
                <div class="td property-name">
                    <span>Property</span>
                    <div>
                        <code>
                            {{ slot.name }}
                        </code>
                    </div>
                </div>
            </div>
            <div class="tr">
                <div class="td property-description">
                    {{ slot.description }}
                </div>
            </div>
        </li>
    </ConfigurationTable>
</template>
