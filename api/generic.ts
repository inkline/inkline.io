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

export async function authenticatedFetch<T>(...args: Parameters<typeof fetch>): Promise<T> {
    const accessToken = await getAccessToken();

    const response = await fetch(args[0], {
        ...args[1],
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
            ...args[1]?.headers
        }
    });

    return await response.json();
}

export async function get<T>(
    url: string,
    query: Record<string, any> = {},
    options: RequestInit = {}
) {
    let resolvedUrl = url;
    if (Object.keys(query).length > 0) {
        resolvedUrl = `${resolvedUrl}?${new URLSearchParams(query).toString()}`;
    }

    return authenticatedFetch<T>(resolvedUrl, { ...options, method: 'GET' });
}

export async function post<T>(url: string, body: object = {}, options: RequestInit = {}) {
    return authenticatedFetch<T>(url, {
        ...options,
        method: 'POST',
        body: JSON.stringify(body)
    });
}

export async function put<T>(url: string, body: object = {}, options: RequestInit = {}) {
    return authenticatedFetch<T>(url, {
        ...options,
        method: 'PUT',
        body: JSON.stringify(body)
    });
}

export async function patch<T>(url: string, body: object = {}, options: RequestInit = {}) {
    return authenticatedFetch<T>(url, {
        ...options,
        method: 'PATCH',
        body: JSON.stringify(body)
    });
}

export async function del<T>(url: string, body: object = {}, options: RequestInit = {}) {
    return authenticatedFetch<T>(url, {
        ...options,
        method: 'DELETE',
        body: JSON.stringify(body)
    });
}

export async function useAuthenticatedFetch(...args: Parameters<typeof useFetch>) {
    const accessToken = await getAccessToken();

    return useFetch(args[0], {
        ...args[1],
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
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
