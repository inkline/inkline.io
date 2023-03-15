import { ComponentManifest } from '@inkline/inkline/types';
import { onMounted, Ref, ref } from 'vue';

const manifestCache = new Map<string, ComponentManifest>();

export function useManifest(componentName: Ref<string>) {
    const manifest = ref<ComponentManifest | undefined>(manifestCache.get(componentName.value));

    onMounted(async () => {
        if (!manifestCache.has(componentName.value)) {
            const manifestModule = await import(
                `../../node_modules/@inkline/inkline/components/${componentName.value}/manifest.mjs`
            );

            manifest.value = manifestModule.default as ComponentManifest;
            manifestCache.set(componentName.value, manifest.value);
        }
    });

    return { manifest };
}
