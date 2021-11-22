<script lang="ts">
import { defineComponent } from 'vue';
import logoWhite from "~/assets/images/brands/osawards-white.svg";
import logoBlack from "~/assets/images/brands/osawards-black.svg";
import { colorVariantClass } from '@inkline/inkline/mixins';

export default defineComponent({
    props: {
        color: {
            type: String,
            default: ''
        }
    },
    setup() {
        return { logoWhite, logoBlack };
    },
    computed: {
        classes() {
            return {
                ...colorVariantClass(this),
            };
        }
    }
});
</script>

<template>
    <div :class="['osawards', classes]">
        <img class="logo -white" :src="logoWhite" alt="Open Source Awards - Developer Experience - Vue.js London 2019">
        <img class="logo -black" :src="logoBlack" alt="Open Source Awards - Developer Experience - Vue.js London 2019">
        <div class="description">
            <strong class="title">Open Source Awards </strong>
            <span class="category">Developer Experience Nominee</span>
            <span class="location">Vue.js London 2019</span>
        </div>
    </div>
</template>

<style lang="scss">
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.osawards {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    background: hsla(var(--color--primary--h), var(--color--primary--s), var(--color--primary--l), 0.1);
    border: 1px solid hsla(var(--color--primary--h), var(--color--primary--s), var(--color--primary--l), 0.2);
    padding: spacing() calc(#{spacing()} * 1.75);
    border-radius: border-radius();
    box-shadow: var(--box-shadow-offset-x) var(--box-shadow-offset-y) var(--box-shadow-blur-radius) var(--box-shadow-spread-radius) var(--box-shadow-color);
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--transition-easing);
    transition-property: color, background-color;

    .logo {
        display: inline-flex;
        height: 80px;
        width: auto;
    }

    @include variant('light') {
        .logo.-white {
            display: none;
        }
    }

    @include variant('dark') {
        .logo.-black {
            display: none;
        }
    }

    .description {
        margin-left: spacing();
        display: inline-flex;
        flex-direction: column;

        .title {
            font-size: heading-font-size('h5');
        }

        .category {
            font-size: 14px;
        }

        .location {
            font-size: 14px;
            opacity: 0.5;
        }
    }
}
</style>
