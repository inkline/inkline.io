<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { CollapsibleNavigationPage, navigation } from '~/constants';

export default defineComponent({
    setup() {
        const route = useRoute();
        const { t } = useI18n();

        function isActiveCategory(category: CollapsibleNavigationPage) {
            const { path } = category.url || {};
            const { fullPath } = route;

            if (category.active) {
                return category.active.test(fullPath);
            }

            return !!path && fullPath.startsWith(path);
        }

        const menu = computed(() =>
            navigation.map(
                (category, categoryIndex): CollapsibleNavigationPage => ({
                    ...category,
                    id: `category-${categoryIndex}`,
                    current: isActiveCategory(category)
                })
            )
        );

        const activeCategories = computed(() =>
            menu.value.filter(isActiveCategory).map((category) => category.id)
        );

        return {
            t,
            menu,
            activeCategories
        };
    }
});
</script>
<template>
    <ICollapsible
        class="app-sidebar-navigation"
        color="transparent"
        :model-value="activeCategories"
    >
        <template v-for="(category, categoryIndex) in menu" :key="categoryIndex">
            <NuxtLink v-if="category.url" :to="localePath(category.url)">
                {{ category.title }}
            </NuxtLink>
            <ICollapsibleItem
                v-else
                :class="`sidebar-category ${category.current ? '-current' : ''}`"
                :name="`category-${categoryIndex}`"
            >
                <template #header>
                    <span>
                        {{ category.title }}
                    </span>
                </template>
                <ul v-if="category.children" class="sidebar-category-menu">
                    <li
                        v-for="(page, pageIndex) in category.children"
                        v-show="!page.hidden"
                        :key="`${categoryIndex}-${pageIndex}`"
                        class="sidebar-page"
                    >
                        <NuxtLink v-if="page.url" :to="localePath(page.url)">
                            {{ page.title }}
                        </NuxtLink>
                        <span v-else>
                            {{ page.title }}
                        </span>
                        <ul v-if="page.children" class="sidebar-page-menu">
                            <li
                                v-for="(subpage, subpageIndex) in page.children"
                                :key="`${categoryIndex}-${pageIndex}-${subpageIndex}`"
                                class="sidebar-subpage"
                            >
                                <NuxtLink v-if="subpage.url" :to="localePath(subpage.url)">
                                    {{ subpage.title }}
                                </NuxtLink>
                                <span v-else>
                                    {{ subpage.title }}
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </ICollapsibleItem>
        </template>
    </ICollapsible>
</template>

<style lang="scss" scoped>
.app-sidebar-navigation {
    --collapsible--padding-top: 0;
    --collapsible--padding-right: 0;
    --collapsible--padding-bottom: 0;
    --collapsible--padding-left: 0;
    --collapsible--header--padding-right: var(--padding-right-1-2);

    padding-right: var(--padding-right-1-2);

    > * {
        margin-bottom: 2px;
    }

    :deep(.icon) {
        opacity: 0.25;
    }

    :deep(.collapsible-header),
    > a {
        outline: 0;
        border-radius: var(--border-radius);
        transition: background-color var(--transition-duration) var(--transition-timing-function);

        &:hover,
        &:focus {
            background: rgba(0, 0, 0, 0.075) !important;
        }
    }

    .collapsible-header span,
    > a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--app-sidebar-navigation--padding, var(--padding-1-2));
        font-weight: var(--font-weight-semibold);
        color: var(--body--color);

        &.router-link-active {
            color: var(--color-primary);
        }
    }

    :deep(.sidebar-category) {
        &.-current {
            --collapsible--icon--color: var(--color-primary);

            .icon {
                opacity: 1;
            }
        }

        .sidebar-category-menu {
            margin: 0 0 0 var(--margin-left-1-2);
        }

        .sidebar-page-menu {
            margin: 0;
        }

        .sidebar-category-menu,
        .sidebar-page-menu {
            list-style: none;
            padding: 0;

            li {
                margin: 0;

                a,
                span {
                    transition-property: background-color, border-color;
                    transition-duration: var(--transition-duration);
                    transition-timing-function: var(--transition-easing);
                    display: flex;
                    border-left-style: var(--border-left-style);
                    border-left-width: var(--border-left-width);
                    outline: 0;

                    .-light & {
                        border-left-color: var(--color-light);
                    }

                    .-dark & {
                        border-left-color: var(--color-gray-700);
                    }

                    &.router-link-exact-active {
                        color: var(--color-primary) !important;
                        font-weight: var(--font-weight-semibold);
                        border-left-color: var(--color-primary);
                        border-left-width: 2px;
                    }
                }

                a {
                    .-light & {
                        color: var(--color-gray-700);
                    }

                    .-dark & {
                        color: var(--color-gray-300);
                    }

                    &:hover,
                    &:focus {
                        color: var(--color-primary);
                        border-left-color: var(--color-primary);
                    }
                }
            }
        }
    }

    .sidebar-page {
        > a,
        > span {
            padding-top: calc(var(--padding-top) / 2);
            padding-bottom: calc(var(--padding-bottom) / 2);
            padding-left: var(--padding-left);

            &.router-link-exact-active {
                padding-left: calc(var(--padding-left) - 1px);
            }
        }

        .sidebar-page-menu {
            > li {
                > a,
                > span {
                    padding-top: calc(var(--padding-top) / 2);
                    padding-bottom: calc(var(--padding-bottom) / 2);
                    padding-left: calc(var(--padding-left) * 2);

                    &.router-link-exact-active {
                        padding-left: calc(var(--padding-left) * 2 - 1px);
                    }
                }
            }
        }
    }
}
</style>
