<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        button: {
            type: String,
            default: ''
        },
        to: {
            type: String,
            default: ''
        }
    },
    setup() {
        return {};
    }
});
</script>

<template>
    <ICard class="onboarding-card">
        <IMedia>
            <template v-if="$slots.image" #image>
                <slot name="image" />
            </template>
            <div class="onboarding-card-body">
                <slot name="title">
                    <h4>{{ title }}</h4>
                </slot>
                <slot name="description">
                    <p>{{ description }}</p>
                </slot>
            </div>
            <slot name="button">
                <IButton :to="to" color="primary">
                    {{ button }}
                </IButton>
            </slot>
        </IMedia>
    </ICard>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.onboarding-card {
    .media-body {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    h4 {
        margin-bottom: var(--margin-bottom-1-2);
    }

    p {
        margin-bottom: 0;
    }

    .button {
        margin-left: var(--margin-left);
    }

    @include breakpoint-down(sm) {
        .media-body {
            flex-direction: column;
            align-items: flex-start;
        }

        .button {
            margin-left: 0;
            margin-top: var(--margin-top-1-2);
        }
    }
}
</style>
