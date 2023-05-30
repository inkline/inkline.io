import { onMounted, ref } from 'vue';

export function useFeatureFlag(name: string) {
    const isEnabled = ref(false);

    onMounted(() => {
        if (typeof window === 'undefined') {
            return;
        }

        isEnabled.value = localStorage.getItem(`inkline.${name}`) === 'true';
    });

    return {
        isEnabled
    };
}
