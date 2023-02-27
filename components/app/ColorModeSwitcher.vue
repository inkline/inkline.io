<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useInkline } from '@inkline/inkline';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    props: {
        tag: {
            type: [String, Object],
            default: 'a'
        }
    },
    setup() {
        const { t } = useI18n();

        const inkline = useInkline();
        const colorMode = computed<'light' | 'dark'>(() => inkline.options.colorMode);

        function toggleColorMode() {
            inkline.options.colorMode = colorMode.value === 'light' ? 'dark' : 'light';
        }

        return {
            t,
            colorMode,
            toggleColorMode
        };
    }
});
</script>

<template>
    <component
        :is="tag"
        class="_cursor:pointer"
        :title="
            t('navigation.switchColorMode', {
                colorMode: colorMode === 'light' ? 'dark' : 'light'
            })
        "
        @click="toggleColorMode"
    >
        <Icon v-if="colorMode === 'light'" name="fa6-solid:moon" size="20px" />
        <Icon v-else name="fa6-solid:sun" size="20px" />
    </component>
</template>
