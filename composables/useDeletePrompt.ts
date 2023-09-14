import { h } from 'vue';
import { useModal } from '@inkline/inkline';

export function useDeletePrompt() {
    const modal = useModal();

    async function show(options: {
        title: string;
        message: string;
        value: string;
        confirmButtonText?: string;
    }) {
        return modal.prompt({
            title: options.title,
            message: h('div', [
                h('p', options.message),
                h('p', [
                    'Enter the name ',
                    h('strong', options.value),
                    ' in the input below to confirm.'
                ])
            ]),
            confirmButtonText: options.confirmButtonText || 'Delete',
            confirmButtonProps: {
                color: 'danger'
            },
            schema: {
                input: {
                    validators: [
                        'required',
                        {
                            name: 'custom',
                            validator: (value: string) => value === options.value
                        }
                    ]
                }
            }
        });
    }

    return {
        show
    };
}
