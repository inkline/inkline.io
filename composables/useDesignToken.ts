import { computed, Ref } from 'vue';
import { modifiersList } from '~/constants';

export function useDesignToken(token: Ref<string>) {
    const parts = computed(() => token.value.split('--').slice(1));
    const isBasicToken = computed(() => parts.value.length === 1);

    const cssVariable = computed(() => {
        return `var(${token.value})`;
    });

    const rawPropertyName = computed(() => parts.value[parts.value.length - 1]);
    const propertyName = computed(() => {
        let name = rawPropertyName.value;

        modifiersList.forEach((modifier) => {
            name = name.replace(`-${modifier}`, '');
        });

        return name;
    });

    const componentName = computed(() => (isBasicToken.value ? undefined : parts.value[0]));
    const elementName = computed(() =>
        parts.value.slice(1, -1).find((part) => !modifiersList.includes(part))
    );

    const modifierName = computed(() =>
        isBasicToken.value
            ? modifiersList.find((modifier) => rawPropertyName.value.includes(modifier))
            : parts.value.find((part) => modifiersList.includes(part))
    );

    const tokenType = computed(() => {
        if (
            ['--text', '--font', '--contrast-text', '--letter-spacing', '--line-height'].find(
                (part) => token.value.startsWith(part)
            )
        ) {
            return 'text';
        } else if (propertyName.value.startsWith('color')) {
            return 'color';
        } else if (['margin', 'padding'].find((part) => propertyName.value.startsWith(part))) {
            return 'spacing';
        } else if (['box-shadow'].find((part) => propertyName.value.startsWith(part))) {
            return 'box-shadow';
        } else if (propertyName.value.includes('border')) {
            if (propertyName.value.includes('radius')) {
                return 'border-radius';
            } else {
                return 'border';
            }
        }

        return 'generic';
    });

    return {
        parts,
        isBasicToken,
        cssVariable,
        componentName,
        modifierName,
        elementName,
        propertyName,
        rawPropertyName,
        tokenType
    };
}
