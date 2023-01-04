<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
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
    <ICollapsible class="sidebar-navigation" color="transparent" :model-value="activeCategories">
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
.sidebar-navigation {
    --collapsible--padding-top: 0;
    --collapsible--padding-right: 0;
    --collapsible--padding-bottom: 0;
    --collapsible--padding-left: 0;

    :deep(.icon) {
        opacity: 0.25;
    }

    .collapsible-header span,
    > a {
        padding-top: var(--padding-top-1-2);
        padding-bottom: var(--padding-bottom-1-2);
        padding-right: var(--padding-right);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: var(--font-weight-semibold);
        color: var(--body--color);

        &.router-link-active {
            color: var(--color-primary);
        }
    }

    .sidebar-category {
        --collapsible--header--padding-right: var(--padding-right);

        &.-current {
            --collapsible--icon--color: var(--color-primary);

            :deep(.icon) {
                opacity: 1;
            }
        }

        .sidebar-category-menu,
        .sidebar-page-menu {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                margin: 0;

                a,
                span {
                    transition-property: color, border-color;
                    transition-duration: var(--transition-duration);
                    transition-timing-function: var(--transition-easing);
                    display: flex;
                    border-left-style: var(--border-left-style);
                    border-left-width: var(--border-left-width);

                    .-light & {
                        border-left-color: var(--color-light);
                    }

                    .-dark & {
                        border-left-color: var(--color-dark);
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
