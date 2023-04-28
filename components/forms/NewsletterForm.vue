<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '@inkline/inkline';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const form = useForm({
            name: {
                validators: ['required', { name: 'maxLength', value: 255 }]
            },
            email: {
                validators: ['required', 'email', { name: 'maxLength', value: 255 }]
            }
        });

        return { t, form };
    }
});
</script>

<template>
    <IForm v-model="form">
        <IFormGroup>
            <IInput name="name" :placeholder="t('forms.newsletter.name.placeholder')" />
            <IFormError for="name" />
        </IFormGroup>
        <IFormGroup>
            <IInput name="email" :placeholder="t('forms.newsletter.email.placeholder')" />
            <IFormError for="email" />
        </IFormGroup>
        <IFormGroup>
            <IButton block type="submit" color="primary" size="lg">
                {{ t('forms.newsletter.submit') }}
            </IButton>
        </IFormGroup>
    </IForm>
</template>
