<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAppsNavigation } from '~/composables';
import { useLocalePath } from 'vue-i18n-routing';

export default defineComponent({
    setup() {
        const navigation = useAppsNavigation();
        const { t } = useI18n();
        const localePath = useLocalePath();

        return {
            t,
            navigation,
            localePath
        };
    }
});
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
            <NuxtLink v-else :to="localePath(page.url)">
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
    padding-top: var(--article--padding-top);
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

                .-pink {
                    --sidebar--background: #dc3971;
                }
            }
        }

        .router-link-active {
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

        &.-pink {
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
