<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useMembershipStore } from '~/stores/membership';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useServiceAccountRoutes } from '~/composables';

export default defineComponent({
    async setup() {
        const { t } = useI18n();
        const router = useRouter();
        const membershipStore = useMembershipStore();
        const { routes } = useServiceAccountRoutes();

        const team = computed(() =>
            membershipStore.teamById(membershipStore.serviceAccount as string)
        );
        const memberships = computed(() =>
            membershipStore.membershipsByTeamId(team.value?.id as string)
        );

        const { isServiceAccountOwner } = storeToRefs(membershipStore);

        onMounted(() => {
            if (!membershipStore.isTeamServiceAccount) {
                router.replace('/app');
            }

            membershipStore.getTeam(membershipStore.serviceAccount as string);
        });

        return { t, isServiceAccountOwner, team, memberships, routes };
    }
});
</script>
<template>
    <ICard v-if="team">
        <div class="_display:flex _justify-content:space-between">
            <h1>{{ team.name }}</h1>
            <IDropdown v-if="isServiceAccountOwner">
                <IButton square>
                    <Icon name="mdi:dots-vertical" height="20" width="20" />
                </IButton>
                <template #body>
                    <IDropdownItem :to="routes['/team/edit']">
                        {{ t('pages.team.index.dropdown.edit') }}
                    </IDropdownItem>
                    <IDropdownDivider />
                    <IDropdownItem>
                        {{ t('pages.team.index.dropdown.delete') }}
                    </IDropdownItem>
                </template>
            </IDropdown>
        </div>
        <p>
            {{ t(`pages.team.index.description.${isServiceAccountOwner ? 'owner' : 'member'}`) }}
        </p>

        <IListGroup>
            <IListGroupItem v-for="membership in memberships" :key="membership.id">
                {{ membership.email }}
            </IListGroupItem>
        </IListGroup>
    </ICard>
</template>
