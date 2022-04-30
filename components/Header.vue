<template>
    <header class="header">
        <div class="header__content">
            <NuxtLink to="/">
                <img src="~assets/svgs/logo-light.svg?data" />
            </NuxtLink>
            <div class="[ flex-row ] [ gap-24 ]">
                <NuxtLink to="/login" class="[ button ]" data-type="secondary">Login</NuxtLink>
                <NuxtLink to="/register" class="[ button ]">Register</NuxtLink>
            </div>
        </div>
    </header>
</template>