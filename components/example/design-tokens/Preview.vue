<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useDesignToken } from '~/composables';

export default defineComponent({
    props: {
        token: {
            type: String,
            default: ''
        },
        border: {
            type: Boolean,
            default: true
        },
        borderRadius: {
            type: Boolean,
            default: true
        },
        boxShadow: {
            type: Boolean,
            default: true
        },
        text: {
            type: Boolean,
            default: false
        },
        background: {
            type: Boolean,
            default: true
        },
        icon: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'md'
        },
        childElement: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const token = computed(() => props.token);
        const { propertyName } = useDesignToken(token);

        const classes = computed(() => {
            return {
                '-border': props.border,
                '-border-radius': props.borderRadius,
                '-box-shadow': props.boxShadow,
                '-background': props.background,
                '-icon': props.icon,
                '-text': props.text,
                [`-token-${propertyName.value}`]: true,
                [`-${props.size}`]: true
            };
        });

        return {
            classes
        };
    }
});
</script>

<template>
    <div class="design-token-preview" :class="classes">
        <span v-if="icon">
            <Icon :name="icon" />
        </span>
        <span v-else-if="text"> Aa </span>
        <span v-else-if="childElement" />
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
    width: var(--design-token-preview--size);
    height: var(--design-token-preview--size);

    &.-sm {
        --design-token-preview--size: var(--design-token-preview--sm--size);
        font-size: 32px;
    }

    &.-md {
        --design-token-preview--size: var(--design-token-preview--md--size);
        font-size: 48px;
    }

    &.-lg {
        --design-token-preview--size: var(--design-token-preview--lg--size);
        font-size: 56px;
    }

    &.-border {
        border-width: var(--border-width);
        border-style: var(--border-style);
        border-color: var(--border-color);
    }

    &.-box-shadow {
        box-shadow: var(--box-shadow-offset-x) var(--box-shadow-offset-y)
            var(--box-shadow-blur-radius) var(--box-shadow-spread-radius) var(--box-shadow-color);
    }

    &.-border-radius {
        border-radius: var(--border-radius);
    }

    &.-icon {
        line-height: 0;
        color: var(--text--color-weaker);
    }

    &.-background[class*='-token-color'] {
        background: var(--design-token);
    }

    &.-text[class*='-token-color'] {
        color: var(--design-token);
    }

    &.-token-border-top-width,
    &.-token-border-top-style,
    &.-token-border-top-color {
        border-style: dashed;
        border-top-style: var(--border-top-style);
    }

    &.-token-border-right-width,
    &.-token-border-right-style,
    &.-token-border-right-color {
        border-style: dashed;
        border-right-style: var(--border-right-style);
    }

    &.-token-border-bottom-width,
    &.-token-border-bottom-style,
    &.-token-border-bottom-color {
        border-style: dashed;
        border-bottom-style: var(--border-bottom-style);
    }

    &.-token-border-left-width,
    &.-token-border-left-style,
    &.-token-border-left-color {
        border-style: dashed;
        border-left-style: var(--border-left-style);
    }

    &.-token-border-top-left-radius,
    &.-token-border-top-right-radius,
    &.-token-border-bottom-left-radius,
    &.-token-border-bottom-right-radius {
        border-style: dashed;
        border-radius: 0;
    }

    &.-token-border-top-left-radius {
        border-top-style: var(--border-top-style);
        border-left-style: var(--border-left-style);
        border-top-left-radius: var(--design-token);
    }

    &.-token-border-top-right-radius {
        border-top-style: var(--border-top-style);
        border-right-style: var(--border-right-style);
        border-top-right-radius: var(--design-token);
    }

    &.-token-border-bottom-right-radius {
        border-bottom-style: var(--border-bottom-style);
        border-right-style: var(--border-right-style);
        border-bottom-right-radius: var(--design-token);
    }

    &.-token-border-bottom-left-radius {
        border-bottom-style: var(--border-bottom-style);
        border-left-style: var(--border-left-style);
        border-bottom-left-radius: var(--design-token);
    }

    &.-token-border-radius {
        border-radius: var(--design-token);
    }

    &.-token-box-shadow-offset-x {
        box-shadow: 1rem 0 var(--box-shadow-blur-radius) var(--box-shadow-spread-radius)
            rgba(0, 0, 0, 0.5);
    }

    &.-token-box-shadow-offset-y {
        box-shadow: 0 1rem var(--box-shadow-blur-radius) var(--box-shadow-spread-radius)
            rgba(0, 0, 0, 0.5);
    }

    &.-token-box-shadow-blur-radius {
        box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.5);
    }

    &.-token-box-shadow-spread-radius {
        box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.1);
    }

    &[class*='-font-size'] {
        font-size: var(--design-token);
    }

    &[class*='-font-weight'] {
        font-weight: var(--design-token);
    }

    &[class*='-font-family'] {
        font-family: var(--design-token);
    }

    //&.-color,
    //&.-contrast-text {
    //    color: var(--design-token);
    //}

    &[class*='-margin'],
    &[class*='-padding'] {
        width: auto;
        height: auto;
        background-color: hsla(
            var(--color-yellow-h),
            var(--color-yellow-s),
            var(--color-yellow-l),
            0.25
        );
    }

    &[class*='-margin'] {
        border: 0;
        border-radius: 0;

        span {
            width: var(--design-token-preview--size);
            height: var(--design-token-preview--size);
            color: var(--design-token);
            border-radius: var(--border-radius);
            border-width: var(--border-width);
            border-style: var(--border-style);
            border-color: var(--border-color);
            background-color: var(--color-light);
        }
    }

    &[class*='-margin-top'] span {
        margin-top: var(--design-token);
    }

    &[class*='-margin-right'] span {
        margin-right: var(--design-token);
    }

    &[class*='-margin-bottom'] span {
        margin-bottom: var(--design-token);
    }

    &[class*='-margin-left'] span {
        margin-left: var(--design-token);
    }

    &[class*='-margin']:not([class*='-margin-top']):not([class*='-margin-right']):not(
            [class*='-margin-bottom']
        ):not([class*='-margin-left'])
        span {
        margin: var(--design-token);
    }

    &[class*='-padding'] {
        span {
            width: var(--design-token-preview--size);
            height: var(--design-token-preview--size);
            color: var(--design-token);
            background-color: var(--color-light);
        }
    }

    &[class*='-padding-top'] {
        padding-top: var(--design-token);
    }

    &[class*='-padding-right'] {
        padding-right: var(--design-token);
    }

    &[class*='-padding-bottom'] {
        padding-bottom: var(--design-token);
    }

    &[class*='-padding-left'] {
        padding-left: var(--design-token);
    }

    &[class*='-padding']:not([class*='-padding-top']):not([class*='-padding-right']):not(
            [class*='-padding-bottom']
        ):not([class*='-padding-left']) {
        padding: var(--design-token);
    }
}
</style>
