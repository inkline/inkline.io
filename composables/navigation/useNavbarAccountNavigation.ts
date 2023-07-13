import { NavigationPage } from '~/types';
import { UserAvatar } from '#components';
import { computed, markRaw } from 'vue';
import { useAuthStore, useSubscriptionStore } from '~/stores';
import { useI18n } from 'vue-i18n';
import { createCustomerPortalSession } from '~/api';

const UserAvatarRaw = markRaw(UserAvatar);

export function useNavbarAccountNavigation() {
    const authStore = useAuthStore();
    const subscriptionStore = useSubscriptionStore();

    const { t } = useI18n();

    const navigation = computed(() => [
        {
            title: t('navigation.dashboard'),
            url: '/dashboard'
        },
        ...(subscriptionStore.subscriptions.length > 0
            ? [
                  {
                      title: t('navigation.billing'),
                      componentProps: {
                          onClick: async () => {
                              const { session } = await createCustomerPortalSession();
                              window.location.href = session.url;
                          }
                      }
                  }
              ]
            : []),
        {
            title: t('navigation.logout'),
            componentProps: {
                onClick: async () => await authStore.logout()
            }
        }
    ]);

    return computed<NavigationPage[]>(() => [
        ...navigation.value.map((page) => ({
            ...page,
            hidden: { desktop: true }
        })),
        {
            component: UserAvatarRaw,
            hidden: { mobile: true },
            componentProps: {
                user: authStore.currentUser
            },
            children: navigation.value
        }
    ]);
}
