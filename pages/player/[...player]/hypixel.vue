<template>
	<div class="panel">
		<h2 class="[ text-primary-500 ]">{{player.username}}</h2>
		<div class="panel__content">
			<div>
				<SkinCard :skinid="skinid" />
                <div class="card">
                    <div class="card__content" data-type="split">
                        <div class="text-align-center">
                            <h4 class="text-primary-400">Level</h4>
                            {{ Math.round(player.hypixel.networkLevel * 100) / 100 }}
                        </div>
                        <div class="text-align-center">
                            <h4 class="text-primary-400">Karma</h4>
                            {{ player.hypixel.karma.toLocaleString("en-US") }}
                        </div>
                    </div>
                    <div class="divider margin-top-8"></div>
                    <div class="card__content">
                        <div class="row text" data-size="M">
                            <div class="text" data-size="M" data-weight="B">Achievement Points</div>
                            <div>{{ player.hypixel.achievements.points?.toLocaleString("en-US") }}</div>
                        </div>
                        <div class="row text" data-size="M">
                            <div class="text" data-size="M" data-weight="B">Network Exp</div>
                            <div>{{ player.hypixel.networkExp.toLocaleString("en-US") }}</div>
                        </div>
                        <div class="divider"></div>
                        <div class="row text" data-size="M">
                            <div class="text" data-size="M" data-weight="B">Last Login</div>
                            <div>{{ dateIntl.format(new Date(player.hypixel.connections.lastLogin)) }}</div>
                        </div>
                        <div class="row text" data-size="M">
                            <div class="text" data-size="M" data-weight="B">Last Logout</div>
                            <div>{{ dateIntl.format(new Date(player.hypixel.connections.lastLogout)) }}</div>
                        </div>
                        <div class="row text" data-size="M">
                            <div class="text" data-size="M" data-weight="B">First Login</div>
                            <div>{{ dateIntl.format(new Date(player.hypixel.connections.firstLogin)) }}</div>
                        </div>
                    </div>
                </div>
			</div>
            <div>
				<AccordionDuels :player="player" />
				<AccordionTNTGames :player="player" />
				<AccordionBedWars :player="player" />
            </div>
		</div>
	</div>
</template>

<script setup>
    import { handlePercent, handleRatio, secToTime } from '~~/composables/number';
    // let twemoji = import('public/js/twemoji.js');

    const props = defineProps({
        player: {
            type: [Object],
        }
    });
    
definePageMeta({
  key: route => route.fullPath
});

let dateIntl = new Intl.DateTimeFormat("en-GB", {
												year: "numeric",
												month: "2-digit",
												day: "2-digit",
												hour: 'numeric',
												minute: 'numeric',
											});

    const player = props.player;
	const skinid = props.player.skinHistory[props.player.skinHistory.length - 1].textureId;

	useHead({
		title: `${player.username} - Hypixel | bradn stats`,
        meta: [
            { name: `title`, content: `${player.username} - Hypixel | bradn stats` },
            { name: `description`, content: `View ${player.username}'s Hypixel stats and more easily.` },
            { property: `og:title`, content: `${player.username} - Hypixel | bradn stats` },
            { property: `og:description`, content: `View ${player.username}'s Hypixel stats and more easily.` },
            { property: `og:url`, content: `https://stats.bradn.dev/player/${player.username}/hypixel` },
            { property: `twitter:title`, content: `${player.username} - Hypixel | bradn stats` },
            { property: `twitter:description`, content: `View ${player.username}'s Hypixel stats and more easily.` },
            { property: `twitter:url`, content: `https://stats.bradn.dev/player/${player.username}/hypixel` },
        ]
	});
</script>