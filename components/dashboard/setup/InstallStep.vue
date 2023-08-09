<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useServiceAccountRoutes } from '~/composables';

const { t } = useI18n();
const { routes } = useServiceAccountRoutes();
</script>
<template>
    <DashboardSetupStep>
        <template #title>{{ t('pages.setup.steps.install.title') }}</template>
        <p>
            {{ t('pages.setup.steps.install.description') }}
        </p>
        <pre class="pre"><code>npm install --save @inkline/pro</code></pre>
    </DashboardSetupStep>
</template>
