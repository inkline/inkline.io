<script lang="ts">
import { computed, defineComponent } from 'vue';
import logoWhite from '~/assets/images/brands/osawards-white.svg';
import logoBlack from '~/assets/images/brands/osawards-black.svg';
import { useComponentColor } from '@inkline/inkline';

const componentName = 'OsAwards';

export default defineComponent({
    props: {
        color: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const currentColor = computed(() => props.color);
        const { color } = useComponentColor({ componentName, currentColor });

        const classes = computed(() => ({ [`-${color.value}`]: true }));

        return {
            classes,
            logoWhite,
            logoBlack
        };
    }
});
</script>

<template>
    <IAlert :class="['osawards', classes]">
        <template #icon>
            <img
                class="logo -light"
                height="80"
                width="80"
                :src="logoWhite"
                alt="Open Source Awards - Developer Experience - Vue.js London 2019"
            />
            <img
                class="logo -dark"
                height="80"
                width="80"
                :src="logoBlack"
                alt="Open Source Awards - Developer Experience - Vue.js London 2019"
            />
        </template>
        <div class="description">
            <strong class="title">Open Source Awards </strong>
            <span class="category">Developer Experience Nominee</span>
            <span class="location">Vue.js London 2019</span>
        </div>
    </IAlert>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

.osawards {
    --alert--info--border-top-color: var(--color-primary-shade-50);
    --alert--info--border-right-color: var(--color-primary-shade-50);
    --alert--info--border-bottom-color: var(--color-primary-shade-50);
    --alert--info--border-left-color: var(--color-primary-shade-50);
    --alert--info--background: hsla(
        var(--color-primary-h),
        var(--color-primary-s),
        var(--color-primary-l),
        0.1
    );

    display: inline-flex;

    .logo {
        height: 80px;
        width: auto;
    }

    &.-light {
        .logo.-light {
            display: none;
        }
    }

    &.-dark {
        --alert--info--color: var(--color-white);

        .logo.-dark {
            display: none;
        }
    }

    .description {
        text-align: left;
        display: inline-flex;
        flex-direction: column;

        .title {
            font-size: var(--font-size-xl);
        }

        .category {
            font-size: var(--font-size-md);
        }

        .location {
            font-size: var(--font-size-md);
            opacity: 0.5;
        }
    }
}
</style>
