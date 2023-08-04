<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useSubscriptionStore } from '~/stores';
import { useForm, useToast, validate } from '@inkline/inkline';
import { useI18n } from 'vue-i18n';
import { debounce } from '@grozav/utils';
import { CURRENCY_MAP } from '~/constants';
import { storeToRefs } from 'pinia';

export default defineComponent({
    props: {
        team: {
            type: Object,
            default: undefined
        },
        members: {
            type: Array,
            default: () => []
        },
        action: {
            type: Function,
            required: true
        }
    },
    async setup(props) {
        const { t } = useI18n();
        const toast = useToast();
        const router = useRouter();
        const subscriptionStore = useSubscriptionStore();

        const { hasEnterpriseSubscription } = storeToRefs(subscriptionStore);

        const memberEmails = ref<string[]>([]);
        const emailRefs = ref<HTMLElement[]>([]);

        const loading = ref(false);

        const loadingCostEstimate = ref(false);
        const costEstimate = ref();
        const costEstimatePrice = computed(() => {
            const currency =
                CURRENCY_MAP[costEstimate.value?.price.currency] ||
                costEstimate.value?.price.currency;
            const price =
                costEstimate.value?.plan.interval === 'year'
                    ? (costEstimate.value?.price.unit_amount * costEstimate.value?.quantity_diff) /
                      1200
                    : (costEstimate.value?.price.unit_amount * costEstimate.value?.quantity_diff) /
                      100;

            return `${price > 0 ? '+' : ''}${currency}${price.toFixed(2)}`;
        });

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
                value: props.team?.name || '',
                validators: ['required']
            },
            emails:
                props.members.length > 0
                    ? props.members.map((email) => ({
                          ...emailSchema,
                          value: email
                      }))
                    : [{ ...emailSchema }]
        });

        const teamName = computed(() => form.value.name.value.trim());
        const teamMembers = computed(() =>
            form.value.emails
                .filter((email) => email.value && email.valid)
                .map((email) => email.value.trim().toLowerCase())
        );

        const debouncedCreateTeamEstimate = debounce(async () => {
            console.log(hasEnterpriseSubscription.value);
            if (hasEnterpriseSubscription.value) {
                return;
            }

            loadingCostEstimate.value = true;
            costEstimate.value = await subscriptionStore.createTeamEstimate({
                ...(props.team ? { team: props.team.id } : {}),
                members: teamMembers.value
            });
            loadingCostEstimate.value = false;
        }, 500);

        const subscriptionUpdateAlertVisible = computed(() => {
            return (
                teamMembers.value.length > 0 &&
                form.value.dirty &&
                (loadingCostEstimate.value || costEstimate.value) &&
                !hasEnterpriseSubscription.value
            );
        });

        watch(teamMembers, (value, oldValue) => {
            const difference = value.filter((member) => !oldValue.includes(member));
            if (difference.length > 0 || value.length !== oldValue.length) {
                debouncedCreateTeamEstimate();
            }
        });

        onMounted(() => {
            form.value = validate(form.value);

            if (!subscriptionStore.hasSubscription) {
                router.replace('/app');
            }
        });

        function addMember() {
            form.value.dirty = true;
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
            form.value.dirty = true;
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

        async function onSubmit() {
            loading.value = true;
            try {
                props.action({
                    name: teamName.value,
                    members: teamMembers.value
                });
            } catch (error) {
                toast.show({
                    title: t('common.error'),
                    message: error.message,
                    color: 'danger'
                });
            } finally {
                loading.value = false;
            }
        }

        return {
            t,
            form,
            memberEmails,
            emailRefs,
            teamName,
            teamMembers,
            costEstimate,
            costEstimatePrice,
            loadingCostEstimate,
            loading,
            hasEnterpriseSubscription,
            subscriptionUpdateAlertVisible,
            addMember,
            addMemberOrFocus,
            removeMember,
            onSubmit
        };
    }
});
</script>
<template>
    <LayoutsCards>
        <IForm v-model="form">
            <ICard>
                <IFormGroup>
                    <IFormLabel>
                        {{ t('forms.manageTeam.teamName.label') }}
                    </IFormLabel>
                    <IInput name="name" :placeholder="t('forms.manageTeam.teamName.placeholder')" />
                    <IFormError for="name" />
                </IFormGroup>
            </ICard>
            <ICard>
                <IFormGroup v-for="(email, index) in form.emails" :key="index" ref="emailRefs">
                    <IFormLabel v-if="index === 0">
                        {{ t('forms.manageTeam.emailAddresses.label') }}
                    </IFormLabel>
                    <div class="_display:flex _flex-direction:row">
                        <IInput
                            :name="`emails.${index}`"
                            :placeholder="t('forms.manageTeam.emailAddresses.placeholder')"
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
                    <IButton :disabled="loading" color="primary" @click="addMember">
                        <Icon name="ic:baseline-person-add" class="_margin-right:1/2" />
                        {{ t('forms.manageTeam.emailAddresses.addMore') }}
                    </IButton>
                </IFormGroup>
            </ICard>

            <IAlert v-if="subscriptionUpdateAlertVisible" color="info">
                <template #icon>
                    <IIcon name="ink-info" />
                </template>
                {{ t('forms.manageTeam.subscription.notice') }}
            </IAlert>

            <IButton
                :loading="loading"
                :disabled="form.invalid || (team && !form.dirty)"
                color="primary"
                block
                @click="onSubmit"
            >
                {{ t(`forms.manageTeam.submit.${team ? 'update' : 'create'}`) }}
            </IButton>

            <div
                v-if="(loadingCostEstimate || costEstimate) && !hasEnterpriseSubscription"
                class="billing-changes-summary"
            >
                <div class="_margin-right:2 _font-size:sm">
                    <ul>
                        <li>
                            Any applicable taxes and discounts will be applied on your monthly
                            invoice. Prices exclude applicable taxes and VAT (varies based on your
                            country). Learn more
                        </li>
                        <li>
                            By clicking
                            {{ t(`forms.manageTeam.submit.${team ? 'update' : 'create'}`) }}, you
                            agree to the Terms of service agreements.
                        </li>
                        <li>
                            Notwithstanding anything to the contrary, any previous purchase of any
                            Inkline Pro will also be subject to the above terms and these terms will
                            supersede any previous terms agreed to by the Customer and Inkline.
                        </li>
                    </ul>
                </div>
                <div v-if="costEstimate" class="_text:right">
                    <h2 class="_margin:0">
                        {{ costEstimatePrice }}
                    </h2>
                    <div class="_text:weaker">
                        {{ t(`pages.pricing.table.interval.${costEstimate.plan.interval}ly`) }}
                    </div>
                    <div class="_text:weaker">
                        {{
                            t('forms.manageTeam.subscription.seats', {
                                count: costEstimate.quantity_diff
                            })
                        }}
                    </div>
                </div>
                <ILoader v-else color="primary" size="sm" />
            </div>
        </IForm>
    </LayoutsCards>
</template>

<style lang="scss">
.billing-changes-summary {
    border-right: 4px solid var(--color-primary);
    padding-right: var(--padding-right);
    margin-top: var(--margin-top);
    display: flex;
    justify-content: space-between;
}
</style>
