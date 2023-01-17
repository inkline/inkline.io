<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RouteLocation, RouteLocationRaw } from 'vue-router';
import { useLocalePath } from '#i18n';

export default defineComponent({
    props: {
        to: {
            type: [String, Object] as PropType<RouteLocation | string>,
            required: true
        },
        icon: {
            type: String,
            required: true
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
        const localePath = useLocalePath();
        const url = computed(() => {
            if (typeof props.to === 'string' && props.to.startsWith('http')) {
                return props.to;
            }

            return localePath(props.to);
        });

        return { url };
    }
});
</script>

<template>
    <ICard class="feature-card">
        <NuxtLink class="_overlay-link" :to="url" />

        <template #header>
            <div class="_text:center _color:primary">
                <Icon :name="icon" size="64" />
            </div>
        </template>

        <strong>{{ title }}</strong>
        <div class="description _text:sm">
            <slot />
        </div>
    </ICard>
</template>

<style lang="scss" scoped>
.feature-card {
    --card--light--header--background: var(--color-gray-50);
    --card--dark--header--background: var(--color-gray-900);

    margin-bottom: var(--margin-bottom);
    display: block;

    &:hover,
    &:focus {
        --card--border-top-color: var(--color-primary);
        --card--border-right-color: var(--color-primary);
        --card--border-bottom-color: var(--color-primary);
        --card--border-left-color: var(--color-primary);

        text-decoration: none;

        .card {
            &.-light {
                ----border-color: var(--color-gray-300);
            }

            &.-dark {
                ----border-color: var(--color-gray-700);
            }
        }

        .card-body {
            > .inkline-icon,
            > svg {
                transform: rotate(-90deg) translateY(-16px);
            }
        }
    }

    :deep(.card-body) {
        p {
            margin-bottom: 0;
        }
    }
}
</style>
