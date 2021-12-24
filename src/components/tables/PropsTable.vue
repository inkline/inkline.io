<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PropsTable',
    props: {
        manifest: {
            type: Object,
            default: () => ({ css: { variables: [] } })
        }
    },
    setup (props) {
        return {
            props: props.manifest.props
        };
    }
});
</script>

<template>
    <ul class="configuration-table -props">
        <li v-for="prop in props" :key="prop.name" class="tbody">
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
                    <code>{{ prop.type.join(', ') }}</code>
                </div>

                <div class="td property-default">
                    <span>Default</span>
                    <code>{{ prop.default }}</code>
                </div>
            </div>
            <div class="tr">
                <div class="td property-description">
                    <span>Description</span>
                    {{ prop.description }}
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" src="./table.scss" />
