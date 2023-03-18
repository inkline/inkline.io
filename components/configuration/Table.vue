<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        type: {
            type: String,
            default: ''
        }
    }
});
</script>

<template>
    <ul :class="`configuration-table -${type}`">
        <slot />
    </ul>
</template>

<style lang="scss">
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.configuration-table {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top-width: var(--border-top-width);
    border-bottom-width: var(--border-bottom-width);
    border-top-style: var(--border-top-style);
    border-bottom-style: var(--border-bottom-style);
    border-top-color: var(--border-top-color);
    border-bottom-color: var(--border-bottom-color);
    transition-property: border;
    transition-timing-function: var(--transition-easing);
    transition-duration: var(--transition-duration);

    .tbody {
        padding: var(--padding);
        border-bottom: 1px solid var(--border-color--light);
        margin: 0;
        transition-property: border;
        transition-timing-function: var(--transition-easing);
        transition-duration: var(--transition-duration);

        &:last-child {
            border-bottom: 0;
        }

        .tr {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            + .tr {
                margin-top: calc(var(--padding-top) / 2);
            }

            .td {
                + .td {
                    margin-left: calc(var(--margin-left) / 2);
                }

                span {
                    display: block;
                    font-weight: var(--font-weight-semibold);
                    font-size: var(--font-size-sm);
                    color: var(--text--color-weak);
                    margin-bottom: calc(var(--margin-bottom) / 4);
                }

                code {
                    background: var(--color-gray-50);
                    white-space: nowrap;
                    overflow: auto;
                    width: 100%;
                    display: block;
                }

                &.property-name {
                    > div {
                        display: flex;
                        align-items: center;
                    }

                    .inkline-icon {
                        margin-right: calc(var(--margin-right) / 2);
                    }

                    code {
                        width: auto;
                    }
                }

                &:not(.property-name) {
                    code {
                        color: var(--body--color);
                    }
                }
            }
        }
    }

    &.-css-variables {
        .tbody .tr:first-child {
            .td {
                width: 50%;
            }
        }
    }

    &.-props {
        .tbody .tr:first-child .td {
            width: 33.3333%;
        }
    }

    &.-slots {
        .tbody .tr:first-child .td {
            width: 100%;
        }
    }

    .tbody .tr:first-child {
        @include breakpoint-down('sm') {
            flex-direction: column;

            .td {
                width: 100% !important;
                margin: 0;
            }
        }
    }
}
</style>
