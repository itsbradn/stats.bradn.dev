export default defineNuxtRouteMiddleware(async (to, from) => {
    const config = useRuntimeConfig().public
    const user = useUser();

    if (!user.value.id || user.value.id === '') {
        if (!localStorage.getItem('auth')) {
            return;
        }

        interface userRequest {
            success: boolean,
            data: user
        }

        const req = <userRequest> await $fetch('/api/v1/account', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            baseURL: config.BASE_URL,
        });

        user.value = req.data;
    }
  })