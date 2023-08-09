<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import copyToClipboard from 'copy-to-clipboard';
import { useToast } from '@inkline/inkline';

export default defineComponent({
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const { t } = useI18n();
        const copied = ref(false);
        const copyTimeout = ref<NodeJS.Timeout | string | number | undefined>();

        function onCopyToClipboard() {
            copyToClipboard(props.modelValue);

            if (copyTimeout.value) {
                clearTimeout(copyTimeout.value);
            }

            copied.value = true;
            copyTimeout.value = setTimeout(() => {
                copied.value = false;
            }, 2000);
        }

        function onUpdateTooltipVisibility(visible: boolean) {
            if (!visible) {
                copied.value = false;
            }
        }

        return { t, copied, onCopyToClipboard, onUpdateTooltipVisibility };
    }
});
</script>

<template>
    <div class="copy-to-clipboard" :class="{ [`-${size}`]: size }">
        <IInput
            readonly
            :model-value="modelValue"
            :size="size"
            :type="type"
            :placeholder="placeholder"
        >
            <template #suffix>
                <ITooltip size="sm" @update:visible="onUpdateTooltipVisibility">
                    <IButton @click="onCopyToClipboard">
                        <Icon size="16" name="material-symbols:content-copy-outline" />
                    </IButton>
                    <template #body>
                        <span v-if="!copied">{{ t('common.copyToClipboard') }}</span>
                        <span v-else>
                            <Icon
                                name="material-symbols:check-circle"
                                size="18"
                                class="_color:success"
                            />
                            {{ t('common.copiedToClipboard') }}
                        </span>
                    </template>
                </ITooltip>
            </template>
        </IInput>
    </div>
</template>

<style lang="scss" scoped>
.copy-to-clipboard {
    position: relative;
    display: flex;

    .input-wrapper {
        --input--light--disabled--background: var(--color-white);

        :deep(.input-password-toggle) {
            margin-right: var(--margin-right);
        }
    }

    .tooltip-wrapper {
        .button {
            width: 32px;
            height: 32px;
            padding: 0;
        }
    }

    &.-sm {
        .tooltip-wrapper {
            .button {
                width: 24px;
                height: 24px;
            }
        }
    }
}
</style>
