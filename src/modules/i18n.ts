import { createI18n } from 'vue-i18n';
import { UserModule } from '~/types';

import en from '../i18n/en.yml';

/**
 * @docs https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 */
export const install: UserModule = ({ app }) => {
    const i18n = createI18n({
        legacy: false,
        locale: 'en',
        messages: {
            en
        }
    });

    app.use(i18n);
};
