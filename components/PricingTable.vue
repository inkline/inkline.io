<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

const currencyMap = {
    usd: '$',
    eur: '€',
    gbp: '£'
};

export default defineComponent({
    props: {
        title: {
            type: String,
            default: ''
        },
        currency: {
            type: String,
            default: ''
        },
        currencyLocation: {
            type: String as PropType<'prefix' | 'suffix'>,
            default: 'prefix'
        },
        price: {
            type: [String, Number],
            default: '0'
        },
        interval: {
            type: String,
            default: ''
        },
        features: {
            type: Array as PropType<{ title: string }[]>,
            default: () => []
        },
        featured: {
            type: Boolean,
            default: false
        },
        showPrice: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        const mappedCurrency = computed(() => currencyMap[props.currency] || props.currency);

        const classes = computed(() => {
            return {
                '-featured': props.featured
            };
        });

        return { classes, mappedCurrency };
    }
});
</script>

<template>
    <ICard class="pricing-table" :class="classes">
        <template v-if="$slots.header" #header>
            <!-- @slot header Slot for pricing table header -->
            <slot name="header" />
        </template>
        <div>
            <!-- @slot title:before Slot for content before title -->
            <slot name="title:before" />
            <div v-if="title || $slots.title" class="pricing-table-title">
                <!-- @slot title Slot for pricing table title -->
                <slot name="title">
                    <h2>{{ title }}</h2>
                </slot>
            </div>
            <!-- @slot title:after Slot for content after title -->
            <slot name="title:after" />
            <div v-if="showPrice" class="pricing-table-billing">
                <div class="pricing-table-price">
                    <!-- @slot price Slot for pricing table price -->
                    <slot name="price">
                        <span
                            v-if="currency && currencyLocation === 'prefix'"
                            class="pricing-table-price-currency"
                        >
                            {{ mappedCurrency }}
                        </span>
                        <span class="pricing-table-price-number">{{ price }}</span>
                        <span
                            v-if="currency && currencyLocation === 'suffix'"
                            class="pricing-table-price-currency"
                        >
                            {{ mappedCurrency }}
                        </span>
                    </slot>
                </div>
                <div v-if="interval || $slots.interval" class="pricing-table-interval">
                    <!-- @slot interval Slot for pricing table billing interval -->
                    <slot name="interval">
                        {{ interval }}
                    </slot>
                </div>
            </div>
            <!-- @slot features:before Slot for content before features -->
            <slot name="features:before" />
            <ul v-if="features.length > 0" class="pricing-table-features">
                <li v-for="(feature, key) in features" :key="key">
                    <!-- @slot feature Scoped slot for pricing table feature -->
                    <slot name="feature" :feature="feature">
                        <i-icon name="ink-check" />
                        {{ feature.title }}
                    </slot>
                </li>
            </ul>
            <!-- @slot features:after Slot for content after features -->
            <slot name="features:after" />
        </div>
        <template v-if="$slots['footer:before']" #footer:before>
            <!-- @slot footer:before Slot for content before pricing table footer -->
            <slot name="footer:before" />
        </template>
        <template v-if="$slots.footer" #footer>
            <!-- @slot footer Slot for pricing table footer -->
            <slot name="footer" />
        </template>
        <template v-if="$slots['footer:after']" #footer:after>
            <!-- @slot footer:before Slot for content after pricing table footer -->
            <slot name="footer:after" />
        </template>
    </ICard>
</template>

<style lang="scss">
.pricing-table {
    height: 100%;

    .pricing-table-billing {
        display: flex;
        flex-direction: column;

        .pricing-table-price {
            font-size: var(--h3--font-size);
        }

        .pricing-table-interval {
            font-size: var(--font-size-sm);
            color: var(--text-color-weaker);
        }
    }

    .pricing-table-features {
        list-style: none;
        padding: 0;
        margin-top: var(--margin-top-2);
        margin-bottom: var(--margin-top-2);

        .inkline-icon {
            color: var(--color-success);
        }
    }

    &.-featured {
        --card--border-top-color: var(--color-primary);
        --card--border-right-color: var(--color-primary);
        --card--border-bottom-color: var(--color-primary);
        --card--border-left-color: var(--color-primary);
    }
}
</style>
