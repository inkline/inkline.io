<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useAppsNavigation } from '~/composables';
import { useLocalePath } from '#i18n';

const navigation = useAppsNavigation();
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
    <ul class="app-sidebar-apps _list:unstyled">
        <li v-for="page in navigation" :key="page.title">
            <a v-if="page.external" :href="page.url" target="_blank">
                <IBadge :color="page.color">
                    <Icon :name="page.icon" size="16" />
                </IBadge>
                <span>
                    {{ page.title }}
                    <span class="_visually-hidden">
                        {{ t('common.opensNewWindow') }}
                    </span>
                </span>
                <Icon name="ri:external-link-fill" class="_text:weakest _margin-left:1/4" />
            </a>
            <NuxtLink v-else-if="page.url" :to="localePath(page.url)">
                <IBadge :color="page.color">
                    <Icon :name="page.icon" size="16" />
                </IBadge>
                <span>
                    {{ page.title }}
                </span>
            </NuxtLink>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.app-sidebar-apps {
    margin: 0 var(--margin-right-1-2) 0 0;

    li {
        margin: 0;

        &:last-child {
            margin-bottom: 0;
        }
    }

    a {
        display: flex;
        align-items: center;
        padding: var(--padding-1-2);
        border-radius: var(--border-radius);
        color: var(--body--color);
        text-decoration: none;
        transition: background-color var(--transition-duration) var(--transition-timing-function);
        outline: 0;

        &:hover,
        &:focus {
            .-pink {
                background: #dc3971;
            }
        }
    }

    .router-link-active {
        font-weight: var(--font-weight-semibold);
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

        &.-pink {
            background: #ff4785;
            border-color: #f33d7b;
            color: #ffffff;
        }

        :deep(img) {
            height: 18px;
            width: auto;
        }
    }
}
</style>
