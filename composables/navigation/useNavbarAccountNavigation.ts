import { NavigationPage } from '~/types';
import { UserAvatar } from '#components';
import { computed, markRaw } from 'vue';
import { useAuthStore, useMembershipStore, useSubscriptionStore } from '~/stores';
import { useI18n } from 'vue-i18n';
import { createCustomerPortalSession } from '~/api';
import { storeToRefs } from 'pinia';

const UserAvatarRaw = markRaw(UserAvatar);

export function useNavbarAccountNavigation() {
    const authStore = useAuthStore();
    const subscriptionStore = useSubscriptionStore();
    const membershipStore = useMembershipStore();

    const { t } = useI18n();
    const { serviceAccount, isPersonalServiceAccount } = storeToRefs(membershipStore);

    const navigation = computed(() => [
        {
            title: t('navigation.dashboard'),
            url: isPersonalServiceAccount.value ? '/app' : `/app/team/${serviceAccount.value}`
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
