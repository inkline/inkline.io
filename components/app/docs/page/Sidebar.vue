<script lang="ts">
import { defineComponent, ref, watch, nextTick, onMounted } from 'vue';
import { useRoute, useRouter } from '#imports';
import { scrollBehaviorOptions } from '~/constants';

interface TableOfContentsEntry {
    id: string;
    title: string;
    children: TableOfContentsEntry[];
}

const docsPageSelector = '#docs-page > article > div';

export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();
        const title = ref();
        const titleId = ref();
        const tableOfContents = ref<TableOfContentsEntry[]>([]);

        const setTitle = () => {
            const h1 = document.querySelector(`${docsPageSelector} > h1:first-child`);

            title.value = h1?.textContent;
            titleId.value = h1?.getAttribute('id');
        };

        const setTableOfContents = () => {
            const headings: any = document.querySelectorAll(
                `${docsPageSelector} > h3, ${docsPageSelector} > h4`
            );

            tableOfContents.value = [...headings].reduce((acc, { id, nodeName, textContent }) => {
                if (nodeName.toLowerCase() === 'h3') {
                    acc.push({
                        id,
                        title: textContent,
                        children: []
                    });
                } else {
                    acc[acc.length - 1].children.push({
                        id,
                        title: textContent
                    });
                }

                return acc;
            }, []);
        };

        const scrollTo = (id: string) => {
            const hash = `#${id}`;
            const element: HTMLElement | null = document.querySelector(hash);
            const top = (element?.offsetTop || 0) - scrollBehaviorOptions.top;

            if (typeof window !== 'undefined') {
                window.scrollTo({
                    top: top >= 0 ? top : 0,
                    left: scrollBehaviorOptions.left,
                    behavior: 'smooth'
                });
            }

            router.replace({ hash });
        };

        onMounted(() => {
            nextTick(() => {
                setTitle();
                setTableOfContents();
            });
        });

        watch(
            () => route.path,
            () => {
                nextTick(() => {
                    setTitle();
                    setTableOfContents();
                });
            }
        );

        return {
            title,
            titleId,
            tableOfContents,
            scrollTo
        };
    }
});
</script>

<template>
    <aside class="app-docs-page-sidebar">
        <a class="title _font-weight:semibold _font-size:lg _text:muted" @click="scrollTo(titleId)">
            {{ title }}
        </a>
        <ul class="list -unstyled">
            <li v-for="(heading, headingIndex) in tableOfContents" :key="headingIndex">
                <span @click="scrollTo(heading.id)">{{ heading.title }}</span>

                <ul v-if="heading.children.length > 0" class="list -unstyled">
                    <li
                        v-for="(subheading, subheadingIndex) in heading.children"
                        :key="`page-navigation-${headingIndex}-${subheadingIndex}`"
                    >
                        <span @click="scrollTo(subheading.id)">{{ subheading.title }}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <AppDocsPageCarbonAds />
    </aside>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/css/mixins';

.app-docs-page-sidebar {
    width: var(--sidebar--width);
    padding-bottom: var(--padding-bottom);
    text-align: right;
    transition: opacity var(--transition-duration) var(--transition-timing-function);
    overflow: auto;

    > .title {
        cursor: pointer;
        color: var(--body--color);
        margin-bottom: calc(var(--spacing) / 2);
    }

    .-light & {
        > ul {
            color: var(--color-gray-600);

            ul {
                color: var(--color-gray-500);
                border-right-color: var(--color-light);
            }
        }
    }

    .-dark & {
        > ul {
            color: var(--color-gray-500);

            ul {
                color: var(--color-gray-600);
                border-right-color: var(--color-dark);
            }
        }
    }

    > ul {
        li {
            margin: var(--margin-top-1-4) 0 var(--margin-bottom-1-4);
        }

        span {
            cursor: pointer;

            &:hover,
            &:focus {
                text-decoration: underline;
            }
        }

        ul {
            margin-top: calc(var(--margin-top) / 4);
            padding-right: calc(var(--margin-top) / 2);
            border-right-width: 1px;
            border-right-style: solid;

            li:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>
