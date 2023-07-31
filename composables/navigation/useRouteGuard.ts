import { useServiceAccountRoutes } from '~/composables';
import { RouteLocation, useRoute, useRouter } from 'vue-router';

export async function useRouteGuard(allowFn: (route: RouteLocation) => boolean) {
    const route = useRoute();
    const router = useRouter();
    const { routes } = useServiceAccountRoutes();

    if (!allowFn(route)) {
        await router.replace(routes.value['/']);
    }
}
