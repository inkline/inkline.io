<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { RouteLocation } from 'vue-router';
import { useLocalePath } from 'vue-i18n-routing';
import { useTelemetry } from '~/composables';
import ContentImageCard from '~/components/content/ContentImageCard.vue';

export default defineComponent({
    components: { ContentImageCard },
    props: {
        to: {
            type: [String, Object] as PropType<RouteLocation | string>,
            default: ''
        },
        src: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const { track } = useTelemetry();
        const localePath = useLocalePath();
        const url = computed(() => {
            if (typeof props.to === 'string' && props.to.startsWith('http')) {
                return props.to;
            }

            return localePath(props.to);
        });

        function onClick() {
            track('user clicked on link card', {
                to: url.value,
                type: 'navigation'
            });
        }

        return { url, onClick };
    }
});
</script>

<template>
    <NuxtLink class="link-card" :to="url" @click="onClick">
        <ContentImageCard :title="title" :src="src" :alt="alt" :icon="icon" :subtitle="subtitle">
            <IIcon name="ink-chevron-down" />
        </ContentImageCard>
    </NuxtLink>
</template>

<style lang="scss">
.link-card {
    margin-bottom: var(--margin-bottom);
    display: block;

    .card {
        .card-body {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            transition-property: background-color, border-color, color;
            transition-timing-function: var(--transition-timing-function);
            transition-duration: var(--transition-duration);
        }

        .image {
            width: 40px;
            height: 30px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin-right: var(--margin-right);

            img {
                height: 100%;
                width: auto;
            }
        }

        .card-body > .inkline-icon {
            margin-left: auto;
            transform: rotate(-90deg);
            transition: transform var(--transition-duration) var(--transition-timing-function);
        }
    }

    &:hover,
    &:focus {
        text-decoration: none;

        .card {
            --card--border-top-color: var(--color-primary);
            --card--border-right-color: var(--color-primary);
            --card--border-bottom-color: var(--color-primary);
            --card--border-left-color: var(--color-primary);

            .card-body > .inkline-icon,
            .card-body > svg {
                transform: rotate(-90deg) translateY(-16px);
            }
        }
    }
}
</style>
