<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSubscriptionStore, useMembershipStore } from '~/stores';
import { useForm, useToast, validate } from '@inkline/inkline';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const toast = useToast();
        const router = useRouter();
        const membershipStore = useMembershipStore();
        const subscriptionStore = useSubscriptionStore();
        const memberEmails = ref<string[]>([]);
        const step = ref(0);
        const emailRefs = ref<HTMLElement[]>([]);

        const emailSchema = {
            value: '',
            validators: [
                'email',
                {
                    name: 'custom',
                    message: 'This user is already a member of this team.',
                    validator: (value: string) => {
                        return !memberEmails.value.includes(value.trim().toLowerCase());
                    }
                }
            ]
        };

        const form = useForm({
            name: {
                validators: ['required']
            },
            emails: [{ ...emailSchema }]
        });

        const teamName = computed(() => form.value.name.value.trim());
        const teamMembers = computed(() =>
            form.value.emails
                .filter((email) => email.value)
                .map((email) => email.value.trim().toLowerCase())
        );

        onMounted(() => {
            if (!subscriptionStore.hasSubscription) {
                router.replace('/dashboard');
            }
        });

        function addMember() {
            form.value.emails.push({ ...emailSchema });

            nextTick(() => {
                emailRefs.value[emailRefs.value.length - 1].$el.querySelector('input').focus();
            });
        }

        function addMemberOrFocus(index: number) {
            if (!form.value.emails[index].value) {
                return;
            }

            form.value = validate({
                ...form.value,
                emails: [...form.value.emails, { ...emailSchema }]
            });

            nextTick(() => {
                emailRefs.value[index + 1].$el.querySelector('input').focus();
            });
        }

        function removeMember(index: number) {
            if (form.value.emails.length === 1) {
                form.value = validate({
                    ...form.value,
                    emails: [
                        {
                            ...form.value.emails[0],
                            value: ''
                        },
                        ...form.value.emails.slice(1)
                    ]
                });

                return;
            }

            form.value = validate({
                ...form.value,
                emails: [
                    ...form.value.emails.slice(0, index),
                    ...form.value.emails.slice(index + 1)
                ]
            });
        }

        function setStep(value: number) {
            step.value = value;
        }

        async function onSubmit() {
            try {
                await membershipStore.createTeam({
                    name: teamName.value,
                    members: teamMembers.value
                });

                await router.push('/dashboard');
            } catch (error) {
                toast.show({
                    title: t('common.error'),
                    message: error.message,
                    color: 'danger'
                });
            }
        }

        return {
            form,
            step,
            memberEmails,
            emailRefs,
            teamName,
            teamMembers,
            setStep,
            addMember,
            addMemberOrFocus,
            removeMember,
            onSubmit
        };
    }
});
</script>
<template>
    <div>
        <IForm v-model="form">
            <h1>Create a team</h1>
            <div v-show="step === 0">
                <IFormGroup>
                    <IFormLabel>Team name</IFormLabel>
                    <IInput name="name" placeholder="e.g. My awesome team" />
                    <IFormError for="name" />
                </IFormGroup>
                <IFormGroup>
                    <IButton :disabled="!form.name.value" color="primary" block @click="setStep(1)">
                        Next step
                    </IButton>
                </IFormGroup>
            </div>
            <div v-show="step === 1">
                <p>Enter the email address of your team members to invite them to Inkline:</p>
                <IFormGroup v-for="(email, index) in form.emails" :key="index" ref="emailRefs">
                    <div class="_display:flex _flex-direction:row">
                        <IInput
                            :name="`emails.${index}`"
                            placeholder="e.g. mail@example.com"
                            @keydown.enter="addMemberOrFocus(index)"
                        >
                            <template #suffix>
                                <IButton circle size="sm" @click="removeMember(index)">
                                    <Icon name="ic:baseline-close" />
                                </IButton>
                            </template>
                        </IInput>
                    </div>
                    <IFormError :for="`emails.${index}`" />
                </IFormGroup>
                <IFormGroup>
                    <IButton color="primary" @click="addMember">
                        <Icon name="ic:baseline-person-add" class="_margin-right:1/2" />
                        Add more
                    </IButton>
                </IFormGroup>
                <IFormGroup>
                    <IButton :disabled="form.invalid" color="primary" block @click="setStep(2)">
                        Next step
                    </IButton>
                    <IButton link block @click="setStep(0)"> Back to previous step </IButton>
                </IFormGroup>
            </div>
            <div v-show="step === 2">
                <p>
                    <span v-if="teamMembers.length > 0">
                        Your subscription will be adjusted to reflect the new number of seats.
                    </span>
                    Review the details of your team:
                </p>

                <IRow>
                    <IColumn>
                        <IListGroup>
                            <IListGroupItem>
                                <div class="_text:weaker _font-size:xs">Team name</div>
                                <strong>{{ teamName }}</strong>
                            </IListGroupItem>
                            <IListGroupItem v-for="email in teamMembers" :key="email">
                                <Icon name="ic:baseline-person" class="_margin-right:1/4" />
                                {{ email }}
                            </IListGroupItem>
                        </IListGroup>
                    </IColumn>
                    <IColumn v-if="teamMembers.length > 0" lg="4">
                        <ICard class="_height:100%">
                            $18.99 per month, billed monthly 5x seats
                        </ICard>
                    </IColumn>
                </IRow>

                <IButton class="_margin-top:1" color="primary" block @click="onSubmit">
                    Create team
                </IButton>
                <IButton link block @click="setStep(1)"> Back to previous step </IButton>
            </div>
        </IForm>
    </div>
</template>
