<script lang="ts">
import { defineComponent } from 'vue';
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
        }
    },
    setup(props) {
        const { t } = useI18n();
        const { show: showToast } = useToast();

        function onCopyToClipboard() {
            copyToClipboard(props.modelValue);
            showToast({
                message: t('common.copiedToClipboard'),
                color: 'success'
            });
        }

        return { t, onCopyToClipboard };
    }
});
</script>

<template>
    <div class="copy-to-clipboard" :class="{ [`-${size}`]: size }">
        <ITooltip size="sm">
            <IButton @click="onCopyToClipboard">
                <Icon size="16" name="material-symbols:content-copy-outline" />
            </IButton>
            <template #body>
                <span>{{ t('common.copyToClipboard') }}</span>
            </template>
        </ITooltip>
        <IInput readonly :model-value="modelValue" :size="size" />
    </div>
</template>

<style lang="scss" scoped>
.copy-to-clipboard {
    position: relative;
    display: inline-block;

    .tooltip-wrapper {
        position: absolute;
        right: 6px;
        top: 6px;
        z-index: 1;

        .button {
            width: 32px;
            height: 32px;
            padding: 0;
        }
    }

    .input-wrapper {
        --input--light--disabled--background: var(--color-white);
    }

    &.-sm {
        .tooltip-wrapper {
            right: 4px;
            top: 4px;

            .button {
                width: 24px;
                height: 24px;
            }
        }
    }
}
</style>
