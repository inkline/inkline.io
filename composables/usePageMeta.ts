import { definePageMeta, useLocaleHead } from '#imports';
import { PageMeta } from 'nuxt/dist/pages/runtime/composables';

export function usePageSEOMeta() {
    return useLocaleHead({
        addDirAttribute: true,
        identifierAttribute: 'id',
        addSeoAttributes: true
    });
}
