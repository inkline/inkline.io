<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAuthStore } from '~/stores';

export default defineComponent({
    setup() {
        const { t } = useI18n();

        return { t };
    }
});
</script>

<template>
    <div id="dashboard-page">
        <SectionsComponentsSection color="transparent" size="lg">
            <IRow center>
                <IColumn md="8">
                    <SectionsComponentsHeader heading="h1">
                        <template #title>
                            {{ t('pages.dashboard.title') }}
                        </template>
                        <template #description>
                            {{ t('pages.onboarding.description') }}
                        </template>
                    </SectionsComponentsHeader>
                </IColumn>
            </IRow>
            <IRow>
                <IColumn xl="6" offset-xl="3" lg="8" offset-lg="2" class="_margin-y:6">
                    <CardsOnboarding
                        class="_margin-bottom:1"
                        :title="t('pages.onboarding.cards.install.title')"
                        :description="t('pages.onboarding.cards.install.description')"
                        :button="t('pages.onboarding.cards.install.button')"
                    >
                        <template #image>
                            <NuxtImg
                                height="72"
                                width="72"
                                src="/images/icons/icon-install.svg"
                                alt="Install Inkline Pro"
                            />
                        </template>
                    </CardsOnboarding>
                    <CardsOnboarding
                        :title="t('pages.onboarding.cards.inviteTeam.title')"
                        :description="t('pages.onboarding.cards.inviteTeam.description')"
                        :button="t('pages.onboarding.cards.inviteTeam.button')"
                    >
                        <template #image>
                            <NuxtImg
                                height="72"
                                width="72"
                                src="/images/icons/icon-invite.svg"
                                alt="Invite team"
                            />
                        </template>
                    </CardsOnboarding>
                </IColumn>
            </IRow>
        </SectionsComponentsSection>
    </div>
</template>

<style lang="scss">
#dashboard-page {
    flex-grow: 1;
}
</style>
