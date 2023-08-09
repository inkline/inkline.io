<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useMembershipStore } from '~/stores';
import { storeToRefs } from 'pinia';
import { useServiceAccountRoutes } from '~/composables';

const { t } = useI18n();
const { routes } = useServiceAccountRoutes();

const membershipStore = useMembershipStore();
const { isServiceAccountOwner, isPersonalServiceAccount, ownedTeams } =
    storeToRefs(membershipStore);
</script>
<template>
    <LayoutsCards>
        <CardsOnboarding
            :title="t('pages.onboarding.cards.install.title')"
            :description="t('pages.onboarding.cards.install.description')"
            :button="t('pages.onboarding.cards.install.button')"
            :to="routes['/installation']"
        >
            <template #image>
                <NuxtImg
                    src="/images/icons/icon-install.svg"
                    alt="Install Inkline Pro"
                    width="56"
                />
            </template>
        </CardsOnboarding>
        <CardsOnboarding
            v-if="isPersonalServiceAccount"
            :title="
                t(
                    `pages.onboarding.cards.${
                        ownedTeams.length > 0 ? 'createTeam' : 'inviteTeam'
                    }.title`
                )
            "
            :description="
                t(
                    `pages.onboarding.cards.${
                        ownedTeams.length > 0 ? 'createTeam' : 'inviteTeam'
                    }.description`
                )
            "
            :button="
                t(
                    `pages.onboarding.cards.${
                        ownedTeams.length > 0 ? 'createTeam' : 'inviteTeam'
                    }.button`
                )
            "
            to="/app/team/create"
        >
            <template #image>
                <NuxtImg src="/images/icons/icon-invite.svg" alt="Invite Team" width="56" />
            </template>
        </CardsOnboarding>
        <CardsOnboarding
            v-else-if="isServiceAccountOwner"
            :title="t(`pages.onboarding.cards.updateTeam.title`)"
            :description="t('pages.onboarding.cards.updateTeam.description')"
            :button="t('pages.onboarding.cards.updateTeam.button')"
            :to="routes['/team/edit']"
        >
            <template #image>
                <NuxtImg src="/images/icons/icon-invite.svg" alt="Invite Team" width="56" />
            </template>
        </CardsOnboarding>
    </LayoutsCards>
</template>
