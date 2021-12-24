<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EventsTable',
    props: {
        manifest: {
            type: Object,
            default: () => ({ css: { variables: [] } })
        }
    },
    setup (props) {
        return {
            events: props.manifest.events
        };
    }
});
</script>

<template>
    <ul class="configuration-table -events">
        <li v-for="event in events" :key="event.name" class="tbody">
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
                    <span>Description</span>
                    {{ event.description }}
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" src="./table.scss" />
