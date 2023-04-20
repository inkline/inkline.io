import { NavigationPage } from '~/types';
import { useI18n } from 'vue-i18n';
import { AppSidebarNavigation } from '#components';
import { markRaw } from 'vue';
import { useSidebarNavigation } from '~/composables';

export function useNavbarNavigation(): NavigationPage[] {
    const { t } = useI18n();

    return [
        {
            title: t('navigation.home'),
            url: '/'
        },
        {
            title: t('navigation.documentation'),
            url: '/docs',
            id: 'navbar-docs-link'
        },
        {
            title: 'Mobile documentation navigation',
            component: markRaw(AppSidebarNavigation),
            componentProps: {
                navigation: useSidebarNavigation().slice(1)
            }
        },
        {
            title: t('navigation.blog'),
            url: '/blog'
        }
    ];
}
