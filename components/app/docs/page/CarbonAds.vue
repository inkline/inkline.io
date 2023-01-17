<script lang="ts">
import { defineComponent, ref, nextTick, onMounted } from 'vue';

export default defineComponent({
    setup() {
        const carbonads = ref<HTMLElement | null>(null);

        const loadAds = () => {
            if (carbonads.value) {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.id = '_carbonads_js';
                script.src = '//cdn.carbonads.com/carbon.js?serve=CEAICK7U&placement=wwwinklineio';

                carbonads.value.appendChild(script);
            }
        };

        onMounted(() => {
            nextTick(() => {
                loadAds();
            });
        });

        return {
            carbonads
        };
    }
});
</script>

<template>
    <div ref="carbonads" />
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';

#carbonads {
    * {
        margin: initial;
        padding: initial;
    }

    display: flex;
    max-width: 100%;
    z-index: 100;

    a {
        color: inherit;
        text-decoration: none;

        &:hover {
            color: inherit;
        }
    }

    span {
        position: relative;
        display: block;
        overflow: hidden;
    }

    .carbon-wrap {
        margin-top: var(--margin-top);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .carbon-img {
        display: block;
        margin: 0;
        line-height: 1;

        img {
            display: block;
        }
    }

    .carbon-text {
        font-size: var(--font-size-sm);
        padding: var(--padding-top) 0 var(--padding-bottom) var(--padding-left);
        margin-bottom: var(--margin-bottom);
        line-height: var(--line-height);
        text-align: right;
    }

    .carbon-poweredby {
        display: block;
        padding: 6px 8px;
        background: rgba(0, 0, 0, 0.1);
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: 600;
        font-size: 8px;
        line-height: 1;
        border-top-left-radius: 3px;
        position: absolute;
        bottom: 0;
        right: 0;
    }
}
</style>
