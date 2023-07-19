<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useAuthStore, useSubscriptionStore } from '~/stores';
import { useMembershipStore } from '~/stores/membership';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import type { ISelect } from '@inkline/inkline';

export default defineComponent({
    setup() {
        const router = useRouter();
        const { t } = useI18n();
        const membershipStore = useMembershipStore();
        const subscriptionStore = useSubscriptionStore();
        const authStore = useAuthStore();
        const { ownedMemberships, serviceAccount, serviceAccountType } =
            storeToRefs(membershipStore);
        const { hasSubscription } = storeToRefs(subscriptionStore);

        const selectRef = ref<InstanceType<ISelect> | null>(null);

        const options = computed(() => [
            { id: authStore.currentUserId, type: 'personal', label: authStore.currentUser?.name },
            ...ownedMemberships.value.map((membership) => ({
                id: membership.teamId,
                type: 'team',
                label: membershipStore.teamById(membership.teamId)?.name
            }))
        ]);

        async function onUpdateModelValue(value: string) {
            membershipStore.setServiceAccount(value);

            await router.push('/dashboard');
        }

        async function onClickCreateTeam() {
            selectRef.value?.onEscape();
            await router.push('/dashboard/team/create');
        }

        return {
            t,
            options,
            hasSubscription,
            serviceAccount,
            serviceAccountType,
            selectRef,
            onClickCreateTeam,
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
            ref="selectRef"
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
                <IButton block @click="onClickCreateTeam">
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
