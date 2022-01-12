import { UserModule } from '~/types';

// https://docs.rollbar.com/docs/vue-js
export const install: UserModule = ({ isClient }) => {
    if (!isClient) { return; }

    const isAppleDevice = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    if (isAppleDevice) {
        document.documentElement.className += ' inkline-scrollbar';
    }
};
