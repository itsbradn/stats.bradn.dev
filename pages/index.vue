<template>
    <div class="content">
        <section class="section" data-type="dark">
            <div class="section-content" data-type="split" data-size="tall">
                <div class="flex-column flex-content-center">
                    <h1 class="[ text-primary-500 margin-bottom-8 ]">In Depth Statistics</h1>
                    <h4 class="[ subtitle margin-bottom-20 ]" data-size="small">View in depth and detailed statistics from a collection of many games.</h4>
                    <NuxtLink to="/register" class="[ button ]">Get Started</NuxtLink>
                </div>
                <div class="flex-column flex-content-center flex-items-center">
                    <div class="hero-display">
                        <div class="tooltips">
                            <div class="tooltip one" data-type="bold" data-align="end" data-side="bottom">
                                <div class="tooltip__icon">
                                    <span class="material-symbols-rounded">expand_less</span>
                                </div>
                                43,650 Wins
                            </div>
                            <div class="tooltip two" data-type="bold" data-align="start" data-side="bottom">
                                <div class="tooltip__icon" data-color="orange">
                                    <span class="material-symbols-rounded">expand_more</span>
                                </div>
                                1.57 KDA
                            </div>
                            <div class="tooltip three" data-type="bold" data-align="end" data-side="top">
                                <div class="tooltip__icon" data-color="yellow">
                                    <span class="material-symbols-rounded">expand_less</span>
                                </div>
                                1.57 KDA
                            </div>
                            <div class="tooltip four" data-type="bold" data-align="start" data-side="top">
                                <div class="tooltip__icon" data-color="green">
                                    <span class="material-symbols-rounded">expand_more</span>
                                </div>
                                1.57 KDA
                            </div>
                        </div>
                        <img src="~assets/svgs/hero-image.svg?data" class="hero-image" />
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="[ flex-column flex-content-center flex-items-center ][ section-content ]" data-size="tall">
                <h1 class="[ text-primary-500 margin-bottom-8 ]">Various Games</h1>
                <h4 class="[ subtitle margin-bottom-48 ]" data-size="small">Our platform supports many games API’s, explore our catalogue!</h4>
                <div class="card-slider">
                    <div class="card" v-for="card in cards" :key="card.title">
                        <div class="card__image"></div>
                        <div class="card__content">
                            <h4 class="[ subtitle margin-bottom-8 text-primary-500 ]" data-size="small">{{ card.title }}</h4>
                            <p class="[ text margin-bottom-16 ]" data-size="M">{{ card.description }}</p>
                            <div class="[ flex-content-space ]">
                                <NuxtLink :to="card.to" class="button" data-size="S">Start Searching</NuxtLink>
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
    const cards = [
        {
            title: 'Valorant',
            description: 'A 5v5 character based competitive shooter from Riot Games.',
            rating: '4.1',
            to: '/valorant'
        },
        {
            title: 'Minecraft',
            description: 'A 5v5 character based competitive shooter from Riot Games.',
            rating: '4.1',
            to: '/mc'
        },
        {
            title: 'Genshin Impact',
            description: 'A 5v5 character based competitive shooter from Riot Games.',
            rating: '4.1',
            to: '/genshin'
        }
    ]
</script>