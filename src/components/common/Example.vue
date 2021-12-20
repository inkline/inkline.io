<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
    name: 'Example',
    props: {
        color: {
            type: String,
            default: ''
        },
        component: {
            type: Object,
            default: null
        },
        html: {
            type: String,
            default: ''
        },
        css: {
            type: String,
            default: ''
        },
        js: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        }
    },
    setup () {
        const active = ref('html');
        return {
            active
        };
    }
});
</script>

<template>
    <i-card :class="['example', classes]">
        <div class="example-body">
            <slot>
                <component :is="component" v-if="component" />
            </slot>
        </div>

        <i-tabs v-model="active">
            <template #header>
                <i-tab-title v-if="html" for="html">
                    HTML
                </i-tab-title>
                <i-tab-title v-if="css" for="css">
                    CSS
                </i-tab-title>
                <i-tab-title v-if="js" for="js">
                    JS
                </i-tab-title>
            </template>
            <i-tab v-if="html" name="html">
                <pre>{{ html }}</pre>
            </i-tab>
            <i-tab v-if="css" name="css">
                <pre>{{ css }}</pre>
            </i-tab>
            <i-tab v-if="js" name="js">
                <pre>{{ js }}</pre>
            </i-tab>
        </i-tabs>
    </i-card>
</template>

<style lang="scss">
@import "@inkline/inkline/css/variables";
@import "@inkline/inkline/css/mixins";
@import "@inkline/inkline/css/preview";

.example {
    .example-body {
        display: block;
        width: 100%;
        box-sizing: border-box;

        > * {
            margin: spacing('1/2');
        }

        @extend %border-utilities-preview;
        @extend %color-utilities-preview;
        @extend %flex-utilities-preview;
        @extend %spacing-utilities-preview;
        @extend %card-preview;
        @extend %layout-preview;
        @extend %grid-preview;
    }

    + .example {
        margin-top: spacing();
    }

    &.-no-margin {
        padding: spacing();

        > .body {
            > * {
                margin: 0;
            }
        }
    }
}
</style>
