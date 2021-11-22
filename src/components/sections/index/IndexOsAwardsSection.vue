<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import OsAwards from "~/components/cards/OsAwards.vue";

export default defineComponent({
    components: {OsAwards},
    setup() {
        const { t } = useI18n();

        return {
            t
        };
    }
});
</script>

<template>
    <i-container>
        <i-row>
            <i-column>
                <os-awards />
            </i-column>
        </i-row>
    </i-container>
</template>

<style lang="scss" scoped>
@import "~@inkline/inkline/css/variables";
@import "~@inkline/inkline/css/mixins";

.osawards {
    width: 100%;
    justify-content: center;
    margin-top: 0.25rem;
}
</style>
