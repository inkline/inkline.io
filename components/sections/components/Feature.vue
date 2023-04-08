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
        image: {
            type: String,
            default: ''
        }
    }
});
</script>

<template>
    <div class="section-feature">
        <img :src="image" :alt="`Inkline - Vue.js UI UX DX Library - ${title}`" />
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.section-feature {
    text-align: center;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: calc(var(--margin-top) * 1.5);
    }

    p {
        color: var(--text-muted);
    }

    img {
        height: 75px;
        width: auto;
        margin-bottom: var(--margin-bottom);
    }
}

.feature-box-link {
    .feature-box {
        transition-property: box-shadow, background-color;
        transition-duration: var(--transition-duration);
        transition-timing-function: var(--transition-timing-function);
    }

    &:hover {
        text-decoration: none;

        .feature-box {
            box-shadow: 0 0 var(--margin-bottom) rgba(0, 0, 0, 0.15);
        }
    }
}
</style>
