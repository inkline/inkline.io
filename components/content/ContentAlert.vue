<script lang="ts">
import { defineComponent } from 'vue';

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
                case 'success':
                    return 'ink-check';
                case 'warning':
                    return 'ink-warning';
                case 'danger':
                    return 'ink-danger';
                default:
                    return 'ink-info';
            }
        });

        return {
            icon
        };
    }
});
</script>

<template>
    <IAlert :color="color">
        <template #icon>
            <IIcon :name="icon" />
        </template>
        <slot />
    </IAlert>
</template>
