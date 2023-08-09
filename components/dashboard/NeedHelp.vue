<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<template>
    <div class="_margin-top:1 _display:flex _align-items:center">
        <Icon name="mdi:lightbulb-on-outline" size="20" class="_margin-right:1/2" />
        <p class="_margin-bottom:0">
            <strong>{{ t('pages.token.needHelp.title') }}</strong>
            {{ t('pages.token.needHelp.description') }}
            <a :href="t('common.contactEmail')"> {{ t('pages.token.needHelp.link') }} </a>.
        </p>
    </div>
</template>
