<template>
    <div class="[ content ]">
        <div class="[ section ]">
            <div class="[ section-content ]" data-type="split" data-size="tall">
                <div class="[ flex-column flex-content-center ]">
                    <h1 class="[ text-primary-500 margin-bottom-8 ]">You seem to be lost...</h1>
                    <h4 class="[ subtitle margin-bottom-20 ]" data-size="S">We couldn't find the page you were looking for, did you mistype the URL?</h4>
                    <div class="[ flex-row ] [ gap-24 ]">
                        <NuxtLink class="[ button ]" to="/">Back to Home</NuxtLink>
                        <NuxtLink class="[ button ]" data-type="secondary" to="/support">Contact Support</NuxtLink>
                    </div>
                </div>
                <img src="~assets/svgs/404.svg?data" />
            </div>
        </div>
    </div>
</template>