<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        title: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        codeType: {
            type: String,
            default: ''
        },
        previewType: {
            type: String,
            default: ''
        },
        valueType: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'md'
        },
        token: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const isActive = ref<Record<string, boolean>>({
            variants: false,
            code: false
        });

        const resolvedCodeType = computed(() => {
            return props.codeType || props.type;
        });

        const resolvedPreviewType = computed(() => {
            return props.previewType || props.type;
        });

        const cssVariable = computed(() => {
            return `var(${props.token})`;
        });

        const classes = computed(() => ({
            [`-${props.size}`]: true
        }));

        const styles = computed(() => ({
            '--design-token': cssVariable.value
        }));

        function toggleIsActive(key: string) {
            isActive.value = {
                ...isActive.value,
                [key]: !isActive.value[key]
            };
        }

        return {
            isActive,
            cssVariable,
            styles,
            classes,
            resolvedCodeType,
            resolvedPreviewType,
            toggleIsActive
        };
    }
});
</script>

<template>
    <div class="design-token" :class="{ [`-${size}`]: true }" :style="styles">
        <div class="_margin-right:1">
            <ExampleDesignTokensPreview :token="token" :size="size" />
        </div>
        <div class="design-token-content">
            <div class="design-token-header">
                <div class="design-token-title-and-value">
                    <h4 class="design-token-title">
                        {{ title }}
                    </h4>
                    <div class="design-token-value _text:weaker _text:sm">
                        <ExampleDesignTokensValue :token="token" />
                    </div>
                </div>
                <div class="design-token-actions">
                    <FormsCopyToClipboardInput
                        size="sm"
                        :model-value="cssVariable"
                        class="_margin-right:3/4"
                    />
                    <div class="design-token-buttons">
                        <ITooltip size="sm">
                            <IButton
                                v-show="$slots.variants"
                                :active="isActive.variants"
                                :color="isActive.variants ? 'primary' : ''"
                                @click="toggleIsActive('variants')"
                            >
                                <Icon name="icon-park-outline:components" />
                            </IButton>
                            <template #body> Variants </template>
                        </ITooltip>
                        <ITooltip size="sm">
                            <IButton
                                :active="isActive.code"
                                :color="isActive.code ? 'primary' : ''"
                                @click="toggleIsActive('code')"
                            >
                                <Icon name="tabler:code" />
                            </IButton>
                            <template #body> Code </template>
                        </ITooltip>
                    </div>
                </div>
            </div>
            <IRow class="design-token-description">
                <IColumn>
                    <div v-if="$slots.default">
                        <slot />
                    </div>
                    <div class="design-token-code" v-show="isActive.code">
                        <ExampleDesignTokensCodeColor
                            v-if="resolvedCodeType === 'color'"
                            :token="token"
                        />
                        <ExampleDesignTokensCodeBorderRadius
                            v-if="resolvedCodeType === 'border-radius'"
                            :token="token"
                        />
                        <ExampleDesignTokensCodeBorder
                            v-if="resolvedCodeType === 'border'"
                            :token="token"
                        />
                        <ExampleDesignTokensCodeBoxShadow
                            v-if="resolvedCodeType === 'box-shadow'"
                            :token="token"
                        />
                        <ExampleDesignTokensCodeGeneric v-else :token="token" />
                    </div>
                    <div v-if="$slots.variants" v-show="isActive.variants">
                        <slot name="variants" />
                    </div>
                </IColumn>
            </IRow>
        </div>
    </div>
</template>

<style lang="scss">
.design-token {
    margin-left: var(--margin-left);
    margin-right: var(--margin-right);
    padding: var(--padding-top) 0 var(--padding-bottom) 0;
    position: relative;
    display: flex;
    flex-direction: row;

    &.-variant {
        margin-left: 0;
        margin-right: 0;
    }

    .design-token-content {
        display: block;
        width: calc(100% - 80px - var(--margin-right));
        flex: 1 1 100%;

        .design-token-header {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;

            .design-token-title-and-value {
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex: 1;
            }

            .design-token-title {
                margin: 0 !important;
            }
        }

        .design-token-description {
            margin-top: var(--margin-top-1-2);
            flex: 1 1 auto;
        }

        .design-token-code {
            pre {
                max-width: 100%;
                overflow: auto;
            }
        }
    }

    + .design-token {
        border-top: 1px solid var(--border-top-color);
    }

    .design-token-values {
        pre {
            padding-top: var(--padding-top-1-2) !important;
            padding-bottom: var(--padding-bottom-1-2) !important;
            margin: var(--margin-1-4);
        }
    }

    .design-token-actions {
        display: flex;
        align-items: center;

        .design-token-buttons {
            margin-right: calc(-1 * var(--margin-right-1-4));
        }

        .button {
            padding: 0;
            width: 34px;
            height: 34px;
            margin-left: var(--margin-left-1-4);
            margin-right: var(--margin-right-1-4);
        }
    }
}
</style>
