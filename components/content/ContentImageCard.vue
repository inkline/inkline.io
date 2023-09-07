<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useLocalePath } from 'vue-i18n-routing';
import { useTelemetry } from '~/composables';

export default defineComponent({
    props: {
        src: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
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
    <ICard class="image-card">
        <div class="image">
            <img v-if="src" :src="src" :alt="`${alt || title} - Inkline`" />
            <Icon v-else :name="icon" size="30" />
        </div>
        <div class="title">
            {{ title }}
            <small v-if="subtitle" class="_text:weaker">{{ subtitle }}</small>
        </div>
        <slot />
    </ICard>
</template>

<style lang="scss">
.image-card {
    .card-body {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition-property: background-color, border-color, color;
        transition-timing-function: var(--transition-timing-function);
        transition-duration: var(--transition-duration);
    }

    .image {
        width: 40px;
        height: 30px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: var(--margin-right);

        img {
            height: 100%;
            width: auto;
        }
    }
}
</style>
