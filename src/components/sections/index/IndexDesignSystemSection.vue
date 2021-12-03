<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const styles = ref([
            'default',
            'illustration',
            'minimalism',
            'glassmorphism'
        ]);
        const selectedStyle = ref('default');


        return {
            t,
            selectedStyle,
            styles
        };
    }
});
</script>

<template>
    <i-header color="dark">
        <i-row>
            <i-column class="section-header" lg="8" offset-lg="2">
                <section-header>
                    <template #title>
                        {{ t('index.designSystem.title') }}
                        <span class="_text:primary">
                            {{ t('index.designSystem.titleHighlight') }}
                        </span>
                    </template>
                    <template #description>
                        {{ t('index.designSystem.description') }}
                    </template>
                </section-header>
            </i-column>
        </i-row>
        <i-row middle center class="_margin-y:4">
            <i-column class="style-selector">
                <i-button
                    v-for="style in styles"
                    :key="style"
                    size="lg"
                    :active="selectedStyle === style"
                    @click="selectedStyle = style"
                >
                    {{ t(`index.designSystem.styles.${style}`) }}
                </i-button>
            </i-column>
        </i-row>
        <i-row class="examples">
            <i-column lg="6" xl="4">
                <design-system-profile-card class="_margin-bottom:2" />
                <design-system-pricing-card class="_xl:hidden _margin-bottom:2" />
            </i-column>
            <i-column lg="6" xl="4">
                <design-system-tasks-card class="_margin-bottom:2" />
                <design-system-login-card class="_margin-bottom:2" />
                <design-system-post-card class="_xl:hidden _margin-bottom:2" />
            </i-column>
            <i-column lg="6" xl="4">
                <design-system-pricing-card class="_xl:visible _margin-bottom:2" />
                <design-system-post-card class="_xl:visible _margin-bottom:2" />
            </i-column>
        </i-row>
    </i-header>
</template>

<style lang="scss" scoped>
@import "~@inkline/inkline/css/variables";
@import "~@inkline/inkline/css/mixins";

@include i-header() {
    .section-header {
        text-align: center;
    }

    @include variant('dark') {
        ----background: #{color('gray-85')};
    }

    .style-selector {
        @include i-button() {
            ----background: rgba(0 0 0 / 0.25);
            ----color: #{color('white')};
            ----border-width: 0;
            margin-right: spacing();
            margin-bottom: spacing();

            &:last-child {
                margin-right: 0;
            }

            &:hover,
            &:focus {
                ----background: rgba(0 0 0 / 0.33);
            }

            &:active {
                ----background: rgba(0 0 0 / 0.5);
            }

            @include variant('active') {
                ----background: #{color('primary')};
                ----color: #{color('white')};
            }
        }
    }

    :deep(.examples) {
        //--color--primary--h: 0;
        //--color--primary--s: 0;
        //--padding-top: 4rem;
        //--padding-bottom: 4rem;
        //--padding-left: 4rem;
        //--padding-right: 4rem;
    }
}
</style>
