export interface ConfigurationTableColumn {
    label: string;
    key: string;
    width?: number;
    type: 'plaintext' | 'code';
    render?(row: Record<string, any>, column: ConfigurationTableColumn): string;
}
