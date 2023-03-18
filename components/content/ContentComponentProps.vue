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
        const componentProps = computed(() => manifest.value?.props || []);

        function propToString(prop: string) {
            return /^[A-Z0-9]/.test(prop) ||
                /[{(['"+-]/.test(prop) ||
                ['true', 'false'].includes(prop)
                ? prop
                : `'${prop}'`;
        }

        function propType(type: string[]) {
            return type.length > 0
                ? type.map((prop: string) => propToString(prop)).join(' | ')
                : 'Any';
        }

        return {
            componentProps,
            propToString,
            propType
        };
    }
});
</script>

<template>
    <ConfigurationTable v-show="componentProps.length > 0" type="props">
        <li v-for="prop in componentProps" :key="prop.name" class="tbody">
            <div class="tr">
                <div class="td property-name">
                    <span>Property</span>
                    <div>
                        <code>
                            {{ prop.name }}
                        </code>
                    </div>
                </div>

                <div class="td property-type">
                    <span>Type</span>
                    <code>{{ propType(prop.type) }}</code>
                </div>

                <div class="td property-default">
                    <span>Default</span>
                    <code>{{ propToString(prop.default) }}</code>
                </div>
            </div>
            <div class="tr">
                <div class="td property-description">
                    {{ prop.description }}
                </div>
            </div>
        </li>
    </ConfigurationTable>
</template>
