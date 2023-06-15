import { useFetch } from '#imports';

export async function subscribe(email: string, firstName: string) {
    const query = new URLSearchParams({
        u: '7bd6f3ee22cc7c1976ab33fd4',
        id: '00734a3500',
        f_id: '005e8de0f0',
        c: '?',
        EMAIL: email,
        FNAME: firstName
    });

    return useFetch(
        'https://inkline.us14.list-manage.com/subscribe/post-json?' + query.toString(),
        {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
    );
}
