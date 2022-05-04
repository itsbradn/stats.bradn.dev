export default async function auth(token) {
    interface userRequest {
        success: boolean,
        data: user
    }
    const req = <userRequest> await $fetch('http://localhost:5000/api/v1/account', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return req;

}