import { useMembershipStore } from '~/stores';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

export function useServiceAccountRoutes() {
    const membershipStore = useMembershipStore();
    const { serviceAccount, isPersonalServiceAccount } = storeToRefs(membershipStore);

    const routes = computed(() => ({
        '/': isPersonalServiceAccount.value ? '/app' : `/app/team/${serviceAccount.value}`,
        '/token': isPersonalServiceAccount.value
            ? '/app/token'
            : `/app/team/${serviceAccount.value}/token`,
        '/team': isPersonalServiceAccount.value
            ? undefined
            : `/app/team/${serviceAccount.value}/members`,
        '/team/edit': isPersonalServiceAccount.value
            ? undefined
            : `/app/team/${serviceAccount.value}/edit`
    }));

    return { routes };
}
