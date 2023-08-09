<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<template>
    <LayoutsCards>
        <ICard>
            <h1>
                {{ t(`pages.dashboard.title`) }}
            </h1>
            <p class="_margin-bottom:0">
                {{ t(`pages.dashboard.description`) }}
            </p>
        </ICard>
        <DashboardOnboarding />
    </LayoutsCards>
</template>
