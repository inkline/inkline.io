<script lang="ts">
import { defineComponent, PropType, VNode } from 'vue';
import { useComponentColor, useComponentSize } from '@inkline/inkline';

interface TimelineEntry {
    icon?: string | VNode;
    title: string;
    description?: string;
    date: string;
}

export default defineComponent({
    props: {
        data: {
            type: Array as PropType<TimelineEntry[]>,
            default: () => []
        }
    },
    setup(props) {}
});
</script>

<template>
    <div class="timeline">
        <div v-for="entry in data" :key="`${entry.date} - ${entry.title}`" class="timeline-entry">
            <div class="timeline-event">
                <div v-if="entry.icon" class="timeline-event-icon">
                    <component :is="entry.icon" />
                </div>
                <div class="timeline-event-title">
                    {{ entry.title }}
                </div>
                <div v-if="entry.description" class="timeline-event-description">
                    {{ entry.description }}
                </div>
            </div>
            <div class="timeline-date">
                {{ entry.date }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.timeline {
    display: flex;
    flex-direction: row;
    overflow: auto;
    padding-bottom: var(--timeline--overflow, calc(var(--padding-bottom) * 3));

    .timeline-entry {
        flex: 1 1 auto;
        position: relative;
        min-width: var(--timeline--min-width, 320px);
        max-width: var(--timeline--max-width, 480px);
        text-align: center;
        padding: var(
            --timeline--padding,
            var(--timeline--padding-top, var(--padding-top))
                var(--timeline--padding-right, var(--padding-right))
                var(--timeline--padding-bottom, var(--padding-bottom))
                var(--timeline--padding-left, var(--padding-left))
        );
        border-bottom-width: var(--timeline--border-bottom-width, var(--border-bottom-width));
        border-bottom-style: var(--timeline--border-bottom-style, var(--border-bottom-style));
        border-bottom-color: var(--timeline--border-bottom-color, var(--border-bottom-color));

        .timeline-event {
            .timeline-event-title {
                font-weight: var(--timeline--title--font-weight, var(--font-weight-bold));
                margin-bottom: var(
                    --timeline--title--margin-bottom,
                    calc(var(--margin-bottom) * 0.5)
                );
            }

            .timeline-event-description {
                font-size: var(--timeline--description--font-size, var(--font-size-sm));
                color: var(--timeline--description--color, var(--text-color-weaker));
            }
        }

        .timeline-date {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            transform: translateY(100%);
            padding-top: var(--timeline--date--padding-top, var(--padding-top));
            color: var(--timeline--date--color, var(--text-color-weaker));

            &::before {
                content: '';
                position: absolute;
                left: 50%;
                top: calc(var(--timeline--marker--size, 1rem) * -0.5);
                width: var(--timeline--marker--size, 1rem);
                height: var(--timeline--marker--size, 1rem);
                background: var(--timeline--marker--background, var(--color-primary));
                border-radius: 50%;
                transform: translateX(-50%);
            }
        }
    }
}
</style>
