<script lang="ts">
import { computed, defineComponent } from 'vue';

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
        },
        link: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const imgAlt = computed(() => `Inkline - Vue.js UI UX DX Library - ${props.title}`);
        const linkAttrs = computed(() => ({
            href: props.link,
            ...(props.link.startsWith('http') ? { target: '_blank', rel: 'nofollow' } : {})
        }));

        return {
            imgAlt,
            linkAttrs
        };
    }
});
</script>

<template>
    <div class="section-feature">
        <a v-if="link" v-bind="linkAttrs">
            <img :src="image" :alt="imgAlt" height="75" width="75" />
        </a>
        <img v-else :src="image" :alt="imgAlt" height="75" width="75" />
        <h3>
            <a v-if="link" v-bind="linkAttrs">{{ title }}</a>
            <span v-else>{{ title }}</span>
        </h3>
        <p>{{ description }}</p>
    </div>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.section-feature {
    text-align: center;

    a {
        color: inherit;
        text-decoration: none;

        > img {
            margin-bottom: 0;
        }
    }

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

    > img {
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
