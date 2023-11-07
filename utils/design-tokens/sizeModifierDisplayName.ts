import type { Ref } from 'vue';
import { sizeModifiersList } from '~/constants';

export function sizeModifierDisplayName(modifier: Ref<string | undefined>) {
    const modifierName = modifier.value || '';

    if (sizeModifiersList.includes(modifierName)) {
        return /\d+(-\d+)?/.test(modifierName)
            ? modifierName
            : `var(--size-multiplier-${modifierName})`;
    }
}
