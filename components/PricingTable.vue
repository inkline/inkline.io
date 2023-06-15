<script lang="ts">
import { defineComponent, PropType } from 'vue';

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
        }
    },
    setup() {
        return {};
    }
});
</script>

<template>
    <ICard class="pricing-table">
        <template #header v-if="$slots.header">
            <!-- @slot header Slot for pricing table header -->
            <slot name="header" />
        </template>
        <div class="pricing-table-title" v-if="title || $slots.title">
            <!-- @slot title Slot for pricing table title -->
            <slot name="title">
                <h2>{{ title }}</h2>
            </slot>
        </div>
        <div class="pricing-table-billing">
            <div class="pricing-table-price">
                <!-- @slot price Slot for pricing table price -->
                <slot name="price">
                    <h3>
                        <span
                            v-if="currency && currencyLocation === 'prefix'"
                            class="pricing-table-price-currency"
                        >
                            {{ currency }}
                        </span>
                        <span class="pricing-table-price-number">{{ price }}</span>
                        <span
                            v-if="currency && currencyLocation === 'suffix'"
                            class="pricing-table-price-currency"
                        >
                            {{ currency }}
                        </span>
                    </h3>
                </slot>
            </div>
            <div class="pricing-table-interval" v-if="interval || $slots.interval">
                <!-- @slot interval Slot for pricing table billing interval -->
                <slot name="interval">
                    {{ interval }}
                </slot>
            </div>
        </div>
        <hr />
        <ul class="pricing-table-features" v-if="features.length > 0">
            <li v-for="(feature, key) in features" :key="key">
                <!-- @slot feature Scoped slot for pricing table feature -->
                <slot name="feature" :feature="feature">
                    {{ feature.title }}
                </slot>
            </li>
        </ul>
        <template #footer v-if="$slots.footer">
            <!-- @slot footer Slot for pricing table footer -->
            <slot name="footer" />
        </template>
    </ICard>
</template>
<script setup></script>
