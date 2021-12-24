<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CssVariablesTable',
    props: {
        manifest: {
            type: Object,
            default: () => ({ css: { variables: [] } })
        },
        type: {
            type: String,
            default: 'global'
        },
        modifiers: {
            type: Array,
            default: () => []
        }
    },
    setup (props) {
        const colorModifier = props.modifiers.includes('color');

        const colorClass = (variable: any) => {
            return variable.name.replace(/--[hsl]$/, '').replace('color--', '_color:');
        };

        const prefix = (variable: any) => {
            return variable.type === 'scss' ? '$' : (props.type === 'global' ? '--' : '----');
        };

        return {
            prefix,
            colorClass,
            colorModifier,
            variables: props.manifest.css.variables
        };
    }
});
</script>

<template>
    <ul class="configuration-table -css-variables">
        <li v-for="variable in variables" :key="variable.name" class="tbody">
            <div class="tr">
                <div class="td property-name">
                    <span>Property</span>
                    <div>
                        <i-icon
                            v-if="colorModifier"
                            name="ink-circle"
                            :class="[colorClass(variable)]"
                        />
                        <code>
                            {{ prefix(variable) }}{{ variable.name }}
                        </code>
                    </div>
                </div>

                <div class="td property-value">
                    <span>Value</span>
                    <code>{{ variable.value }}</code>
                </div>
            </div>
            <div class="tr">
                <div class="td property-description">
                    <span>Description</span>
                    {{ variable.description }}
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" src="./table.scss" />
