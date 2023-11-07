import type { ComponentManifest } from '@inkline/inkline';
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';

const manifestCache = new Map<string, ComponentManifest>();

async function loadManifest(
    componentName: string,
    loader: () => Promise<{ default: ComponentManifest }>
) {
    if (!manifestCache.has(componentName)) {
        const manifestModule = await loader();
        manifestCache.set(componentName, manifestModule.default);
        return manifestModule.default;
    }

    return manifestCache.get(componentName);
}

export function useManifest(componentName: Ref<string>) {
    const manifest = ref<ComponentManifest | undefined>(manifestCache.get(componentName.value));

    onMounted(async () => {
        manifest.value = await loadManifest(
            componentName.value,
            async () =>
                import(
                    `../node_modules/@inkline/inkline/components/${componentName.value}/manifest.mjs`
                )
        );
    });

    return { manifest };
}

export function useUtilsManifest(componentName: Ref<string>) {
    const manifest = ref<ComponentManifest | undefined>(manifestCache.get(componentName.value));

    onMounted(async () => {
        manifest.value = await loadManifest(
            componentName.value,
            async () =>
                import(
                    `../node_modules/@inkline/inkline/components/utils/${componentName.value}/manifest.mjs`
                )
        );
    });

    return { manifest };
}
