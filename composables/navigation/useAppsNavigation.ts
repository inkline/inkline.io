import { AppsPage } from '~/types';

export function useAppsNavigation(): AppsPage[] {
    return [
        {
            title: 'Storybook',
            url: 'https://storybook.next.inkline.io/',
            icon: 'simple-icons:storybook',
            color: 'pink',
            external: true
        },
        {
            title: 'Playground',
            url: 'https://stackblitz.com/edit/inkline?file=src/App.vue',
            icon: 'fa-solid:code',
            color: 'warning',
            external: true
        },
        {
            title: 'Changelog',
            url: 'https://github.com/inkline/inkline/releases',
            icon: 'fa-solid:list',
            color: 'dark',
            external: true
        },
        {
            title: 'Community',
            url: 'https://chat.inkline.io',
            icon: 'fa-solid:comments',
            color: 'dark',
            external: true
        }
    ];
}
