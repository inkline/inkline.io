<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const redirectBlocklist = [/^\/callback.*$/, /^\/dashboard.*$/, /^\/account.*$/];

export default defineComponent({
    setup() {
        const route = useRoute();
        const router = useRouter();

        onMounted(() => {
            const redirectTo = route.query.redirectTo as string;

            if (redirectTo) {
                if (redirectBlocklist.some((regex) => regex.test(redirectTo))) {
                    router.push('/');
                    return;
                }

                router.push(redirectTo);
            }
        });

        return {};
    }
});
</script>
<template>
    <main
        class="_width:100vw _height:100vh _display:flex _justify-content:center _align-items:center"
    >
        <ILoader color="primary" size="lg" />
    </main>
</template>
