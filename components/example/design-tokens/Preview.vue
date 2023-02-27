<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
    props: {
        token: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'md'
        }
    },
    setup(props) {
        const tokenParts = computed(() => {
            return props.token.split('--').splice(1);
        });

        const isText = computed(() => {
            return ['text', 'contrast-text'].includes(tokenParts.value[0]);
        });

        const classes = computed(() => {
            let className = '';

            if (isText.value) {
                if (tokenParts.value[1].startsWith('color')) {
                    className = 'color';
                }
            } else if (tokenParts.value[0].startsWith('color')) {
                className = 'background';
            } else if (tokenParts.value[0].startsWith('box-shadow')) {
                className = `${tokenParts.value[0]} -box-shadow`;
            } else if (
                tokenParts.value[0].startsWith('border') &&
                !tokenParts.value[0].includes('radius')
            ) {
                className = `${tokenParts.value[0]} -border`;
            } else {
                className = tokenParts.value[0];
            }

            className = className.replace(/-(xs|sm|md|lg|xl|xxl)/, '');

            return {
                [`-${className}`]: Boolean(className),
                [`-${props.size}`]: true
            };
        });

        return {
            classes,
            isText
        };
    }
});
</script>

<template>
    <div class="design-token-preview" :class="classes">
        <span v-if="isText">Aa</span>
    </div>
</template>

<style lang="scss">
.design-token-preview {
    --design-token-preview--lg--size: 128px;
    --design-token-preview--md--size: 80px;
    --design-token-preview--sm--size: 52px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;

    &.-sm {
        width: var(--design-token-preview--sm--size);
        height: var(--design-token-preview--sm--size);
    }

    &.-md {
        width: var(--design-token-preview--md--size);
        height: var(--design-token-preview--md--size);
    }

    &.-lg {
        width: var(--design-token-preview--lg--size);
        height: var(--design-token-preview--lg--size);
    }

    &.-background {
        background: var(--design-token);
        border-radius: var(--border-radius);
        border-width: var(--border-width);
        border-style: var(--border-style);
        border-color: var(--border-color);
    }

    &.-border {
        border-width: var(--border-width);
        border-style: var(--border-style);
        border-color: var(--border-color);

        &.-border-top-width,
        &.-border-top-style,
        &.-border-top-color {
            border-style: dashed;
            border-top-style: var(--border-top-style);
        }

        &.-border-right-width,
        &.-border-right-style,
        &.-border-right-color {
            border-style: dashed;
            border-right-style: var(--border-right-style);
        }

        &.-border-bottom-width,
        &.-border-bottom-style,
        &.-border-bottom-color {
            border-style: dashed;
            border-bottom-style: var(--border-bottom-style);
        }

        &.-border-left-width,
        &.-border-left-style,
        &.-border-left-color {
            border-style: dashed;
            border-left-style: var(--border-left-style);
        }
    }

    &.-box-shadow {
        border-radius: var(--border-radius);
        background: var(--color-light);
        border-width: var(--border-width);
        border-style: var(--border-style);
        border-color: var(--border-color);
        box-shadow: var(--box-shadow-offset-x) var(--box-shadow-offset-y)
            var(--box-shadow-blur-radius) var(--box-shadow-spread-radius) var(--box-shadow-color);

        &.-box-shadow-offset-x {
            box-shadow: 1rem 0 var(--box-shadow-blur-radius) var(--box-shadow-spread-radius)
                rgba(0, 0, 0, 0.5);
        }

        &.-box-shadow-offset-y {
            box-shadow: 0 1rem var(--box-shadow-blur-radius) var(--box-shadow-spread-radius)
                rgba(0, 0, 0, 0.5);
        }

        &.-box-shadow-blur-radius {
            box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.5);
        }

        &.-box-shadow-spread-radius {
            box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.1);
        }
    }

    &.-color,
    &.-contrast-text {
        background: var(--color-light-tint-50);
        color: var(--design-token);
        border-radius: var(--border-radius);
        border-width: var(--border-width);
        border-style: var(--border-style);
        border-color: var(--border-color);
    }

    &.-border-top-left-radius,
    &.-border-top-right-radius,
    &.-border-bottom-left-radius,
    &.-border-bottom-right-radius {
        border-width: var(--border-width);
        border-style: dashed;
        border-color: var(--border-color);
    }

    &.-border-top-left-radius {
        border-top: var(--border-top-width) var(--border-top-style) var(--border-top-color);
        border-left: var(--border-left-width) var(--border-left-style) var(--border-left-color);
        border-top-left-radius: var(--design-token);
    }

    &.-border-top-right-radius {
        border-top: var(--border-top-width) var(--border-top-style) var(--border-top-color);
        border-right: var(--border-right-width) var(--border-right-style) var(--border-right-color);
        border-top-right-radius: var(--design-token);
    }

    &.-border-bottom-left-radius {
        border-bottom: var(--border-bottom-width) var(--border-bottom-style)
            var(--border-bottom-color);
        border-left: var(--border-left-width) var(--border-left-style) var(--border-left-color);
        border-bottom-left-radius: var(--design-token);
    }

    &.-border-bottom-right-radius {
        border-bottom: var(--border-bottom-width) var(--border-bottom-style)
            var(--border-bottom-color);
        border-right: var(--border-right-width) var(--border-right-style) var(--border-right-color);
        border-bottom-right-radius: var(--design-token);
    }

    &.-border-radius {
        border-top: var(--border-top-width) var(--border-top-style) var(--border-top-color);
        border-right: var(--border-right-width) var(--border-right-style) var(--border-right-color);
        border-bottom: var(--border-bottom-width) var(--border-bottom-style)
            var(--border-bottom-color);
        border-left: var(--border-left-width) var(--border-left-style) var(--border-left-color);
        border-radius: var(--design-token);
    }
}
</style>
