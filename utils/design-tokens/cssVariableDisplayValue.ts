import { ComponentManifestCssVariable } from '@inkline/inkline/types';

function parseVariable(variable: ComponentManifestCssVariable): string {
    let resolvedValue;
    if (variable.value) {
        resolvedValue =
            typeof variable.value === 'string'
                ? variable.value
                : variable.value.map(parseVariable).join(' ');
    }

    if (resolvedValue) {
        return variable.name ? `var(${variable.name}, ${resolvedValue})` : resolvedValue;
    } else {
        return `var(${variable.name})`;
    }
}

export function cssVariableDisplayValue(values: ComponentManifestCssVariable[]): string {
    return values.map(parseVariable).join(' ');
}
