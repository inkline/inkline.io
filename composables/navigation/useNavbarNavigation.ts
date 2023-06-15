import { NavigationPage } from '~/types';
import { useI18n } from 'vue-i18n';
import { AppSidebarNavigation } from '#components';
import { computed, markRaw } from 'vue';
import { useSidebarNavigation } from '~/composables';

const AppSidebarNavigationRaw = markRaw(AppSidebarNavigation);

export function useNavbarNavigation() {
    const { t } = useI18n();

    return computed<NavigationPage[]>(() => [
        {
            title: t('navigation.home'),
            url: '/'
        },
        {
            title: t('navigation.pricing'),
            url: '/pricing'
        },
        {
            title: t('navigation.blog'),
            url: '/blog'
        },
        {
            title: t('navigation.documentation'),
            url: '/docs',
            id: 'navbar-docs-link'
        },
        {
            component: AppSidebarNavigationRaw,
            hidden: { desktop: true },
            componentProps: {
                navigation: useSidebarNavigation().slice(1)
            }
        }
    ]);
}
