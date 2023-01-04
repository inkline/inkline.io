<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();

        return {
            t
        };
    }
});
</script>
<template>
    <ul id="sidebar-apps" class="_list:unstyled">
        <li class="-active">
            <NuxtLink :to="{ path: '/docs' }">
                <IBadge color="primary">
                    <Icon name="fa-solid:book" size="16" />
                </IBadge>
                <span>Documentation</span>
            </NuxtLink>
        </li>
        <li>
            <a href="https://storybook.next.inkline.io/" target="_blank">
                <IBadge color="pink" class="-storybook">
                    <Icon name="simple-icons:storybook" size="16" />
                </IBadge>
                <span>
                    Storybook
                    <span class="_visually-hidden">{{ t('common.opensNewWindow') }}</span>
                </span>
            </a>
        </li>
        <li>
            <a href="https://stackblitz.com/edit/inkline?file=src/App.vue" target="_blank">
                <IBadge color="secondary">
                    <Icon name="fa-solid:code" size="16" />
                </IBadge>
                <span>
                    Playground
                    <span class="_visually-hidden">{{ t('common.opensNewWindow') }}</span>
                </span>
            </a>
        </li>
        <!--<li>-->
        <!--    <a href="https://github.com/inkline/inkline/releases" target="_blank">-->
        <!--        <IBadge color="warning">-->
        <!--            <Icon name="fa-solid:list" size="16" />-->
        <!--        </IBadge>-->
        <!--        <span>-->
        <!--            Changelog-->
        <!--            <span class="_visually-hidden">{{ t('common.opensNewWindow') }}</span>-->
        <!--        </span>-->
        <!--    </a>-->
        <!--</li>-->
        <li>
            <a href="https://chat.inkline.io" target="_blank">
                <IBadge color="dark">
                    <Icon name="fa-solid:comments" size="16" />
                </IBadge>
                <span>
                    Community
                    <span class="_visually-hidden">{{ t('common.opensNewWindow') }}</span>
                </span>
            </a>
        </li>
    </ul>
</template>

<style lang="scss">
#sidebar-apps {
    padding-top: var(--padding-top-2);
    padding-bottom: var(--padding-bottom-2);
    margin: 0;

    li {
        margin-bottom: var(--margin-bottom);

        a {
            display: flex;
            align-items: center;
            text-decoration: none;

            .-light & {
                color: var(--color-gray-800);
            }

            .-dark & {
                color: var(--color-gray-200);
            }

            &:hover .-storybook,
            &:focus .-storybook {
                --sidebar--background: #dc3971;
            }
        }

        &.-active a {
            .-light & {
                color: var(--color-gray-900);
            }

            .-dark & {
                color: var(--color-gray-50);
            }

            font-weight: var(--font-weight-semibold);
        }
    }

    .badge {
        width: 28px;
        height: 28px;
        padding: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: var(--margin-right-1-2);
        transition: background var(--transition-duration) var(--transition-easing);

        &.-storybook {
            --badge--background: #ff4785;
            --badge--border-color: #f33d7b;
            --badge--color: #ffffff;
        }

        :deep(img) {
            height: 18px;
            width: auto;
        }
    }
}
</style>
