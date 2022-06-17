<script lang="ts">
import { defineComponent, ref, watch, nextTick, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { scrollBehaviorOptions } from '~/config';

interface TableOfContentsEntry {
    id: string;
    title: string;
    children: TableOfContentsEntry[]
}

export default defineComponent({
    setup () {
        const router = useRouter();
        const route = useRoute();
        const title = ref();
        const carbonads = ref<HTMLElement | null>(null);
        const tableOfContents = ref<TableOfContentsEntry[]>([]);

        const setTitle = () => {
            const h1 = document.querySelector('.markdown > h1:first-child');

            title.value = h1?.textContent;
        };

        const setTableOfContents = () => {
            const headings: any = document.querySelectorAll('.markdown > h3, .markdown > h4');

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

            router.replace({ ...route, hash });
        };

        const loadAds = () => {
            if (carbonads.value) {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.id = '_carbonads_js';
                script.src = '//cdn.carbonads.com/carbon.js?serve=CEAICK7U&placement=wwwinklineio';

                carbonads.value.appendChild(script);
            }
        }

        onMounted(() => {
            nextTick(() => {
                setTitle();
                setTableOfContents();
                loadAds();
            });
        });

        watch(() => route.path, () => {
            nextTick(() => {
                setTitle();
                setTableOfContents();
            });
        });

        return {
            title,
            tableOfContents,
            carbonads,
            scrollTo
        };
    }
});
</script>

<template>
    <aside id="page-navigation">
        <div class="title _font-weight:semibold _font-size:lg _text:muted">
            {{ title }}
        </div>
        <ul class="list -unstyled">
            <li v-for="(heading, headingIndex) in tableOfContents" :key="headingIndex">
                <span @click="scrollTo(heading.id)">{{ heading.title }}</span>

                <ul v-if="heading.children.length > 0" class="list -unstyled">
                    <li v-for="(subheading, subheadingIndex) in heading.children" :key="`page-navigation-${headingIndex}-${subheadingIndex}`">
                        <span @click="scrollTo(subheading.id)">{{ subheading.title }}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <div ref="carbonads" />
    </aside>
</template>

<style lang="scss" scoped>
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

#page-navigation {
    margin-top: calc(var(--navbar-height) + var(--article--margin-top));
    width: var(--sidebar-width);
    position: fixed;
    top: 0;
    bottom: 0;
    right: calc(var(--spacing) * 2);
    text-align: right;
    transition: opacity var(--transition-duration) var(--transition-easing);

    > .title {
        margin-bottom: calc(var(--spacing) / 2);
    }

    .-light & {
        > ul {
            color: var(--color--gray-65);

            ul {
                color: var(--color--gray-50);
                border-right-color: var(--color--light);
            }
        }
    }

    .-dark & {
        > ul {
            color: var(--color--gray-50);

            ul {
                color: var(--color--gray-65);
                border-right-color: var(--color--dark);
            }
        }
    }

    > ul {
        li {
            margin: calc(var(--spacing) / 4) 0;
        }

        span {
            cursor: pointer;

            &:hover,
            &:focus {
                text-decoration: underline;
            }
        }

        ul {
            margin-top: calc(var(--spacing) / 4);
            padding-right: calc(var(--spacing) / 2);
            border-right-width: 1px;
            border-right-style: solid;

            li:last-child {
                margin-bottom: 0;
            }
        }
    }
}

</style>
