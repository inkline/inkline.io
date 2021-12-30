<script lang="ts">
import { ref, defineComponent, onMounted, Ref } from 'vue';
import prism from 'prismjs';
import copy from 'copy-to-clipboard';

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
    setup (props) {
        const active = ref('html');
        const copied = ref(false);
        const htmlBlock = ref(null);
        const cssBlock = ref(null);
        const jsBlock = ref(null);

        const refs: {
            [key: string]: Ref
        } = {
            html: htmlBlock,
            css: cssBlock,
            js: jsBlock
        };

        const copyToClipboard = () => {
            copy((props as any)[active.value]);

            copied.value = true;
            setTimeout(() => {
                copied.value = false;
            }, 3000);
        };

        onMounted(() => {
            ['html', 'css', 'js'].forEach((block) => {
                if ((props as any)[block] && refs[block]) {
                    prism.highlightElement(refs[block].value);
                }
            });
        });

        return {
            active,
            copied,
            htmlBlock,
            cssBlock,
            jsBlock,
            copyToClipboard
        };
    }
});
</script>

<template>
    <i-card class="example">
        <div class="example-body">
            <slot>
                <component :is="component" v-if="component" />
            </slot>
        </div>

        <template #footer>
            <i-tabs v-model="active" class="example-tabs">
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
                    <pre><code ref="htmlBlock" class="language-html">{{ html }}</code></pre>
                </i-tab>
                <i-tab v-if="css" name="css">
                    <pre><code ref="cssBlock" class="language-sass">{{ css }}</code></pre>
                </i-tab>
                <i-tab v-if="js" name="js">
                    <pre><code ref="jsBlock" class="language-js">{{ js }}</code></pre>
                </i-tab>
                <i-button class="clipboard" size="sm" @click="copyToClipboard">
                    <i-icon v-if="copied" name="ink-check" class="_text:success" />
                    <i-icon v-else name="far-clone" />
                </i-button>
            </i-tabs>
        </template>
    </i-card>
</template>

<style lang="scss">
@import "@inkline/inkline/css/variables";
@import "@inkline/inkline/css/mixins";
@import "@inkline/inkline/css/preview";

.example {
    ----padding: #{spacing('1/2')};

    .example-body {
        display: block;
        width: 100%;
        box-sizing: border-box;

        > * {
            margin: spacing('1/2');
        }

        > .header {
            width: auto;
        }

        .layout + .layout {
            margin-top: spacing();
        }

        @extend %border-utilities-preview;
        @extend %color-utilities-preview;
        @extend %flex-utilities-preview;
        @extend %spacing-utilities-preview;
        @extend %card-preview;
        @extend %layout-preview;
        @extend %grid-preview;
    }

    .example-tabs {
        .tabs-header {
            justify-content: flex-end;

            .tab-title {
                min-width: 100px;
            }
        }

        .clipboard {
            position: absolute;
            top: calc(var(--spacing) * 2 + 56px);
            right: calc(var(--spacing) * 2);
            width: 32px;
            height: 32px;
            padding: 0;

            @include variant('light') {
                ----background: var(--color--white);
            }

            @include variant('dark') {
                ----background: var(--color--dark);
            }
        }
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

    @include variant('dark') {
        > .card-body {
            ----body--background: var(--color--dark-65);
        }

        > .card-footer {
            ----footer--background: var(--color--dark-70);
        }

        .example-tabs {
            ----header--background: var(--color--dark-65);
            ----header--background--active: var(--color--dark-65);
            ----header--background--hover: var(--color--dark-60);
            ----background: var(--color--dark-65);
        }
    }
}
</style>
