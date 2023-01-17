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
    <ul class="app-sidebar-apps _list:unstyled">
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
                <Icon name="ri:external-link-fill" class="_text:weakest _margin-left:1/4" />
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
                <Icon name="ri:external-link-fill" class="_text:weakest _margin-left:1/4" />
            </a>
        </li>
        <li>
            <a href="https://github.com/inkline/inkline/releases" target="_blank">
                <IBadge color="warning">
                    <Icon name="fa-solid:list" size="16" />
                </IBadge>
                <span>
                    Changelog
                    <span class="_visually-hidden">{{ t('common.opensNewWindow') }}</span>
                </span>
                <Icon name="ri:external-link-fill" class="_text:weakest _margin-left:1/4" />
            </a>
        </li>
        <li>
            <a href="https://chat.inkline.io" target="_blank">
                <IBadge color="dark">
                    <Icon name="fa-solid:comments" size="16" />
                </IBadge>
                <span>
                    Community
                    <span class="_visually-hidden">{{ t('common.opensNewWindow') }}</span>
                </span>
                <Icon name="ri:external-link-fill" class="_text:weakest _margin-left:1/4" />
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.app-sidebar-apps {
    padding-top: var(--article--padding-top);
    padding-bottom: var(--padding-bottom-2);
    margin: 0 var(--margin-right-1-2) 0 0;

    li {
        margin: 0;

        &:last-child {
            margin-bottom: 0;
        }

        a {
            display: flex;
            align-items: center;
            padding: var(--padding-1-2);
            border-radius: var(--border-radius);
            color: var(--body--color);
            text-decoration: none;
            transition: background-color var(--transition-duration)
                var(--transition-timing-function);
            outline: 0;

            &:hover,
            &:focus {
                background: rgba(0, 0, 0, 0.075);

                .-storybook {
                    --sidebar--background: #dc3971;
                }
            }
        }

        &.-active a {
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
