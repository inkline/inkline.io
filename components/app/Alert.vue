<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
    props: {
        color: {
            type: String,
            default: 'info'
        }
    },
    setup(props) {
        const icon = computed(() => {
            switch (props.color) {
                case 'danger':
                    return 'ink-danger';
                case 'info':
                    return 'ink-info';
                case 'success':
                    return 'ink-check';
                case 'warning':
                    return 'ink-warning';
                default:
                    return '';
            }
        });

        return { icon };
    }
});
</script>
<template>
    <IAlert :color="color">
        <template #icon>
            <slot name="icon">
                <IIcon :name="icon" />
            </slot>
        </template>
        <slot />
    </IAlert>
</template>
