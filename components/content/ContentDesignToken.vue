<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useDesignToken } from '~/composables/useDesignToken';
import { sizeModifiersList } from '~/constants';

export default defineComponent({
    props: {
        title: {
            type: String,
            default: ''
        },
        icon: {
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

        const token = computed(() => props.token);
        const { propertyName, modifierName, tokenType, cssVariable } = useDesignToken(token);

        const codeType = computed(() => {
            if (tokenType.value === 'generic' && modifierName.value) {
                if (propertyName.value === 'size-multiplier') {
                    return 'pow-multiplier';
                } else if (sizeModifiersList.includes(modifierName.value)) {
                    return 'size-multiplier';
                }
            }

            return tokenType.value;
        });

        const previewProps = computed(() => {
            if (tokenType.value === 'text') {
                return { text: true, background: false };
            } else if (tokenType.value === 'spacing') return { childElement: true };

            return {};
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
            previewProps,
            codeType,
            toggleIsActive
        };
    }
});
</script>

<template>
    <div class="design-token" :class="{ [`-${size}`]: true }" :style="styles">
        <div class="_margin-right:1">
            <ExampleDesignTokensPreview
                :token="token"
                :icon="icon"
                :size="size"
                v-bind="previewProps"
            />
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
                        <ExampleDesignTokensCode :type="codeType" :token="token" />
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
    padding: var(--padding);
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;

    .design-token {
        margin-left: 0;
        margin-right: 0;
    }

    .design-token-content {
        display: block;
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
            max-width: 100%;

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
