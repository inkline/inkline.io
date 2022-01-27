import { Inkline, components } from '@inkline/inkline';
import { UserModule } from '~/types';

/**
 * @docs https://inkline.io
 */
export const install: UserModule = ({ app }) => {
    app.use(Inkline, { components });
};
