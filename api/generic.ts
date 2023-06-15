import { useAuthStore } from '~/stores';
import { useFetch } from '#app';

async function getAccessToken() {
    const authStore = useAuthStore();
    let accessToken;
    try {
        accessToken = await authStore.getAccessToken();
    } catch (error) {}

    return accessToken;
}

export async function authenticatedFetch(...args: Parameters<typeof fetch>) {
    const accessToken = await getAccessToken();

    return fetch(args[0], {
        ...args[1],
        headers: {
            ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
            ...args[1]?.headers
        }
    });
}

export async function get(...args: Parameters<typeof fetch>) {
    return authenticatedFetch(args[0], { ...args[1], method: 'GET' });
}

export async function post(...args: Parameters<typeof fetch>) {
    return authenticatedFetch(args[0], { ...args[1], method: 'POST' });
}

export async function put(...args: Parameters<typeof fetch>) {
    return authenticatedFetch(args[0], { ...args[1], method: 'PUT' });
}

export async function patch(...args: Parameters<typeof fetch>) {
    return authenticatedFetch(args[0], { ...args[1], method: 'PATCH' });
}

export async function del(...args: Parameters<typeof fetch>) {
    return authenticatedFetch(args[0], { ...args[1], method: 'DELETE' });
}

export async function useAuthenticatedFetch(...args: Parameters<typeof useFetch>) {
    const accessToken = await getAccessToken();

    return useFetch(args[0], {
        ...args[1],
        headers: {
            ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
            ...args[1]?.headers
        }
    });
}

export async function useGet(...args: Parameters<typeof useFetch>) {
    const accessToken = await getAccessToken();

    return useFetch(args[0], {
        ...args[1],
        method: 'GET',
        headers: {
            ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
            ...args[1]?.headers
        }
    });
}

export async function usePost(...args: Parameters<typeof useFetch>) {
    const accessToken = await getAccessToken();

    return useFetch(args[0], {
        ...args[1],
        method: 'POST',
        headers: {
            ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
            ...args[1]?.headers
        }
    });
}

export async function usePut(...args: Parameters<typeof useFetch>) {
    const accessToken = await getAccessToken();

    return useFetch(args[0], {
        ...args[1],
        method: 'PUT',
        headers: {
            ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
            ...args[1]?.headers
        }
    });
}

export async function usePatch(...args: Parameters<typeof useFetch>) {
    const accessToken = await getAccessToken();

    return useFetch(args[0], {
        ...args[1],
        method: 'PATCH',
        headers: {
            ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
            ...args[1]?.headers
        }
    });
}

export async function useDel(...args: Parameters<typeof useFetch>) {
    const accessToken = await getAccessToken();

    return useFetch(args[0], {
        ...args[1],
        method: 'DELETE',
        headers: {
            ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
            ...args[1]?.headers
        }
    });
}
