<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useManifest } from '~/composables';
import { cssVariableDisplayValue } from '~/utils';

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
        const cssVariables = computed(() => manifest.value?.css?.variables || []);

        return {
            cssVariables,
            cssVariableDisplayValue
        };
    }
});
</script>

<template>
    <ConfigurationTable v-show="cssVariables.length > 0" type="css-variables">
        <li v-for="variable in cssVariables" :key="variable.name" class="tbody">
            <div class="tr">
                <div class="td property-name">
                    <span>Property</span>
                    <div>
                        <code> {{ variable.name }} </code>
                    </div>
                </div>

                <div class="td property-value">
                    <span>Value</span>
                    <code>{{ cssVariableDisplayValue(variable) }}</code>
                </div>
            </div>
            <div v-if="variable.description" class="tr">
                <div class="td property-description">
                    <span>Description</span>
                    {{ variable.description }}
                </div>
            </div>
        </li>
    </ConfigurationTable>
</template>
