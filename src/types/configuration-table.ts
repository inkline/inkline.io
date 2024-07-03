import type { VNode } from 'vue';

export interface ConfigurationTableColumn {
    label: string;
    key: string;
    width?: number;
    type?: 'plaintext' | 'code' | 'vnode';
    visible?(row: Record<string, any>, column: ConfigurationTableColumn): boolean;
    render?(row: Record<string, any>, column: ConfigurationTableColumn): string | VNode;
}
