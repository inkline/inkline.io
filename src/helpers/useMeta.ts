import { useHead } from '@vueuse/head';

export const useMeta = ({ title, description }: { title: string; description: string }) => useHead({
    title,
    meta: [
        {
            property: 'og:title',
            content: title
        },
        {
            name: 'description',
            content: description
        },
        {
            property: 'og:description',
            content: description
        }
    ]
});
