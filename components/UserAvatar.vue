<script lang="ts">
import { computed, defineComponent } from 'vue';
import type { PropType } from 'vue';

interface User {
    name: string;
}

export default defineComponent({
    props: {
        user: {
            type: Object as PropType<User>,
            default: () => ({ name: '' })
        },
        size: {
            type: String,
            default: 'md'
        }
    },
    setup(props) {
        const initials = computed(() => {
            return props.user.name
                .split(' ')
                .map((name) => name[0])
                .slice(0, 2)
                .join('');
        });

        return {
            initials
        };
    }
});
</script>

<template>
    <IButton class="user-avatar" circle color="secondary" :size="size">
        {{ initials }}
    </IButton>
</template>
