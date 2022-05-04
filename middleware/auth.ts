export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useUser();

    if (!user.value.id || user.value.id === '') {
        if (!localStorage.getItem('auth')) {
            return navigateTo('/register');
        }

        interface userRequest {
            success: boolean,
            data: user
        }

        const req = <userRequest> await $fetch('http://localhost:5000/api/v1/account', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            }
        });

        if (req.success !== true) {
            return navigateTo('/register');
        }

        console.log(to);

        if (to.fullPath !== "/onboarding/email" && req.data.verified === false) {
            return navigateTo('/onboarding/email');
        }

        user.value = req.data;
        
        console.log(user.value);
    }
  })