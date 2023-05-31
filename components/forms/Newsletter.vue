<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '@inkline/inkline';
import { subscribe } from '~/api';
import { useErrorHandler } from '~/composables';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const { showError } = useErrorHandler();

        const status = ref<'success' | 'error' | null>(null);
        const loading = ref(false);
        const form = useForm({
            email: {
                validators: ['required', 'email']
            },
            firstName: {
                validators: [
                    'required',
                    {
                        name: 'alphanumeric',
                        allowSpaces: true,
                        allowDashes: true
                    },
                    {
                        name: 'maxLength',
                        value: 128
                    }
                ]
            }
        });

        async function onSubmit() {
            if (form.value.valid) {
                loading.value = true;
                try {
                    await subscribe(form.value.email.value, form.value.firstName.value);
                    status.value = 'success';
                } catch (error: Error) {
                    showError(error);
                    status.value = 'error';
                } finally {
                    loading.value = false;
                }
            }
        }

        return {
            t,
            form,
            loading,
            status,
            onSubmit
        };
    }
});
</script>

<template>
    <Transition name="fade-transition">
        <IForm
            v-if="!status"
            id="mc-embedded-subscribe-form"
            v-model="form"
            name="mc-embedded-subscribe-form"
            method="post"
            @submit="onSubmit"
        >
            <!-- Do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px" aria-hidden="true">
                <input
                    type="text"
                    name="b_7bd6f3ee22cc7c1976ab33fd4_00734a3500"
                    tabindex="-1"
                    value=""
                />
            </div>
            <IFormGroup>
                <IFormLabel>
                    {{ t('forms.newsletter.email.label') }}
                </IFormLabel>
                <IInput
                    type="email"
                    name="email"
                    :placeholder="t('forms.newsletter.email.placeholder')"
                />
                <IFormError for="email" />
            </IFormGroup>
            <IFormGroup>
                <IFormLabel>
                    {{ t('forms.newsletter.firstName.label') }}
                </IFormLabel>
                <IInput
                    type="text"
                    name="firstName"
                    :placeholder="t('forms.newsletter.firstName.placeholder')"
                />
                <IFormError for="firstName" />
            </IFormGroup>
            <IFormGroup>
                <IButton
                    color="primary"
                    block
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    :disabled="!form.valid"
                    :loading="loading"
                >
                    {{ t('forms.newsletter.submit') }}
                </IButton>
            </IFormGroup>
        </IForm>
        <div v-else-if="status === 'success'">
            <h4>
                <Icon class="_color:success" size="32" name="material-symbols:check-circle" />
                {{ t('forms.newsletter.success.title') }}
            </h4>
            <p>{{ t('forms.newsletter.success.description') }}</p>
        </div>
        <div v-else-if="status === 'error'" class="lead _font-weight:normal">
            <h4>
                <Icon class="_color:danger" size="32" name="material-symbols:error" />
                {{ t('forms.newsletter.error.title') }}
            </h4>
            <p>{{ t('forms.newsletter.error.description') }}</p>
        </div>
    </Transition>
</template>

<style lang="scss">
#mc-embedded-subscribe-form {
    &.fade-transition-enter-active,
    &.fade-transition-leave-active {
        position: absolute;
    }
}
</style>
