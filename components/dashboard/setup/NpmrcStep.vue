<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<template>
    <DashboardSetupStep>
        <template #title>{{ t('pages.setup.steps.npmrc.title') }}</template>
        <p>
            <i18n-t keypath="pages.setup.steps.npmrc.description">
                <template #code>
                    <code>.npmrc</code>
                </template>
            </i18n-t>
        </p>
        <DashboardSetupNpmrcConfig />
    </DashboardSetupStep>
</template>
