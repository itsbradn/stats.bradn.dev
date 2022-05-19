export default async function auth(token) {
    const config = useRuntimeConfig().public
    interface userRequest {
        success: boolean,
        data: user
    }
    const req = <userRequest> await $fetch('/api/v1/account', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        baseURL: config.BASE_URL,
    });

    return req;

}