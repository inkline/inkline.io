<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SlotsTable',
    props: {
        manifest: {
            type: Object,
            default: () => ({ css: { variables: [] } })
        }
    },
    setup (props) {
        return {
            slots: props.manifest.slots
        };
    }
});
</script>

<template>
    <ul class="configuration-table -slots">
        <li v-for="slot in slots" :key="slot.name" class="tbody">
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
                    <span>Description</span>
                    {{ slot.description }}
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" src="./table.scss" />
