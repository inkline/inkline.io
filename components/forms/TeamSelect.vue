<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useAuthStore, useSubscriptionStore } from '~/stores';
import { useMembershipStore } from '~/stores/membership';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const { t } = useI18n();
        const membershipStore = useMembershipStore();
        const subscriptionStore = useSubscriptionStore();
        const authStore = useAuthStore();
        const { teams, serviceAccount, serviceAccountType } = storeToRefs(membershipStore);
        const { hasSubscription } = storeToRefs(subscriptionStore);

        const options = computed(() => [
            { id: authStore.currentUserId, type: 'personal', label: authStore.currentUser?.name },
            ...teams.value.map((team) => ({
                id: team.id,
                type: 'team',
                label: team.name
            }))
        ]);

        async function onUpdateModelValue(value: string) {
            membershipStore.setServiceAccount(value);

            await router.push('/dashboard');
        }

        return {
            t,
            options,
            hasSubscription,
            serviceAccount,
            serviceAccountType,
            onUpdateModelValue
        };
    }
});
</script>

<template>
    <div class="team-select">
        <div class="_font-size:xs _text:weaker">
            {{ t(`forms.teamSelect.${serviceAccountType}`) }}
        </div>
        <ISelect
            :options="options"
            :model-value="serviceAccount"
            @update:modelValue="onUpdateModelValue"
        >
            <template #option="{ option }">
                <div class="team-select-option">
                    <div class="_font-size:xs _text:weaker">
                        {{ t(`forms.teamSelect.${option.type}`) }}
                    </div>
                    <div class="team-select-option-label">
                        <span>{{ option.label }}</span>
                    </div>
                </div>
            </template>
            <template v-if="hasSubscription" #footer>
                <IButton block to="/dashboard/create-team">
                    <Icon class="_margin-right:1/4" name="material-symbols:group-add-outline" />
                    {{ t('forms.teamSelect.createTeam') }}
                </IButton>
            </template>
        </ISelect>
    </div>
</template>

<style lang="scss">
.team-select {
    .select-wrapper {
        &.-light {
            --select--footer--background: white;
        }
    }
}
</style>
