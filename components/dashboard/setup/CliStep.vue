<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<template>
    <DashboardSetupStep>
        <template #title>{{ t('pages.setup.steps.cli.title') }}</template>
        <p>
            {{ t('pages.setup.steps.cli.description') }}
        </p>
        <pre class="pre"><code>npx inkline init pro</code></pre>

        <p>Using the Inkline CLI command above, Inkline has:</p>
        <ul>
            <li>Created or updated your configuration environment file</li>
            <li>
                Updated your <strong><code>package.json</code></strong> file
            </li>
        </ul>
    </DashboardSetupStep>
</template>
