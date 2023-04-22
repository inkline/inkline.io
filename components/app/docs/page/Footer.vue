<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useSidebarNavigation } from '~/composables';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import type { NavigationPage } from '~/types';

const githubUrlTemplate = (path: string, isIndex?: boolean) =>
    `https://github.com/inkline/inkline.io/tree/main/content${path}${isIndex ? '/index' : ''}.md`;

export default defineComponent({
    setup() {
        const navigation = useSidebarNavigation();
        const { t } = useI18n();
        const route = useRoute();
        const previous = ref();
        const next = ref();
        const githubUrl = ref('');

        const pages = navigation
            .reduce<NavigationPage[]>((pages, page) => {
                const { children, ...pageData } = page;

                if (pageData.url) {
                    pages.push(pageData);
                }

                if (children) {
                    pages.push(...children);
                }

                return pages;
            }, [])
            .filter((page) => !page.hidden)
            .reduce<NavigationPage[]>((pages, page) => {
                const { children, ...pageData } = page;

                if (pageData.url) {
                    pages.push({
                        ...pageData,
                        title: pageData.url.includes('/utilities')
                            ? `Utilities - ${pageData.title}`
                            : pageData.title
                    });
                }

                if (children) {
                    pages.push(
                        ...children.map((child) => ({
                            ...child,
                            title: `${pageData.title} - ${child.title}`
                        }))
                    );
                }

                return pages;
            }, []);

        const setAdjacentRoutes = (route: RouteLocationNormalizedLoaded) => {
            const currentPageIndex = pages.findIndex((page) => page.url === route.path);
            const currentPage = pages[currentPageIndex];
            if (!currentPage) {
                return;
            }

            console.log(pages);

            previous.value = currentPage.navigation?.previous
                ? pages.find((page) => page.url === currentPage.navigation?.previous)
                : pages[currentPageIndex - 1];
            next.value = currentPage.navigation?.next
                ? pages.find((page) => page.url === currentPage.navigation?.next)
                : pages[currentPageIndex + 1];

            githubUrl.value = githubUrlTemplate(route.path, currentPage.index);
        };

        watch(route, () => setAdjacentRoutes(route));

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
        <IRow>
            <IColumn>
                <div v-if="previous" class="app-docs-page-footer-group -previous">
                    <Icon name="mdi:chevron-left" />
                    <small class="_text:muted">
                        {{ t('common.previous') }}
                    </small>
                    <NuxtLink :to="previous.url" class="_overlay-link">
                        {{ previous.title }}
                    </NuxtLink>
                </div>
            </IColumn>
            <IColumn class="_text:right">
                <div v-if="next" class="app-docs-page-footer-group -next">
                    <small class="_text:muted">
                        {{ t('common.next') }}
                    </small>
                    <NuxtLink :to="next.url" class="_overlay-link">
                        {{ next.title }}
                    </NuxtLink>
                    <Icon name="mdi:chevron-right" />
                </div>
            </IColumn>
        </IRow>
        <hr class="_margin-top:2" />
        <IRow>
            <IColumn>
                <p class="contribute">
                    {{ t('pageNavigation.footer.cta') }}
                    <a :href="githubUrl" rel="nofollow" target="_blank">
                        {{ t('pageNavigation.footer.edit') }}
                        <Icon name="fa-solid:external-link-alt" />
                        <span class="_visually-hidden">
                            {{ t('common.opensNewWindow') }}
                        </span>
                    </a>
                </p>
            </IColumn>
        </IRow>
    </footer>
</template>

<style lang="scss">
.app-docs-page-footer {
    position: relative;
    margin-top: var(--margin-top-4);

    .app-docs-page-footer-group {
        position: relative;
        display: inline-flex;
        flex-direction: column;

        svg {
            position: absolute;
            color: var(--text-color-weak);
            top: 50%;
            margin-top: -10px;
        }

        &.-previous {
            padding-left: var(--padding-left-2);

            svg {
                left: 0;
            }
        }

        &.-next {
            padding-right: var(--padding-right-2);
            text-align: right;
            margin-left: auto;

            svg {
                right: 0;
            }
        }
    }

    .contribute {
        color: var(--text-color-weak);
        font-size: var(--font-size-sm);
    }
}
</style>
