<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
// import { navigation } from '~/constants';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';

// const pages = navigation
//     .map((group) =>
//         group.children
//             ? group.children.map((child) => ({
//                   ...child,
//                   title:
//                       group.title === 'Utilities' ? `${group.title} - ${child.title}` : child.title,
//                   group: group.title
//               }))
//             : group
//     )
//     .flat()
//     .map((entry) =>
//         entry.children
//             ? entry.children.map((child) => ({
//                   ...child,
//                   title: `${entry.title} - ${child.title}`
//               }))
//             : entry
//     )
//     .flat();

const pages = [];

const githubUrlTemplate = (path: string, isIndex?: boolean) =>
    `https://github.com/inkline/inkline.io/tree/main/content${path}${isIndex ? '/index' : ''}.md`;

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const route = useRoute();
        const previous = ref();
        const next = ref();
        const githubUrl = ref('');

        const setAdjacentRoutes = (route: RouteLocationNormalizedLoaded) => {
            const currentPageIndex = pages.findIndex((page) => page.url!.path === route.fullPath);
            const currentPage = pages[currentPageIndex];

            if (!currentPage) {
                return;
            }

            previous.value = currentPage.navigation?.previous
                ? pages.find((page) => page.url!.path === currentPage.navigation?.previous)
                : pages[currentPageIndex - 1];
            next.value = currentPage.navigation?.next
                ? pages.find((page) => page.url!.path === currentPage.navigation?.next)
                : pages[currentPageIndex + 1];

            githubUrl.value = githubUrlTemplate(route.path, currentPage.index);
        };

        watch(
            () => route.name,
            () => setAdjacentRoutes(route)
        );

        onMounted(() => {
            setAdjacentRoutes(route);
        });

        return {
            t,
            previous,
            next,
            githubUrl
        };
    }
});
</script>

<template>
    <footer class="app-docs-page-footer">
        <i-row>
            <i-column>
                <div v-if="previous" class="app-docs-page-footer-group -previous">
                    <icon-mdi-chevron-left />
                    <small class="_text:muted">
                        {{ t('common.previous') }}
                    </small>
                    <router-link :to="previous.url" class="_overlay-link">
                        {{ previous.title }}
                    </router-link>
                </div>
            </i-column>
            <i-column class="_text:right">
                <div v-if="next" class="app-docs-page-footer-group -next">
                    <small class="_text:muted">
                        {{ t('common.next') }}
                    </small>
                    <router-link :to="next.url" class="_overlay-link">
                        {{ next.title }}
                    </router-link>
                    <icon-mdi-chevron-right />
                </div>
            </i-column>
        </i-row>
        <hr class="_margin-top:2" />
        <i-row>
            <i-column>
                <p class="contribute">
                    {{ t('pageNavigation.footer.cta') }}
                    <a :href="githubUrl" rel="nofollow" target="_blank">
                        {{ t('pageNavigation.footer.edit') }}
                        <icon-fa-solid-external-link-alt height="10" />
                        <span class="_visually-hidden">
                            {{ t('common.opensNewWindow') }}
                        </span>
                    </a>
                </p>
            </i-column>
        </i-row>
    </footer>
</template>

<style lang="scss">
.app-docs-page-footer {
    position: relative;
    margin-top: calc(var(--spacing) * 4);

    .app-docs-page-footer-group {
        position: relative;
        display: inline-flex;
        flex-direction: column;

        svg {
            position: absolute;
            color: var(--text-muted);
            top: 50%;
            margin-top: -10px;
        }

        &.-previous {
            padding-left: calc(var(--spacing) * 2);

            svg {
                left: 0;
            }
        }

        &.-next {
            padding-right: calc(var(--spacing) * 2);
            text-align: right;
            margin-left: auto;

            svg {
                right: 0;
            }
        }
    }

    .contribute {
        color: var(--text-muted);
        font-size: var(--font-size--sm);
    }
}
</style>
