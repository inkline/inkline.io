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
    <IAlert class="content-alert" :color="color">
        <template #icon>
            <IIcon :name="icon" />
        </template>
        <slot />
    </IAlert>
</template>

<style lang="scss">
.content-alert {
    .content {
        p {
            margin-bottom: 0;
        }
    }
}
</style>
