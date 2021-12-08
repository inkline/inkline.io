<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const year = (new Date()).getFullYear();

        return {
            t,
            year,
        };
    }
});
</script>


<template>
    <footer>
        <i-container>
            <i-row>
                <i-column>
                    <ul class="list -inline">
                        <li>
                            <a href="https://github.com/inkline/inkline" target="_blank">
                                <i-icon name="fab-github" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/inkline" target="_blank">
                                <i-icon name="fab-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.gg/gzRpZysq" target="_blank">
                                <i-icon name="fab-discord" />
                            </a>
                        </li>
                    </ul>
                </i-column>
            </i-row>
            <i-row class="lead">
                <i-column>
                    Designed and built with <i-icon name="fas-heart" /> by <a href="https://grozav.com" target="_blank">@alexgrozav</a>.
                </i-column>
            </i-row>
            <i-row class="_text:muted _margin-top:1">
                <i-column>
                    Copyright &copy; 2017-{{year}}, Inkline
                </i-column>
            </i-row>
        </i-container>
    </footer>
</template>

<style lang="scss" scoped>
@import '~@inkline/inkline/css/variables';
@import '~@inkline/inkline/css/mixins';

footer {
    background: var(--color--gray-90);
    color: var(--color--white);
    padding: calc(var(--spacing) * 4) 0;
    text-align: center;

    ul {
        @include i-icon() {
            ----size: 2rem;

            color: var(--color--white);
            transition: color 0.3s ease;

            &:hover,
            &:focus {
                color: var(--color--gray-20);
            }

            &:active {
                color: var(--color--gray-40);
            }
        }
    }
}
</style>
