import { useLocaleHead } from '#imports';

export function usePageSEOMeta() {
    return useLocaleHead({
        addDirAttribute: true,
        identifierAttribute: 'id',
        addSeoAttributes: true
    });
}
