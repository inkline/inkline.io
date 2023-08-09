<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useServiceAccountRoutes } from '~/composables';

const props = defineProps({
    showNpmrc: {
        type: Boolean,
        default: false
    }
});

const { t } = useI18n();
const { routes } = useServiceAccountRoutes();
</script>
<template>
    <DashboardSetupStep>
        <template #title>{{ t('pages.setup.steps.authToken.title') }}</template>
        <p>
            {{ t('pages.setup.steps.authToken.description') }}
        </p>
        <i18n-t tag="p" keypath="pages.setup.steps.authToken.instructions">
            <template #code>
                <code>YOUR_AUTH_TOKEN_HERE</code>
            </template>
            <template #file>
                <code>.npmrc</code>
            </template>
            <template #link>
                <NuxtLink :to="routes['/token']" target="_blank">
                    <strong>{{ t('pages.setup.steps.authToken.link') }}</strong>
                </NuxtLink>
            </template>
        </i18n-t>
        <DashboardSetupNpmrcConfig v-if="showNpmrc" />
    </DashboardSetupStep>
</template>
