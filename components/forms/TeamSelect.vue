<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '~/stores';
import { useMembershipStore } from '~/stores/membership';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const membershipStore = useMembershipStore();
        const authStore = useAuthStore();
        const { teams, serviceAccount } = storeToRefs(membershipStore);

        const options = [
            { id: authStore.currentUserId, type: 'personal', label: authStore.currentUser.name },
            ...teams.value.map((team) => ({
                id: team.id,
                type: 'team',
                label: team.name
            }))
        ];

        function onUpdateModelValue(value: any) {
            membershipStore.setServiceAccount(value);
        }

        return { options, serviceAccount, onUpdateModelValue };
    }
});
</script>
<template>
    <ISelect
        :options="options"
        :model-value="serviceAccount"
        @update:modelValue="onUpdateModelValue"
    >
        <template #option="{ option }">
            <div class="team-select-option">
                <div class="_font-size:xs _text:weakest">Personal account</div>
                <div class="team-select-option-label">
                    <span>{{ option.label }}</span>
                </div>
            </div>
        </template>
    </ISelect>
</template>
