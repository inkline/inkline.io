import { NavigationPage } from '~/types';
import { UserAvatar } from '#components';
import { computed, markRaw } from 'vue';
import { useAuthStore } from '~/stores';
import { useI18n } from 'vue-i18n';

const UserAvatarRaw = markRaw(UserAvatar);

export function useNavbarAccountNavigation() {
    const authStore = useAuthStore();
    const { t } = useI18n();

    const navigation = [
        {
            title: t('navigation.myAccount'),
            url: '/account'
        },
        {
            title: t('navigation.logout'),
            componentProps: {
                onClick: async () => await authStore.logout()
            }
        }
    ];

    return computed<NavigationPage[]>(() => [
        ...navigation.map((page) => ({
            ...page,
            hidden: { desktop: true }
        })),
        {
            component: UserAvatarRaw,
            hidden: { mobile: true },
            componentProps: {
                user: authStore.currentUser
            },
            children: navigation
        }
    ]);
}
