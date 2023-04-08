import { NavigationPage } from '~/types';
import { useI18n } from 'vue-i18n';

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
            title: t('navigation.blog'),
            url: '/blog'
        }
    ];
}
