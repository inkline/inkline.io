import { defineConfig } from 'unocss';
import { createPreset } from '@inkline/unocss';

export default (async () => {
    const presetInkline = await createPreset();

    return defineConfig({
        presets: [presetInkline]
    });
})();
