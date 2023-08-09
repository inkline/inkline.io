<script lang="ts">
import { defineComponent } from 'vue';
import { useMembershipStore } from '~/stores/membership';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const membershipStore = useMembershipStore();
        const { serviceAccount } = storeToRefs(membershipStore);
        const { t } = useI18n();

        return { t, serviceAccount };
    }
});
</script>
<template>
    <DashboardSetup :team-id="serviceAccount" />
</template>
