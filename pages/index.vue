<template>
    <div class="content">
        <section class="section" data-type="dark">
            <div class="section-content" data-type="split" data-size="tall">
                <div class="flex-column flex-content-center">
                    <h1 class="[ text-primary-500 margin-bottom-8 ]">In Depth Statistics</h1>
                    <h4 class="[ subtitle margin-bottom-32 ]" data-size="small">View in depth and detailed statistics from a collection of many games.</h4>
                    <form v-on:submit.prevent="submitSearch">
                        <div class="form-group" data-type="text" data-color="light" data-style="icon">
                            <span class="icon material-symbols-rounded">search</span>
                            <input type="text" placeholder="Search for a player" required name="username" v-model="searchUser">
                        </div>
                    </form>
                </div>
                <div class="flex-column flex-content-center flex-items-center">
                    <StatDisplay />
                </div>
            </div>
        </section>
        <section class="section">
            <div class="[ flex-column flex-content-center flex-items-center ][ section-content ]" data-size="tall">
                <h1 class="[ text-primary-500 margin-bottom-8 ]">Featured Profiles</h1>
                <h4 class="[ subtitle margin-bottom-48 ]" data-size="small">View our featured or most viewed users profiles!</h4>
                <div class="card-slider">
                    <div class="card" v-for="card in cards" :key="card.title">
                        <div class="card__tall-image"></div>
                        <div class="card__content">
                            <h4 class="[ subtitle margin-bottom-16 text-primary-500 ]" data-size="small">{{ card.title }}</h4>
                            <!-- <p class="[ text margin-bottom-16 ]" data-size="M">{{ card.description }}</p> -->
                            <div class="[ flex-content-space ]">
                                <NuxtLink :to="card.to" class="button" data-size="S">View Profile</NuxtLink>
                                <div class="flex-items-center stars">
                                    <span class="material-symbols-rounded">star</span> {{card.rating}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" data-type="dark">
            <div class="section-content" data-type="split" data-size="tall">
                <div class="[ flex-column flex-content-center ]">
                    <div>
                        <img src="~assets/svgs/verified.svg?data"/>
                    </div>
                </div>
                <div class="[ flex-column flex-content-center ] [ max-width-500 text-align-right ]">
                    <h1 class="[ text-primary-500 margin-bottom-8 ]">Verification & Badges</h1>
                    <h4 class="[ subtitle margin-bottom-20 ]" data-size="small">Get verified or get profile badges to make your profile unique.</h4>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
    definePageMeta({
        middleware: ["softauth"],
    });
    let searchUser = ref("");

    function submitSearch() {
			return navigateTo(`/player/${searchUser.value}`);
    }

    const cards = [
        {
            title: 'VIETISLA',
            rating: '4.8',
            to: '/player/VIETISLA'
        },
        {
            title: 'bradn',
            rating: '4.6',
            to: '/player/bradn'
        },
        {
            title: 'VIETAMANDA',
            rating: '0.5',
            to: '/player/VIETAMANDA'
        }
    ]

    
	useHead({
		title: `bradn stats - Minecraft Statistic Viewer`,
        meta: [
            { name: `title`, content: `bradn stats - Game Statistic Viewer` },
            { name: `description`, content: `View players Hypixel stats and more easily.` },
            { name: `theme-color`, content: `#244ad0` },
            { property: `og:title`, content: `bradn stats - Game Statistic Viewer` },
            { property: `og:description`, content: `View players Hypixel stats and more easily.` },
            { property: `og:url`, content: `https://stats.bradn.dev/` },
            { property: `twitter:title`, content: `bradn stats - Game Statistic Viewer` },
            { property: `twitter:description`, content: `View players Hypixel stats and more easily.` },
            { property: `twitter:url`, content: `https://stats.bradn.dev/` },
        ]
	});
</script>