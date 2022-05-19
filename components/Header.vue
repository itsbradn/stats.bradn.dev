<template>
    <header class="header">
        <div class="header__content">
            <div class="flex-row flex-items-center gap-32">
            <NuxtLink to="/">
                <img src="~assets/svgs/logo-light.svg?data" />
            </NuxtLink>
                <form v-on:submit.prevent="submitSearch">
                        <div class="form-group" data-type="text" data-style="icon">
                            <span class="icon material-symbols-rounded">search</span>
                            <input type="text" placeholder="Search for a player" required name="username" v-model="searchUser">
                        </div>
                    </form>
            </div>
            <div class="[ flex-row ] [ gap-24 ]" v-if="user.username">
                <NuxtLink to="/panel" class="[ button ]">Panel</NuxtLink>
            </div>
            <div class="[ flex-row ] [ gap-24 ]" v-else>
                <NuxtLink to="/login" class="[ button ]" data-type="secondary">Login</NuxtLink>
                <NuxtLink to="/register" class="[ button ]">Register</NuxtLink>
            </div>
        </div>
    </header>
</template>
<script setup>
	const user = useUser();

    let searchUser = ref("");

    function submitSearch() {
			return navigateTo(`/player/${searchUser.value}`);
    }
</script>