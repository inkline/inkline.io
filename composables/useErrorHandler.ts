import { useToast } from '@inkline/inkline';
import { useI18n } from 'vue-i18n';

export function useErrorHandler() {
    const toast = useToast();
    const i18n = useI18n();

    function showError(error: Error) {
        toast.show({
            color: 'error',
            title: i18n.t('common.error'),
            message: error.message
        });
    }

    return { showError };
}
