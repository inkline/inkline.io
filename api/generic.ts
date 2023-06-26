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

export async function get(url: string, query: Record<string, any> = {}, options: RequestInit = {}) {
    const urlObject = new URL(url);
    urlObject.search = new URLSearchParams(query).toString();

    return authenticatedFetch(urlObject, { ...options, method: 'GET' });
}

export async function post(url: string, body: object = {}, options: RequestInit = {}) {
    const response = await authenticatedFetch(url, {
        ...options,
        method: 'POST',
        body: JSON.stringify(body)
    });
    return response.json();
}

export async function put(url: string, body: object = {}, options: RequestInit = {}) {
    const response = await authenticatedFetch(url, {
        ...options,
        method: 'PUT',
        body: JSON.stringify(body)
    });
    return response.json();
}

export async function patch(url: string, body: object = {}, options: RequestInit = {}) {
    const response = await authenticatedFetch(url, {
        ...options,
        method: 'PATCH',
        body: JSON.stringify(body)
    });
    return response.json();
}

export async function del(url: string, body: object = {}, options: RequestInit = {}) {
    const response = await authenticatedFetch(url, {
        ...options,
        method: 'DELETE',
        body: JSON.stringify(body)
    });
    return response.json();
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
