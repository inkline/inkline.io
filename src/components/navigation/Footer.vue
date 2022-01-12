<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup () {
        const { t } = useI18n();
        const year = (new Date()).getFullYear();

        return {
            t,
            year
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
                            <a href="https://github.com/inkline/inkline" target="_blank" rel="noopener">
                                <icon-fa-brands-github />
                                <span class="_visually-hidden">GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/inkline" target="_blank" rel="noopener">
                                <icon-fa-brands-twitter />
                                <span class="_visually-hidden">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.gg/hpus7x2n" target="_blank" rel="noopener">
                                <icon-fa-brands-discord />
                                <span class="_visually-hidden">Discord</span>
                            </a>
                        </li>
                    </ul>
                </i-column>
            </i-row>
            <i-row class="lead">
                <i-column center>
                    <div class="_display:flex _align-items:center _justify-content:center _flex-wrap:wrap">
                        Designed and built with
                        <icon-fa-solid-heart class="_margin-x:1/2" />
                        by
                        <a href="https://grozav.com" target="_blank" rel="noopener" class="_margin-left:1/2">@alexgrozav</a>
                    </div>
                </i-column>
            </i-row>
            <i-row class="_text:muted _margin-top:1">
                <i-column>
                    Copyright &copy; 2017-{{ year }}, Inkline
                </i-column>
            </i-row>
        </i-container>
    </footer>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

footer {
    background: var(--color--gray-90);
    color: var(--color--white);
    padding: calc(var(--spacing) * 4) 0;
    text-align: center;

    ul {
        li {
            --list--padding--inline: 1.5rem;
        }

        svg {
            font-size: 2rem;

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
