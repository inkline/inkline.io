<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const year = new Date().getFullYear();

        return {
            t,
            year
        };
    }
});
</script>

<template>
    <footer class="app-footer">
        <IContainer>
            <IRow>
                <IColumn>
                    <ul class="list -inline">
                        <li>
                            <a
                                href="https://github.com/inkline/inkline"
                                target="_blank"
                                rel="noopener"
                            >
                                <Icon name="fa-brands:github" />
                                <span class="_visually-hidden">GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/inkline" target="_blank" rel="noopener">
                                <Icon name="fa-brands:twitter" />
                                <span class="_visually-hidden">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://chat.inkline.io" target="_blank" rel="noopener">
                                <Icon name="fa-brands:discord" />
                                <span class="_visually-hidden">Discord</span>
                            </a>
                        </li>
                    </ul>
                </IColumn>
            </IRow>
            <IRow class="lead">
                <IColumn center>
                    <div
                        class="_display:flex _align-items:center _justify-content:center _flex-wrap:wrap"
                    >
                        Designed and built with
                        <Icon name="fa-solid:heart" class="_margin-x:1/2" />
                        by
                        <a
                            href="https://github.com/alexgrozav"
                            target="_blank"
                            rel="noopener"
                            class="_margin-left:1/2"
                        >
                            @alexgrozav
                        </a>
                    </div>
                </IColumn>
            </IRow>
            <IRow class="_text:muted _margin-top:1">
                <IColumn> Copyright &copy; 2017-{{ year }}, Inkline </IColumn>
            </IRow>
        </IContainer>
    </footer>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/css/mixins';

footer {
    background: var(--color-gray-900);
    color: var(--color-white);
    padding: var(--padding-top-4) 0 var(--padding-bottom-4);
    border-top: var(--border-top-width) var(--border-top-style) var(--border-top-color);
    text-align: center;

    ul {
        margin-bottom: var(--margin-bottom-2);

        li {
            --list--inline--item--margin-right: var(--margin-right-2);
        }

        svg {
            font-size: 2.5rem;
            color: var(--color-white);
            transition: opacity var(--transition-duration) var(--transition-timing-function);

            &:hover,
            &:focus {
                opacity: 0.8;
            }

            &:active {
                opacity: 0.6;
            }
        }
    }
}
</style>
