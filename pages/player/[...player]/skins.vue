<template>
	<div class="panel">
		<h2 class="[ text-primary-500 ]">{{player.username}}</h2>
		<div class="panel__content">
			<div>
			</div>
            <div>
                <div class="width-fill card">
                </div>
            </div>
		</div>
	</div>
</template>

<script setup>
    const props = defineProps({
        player: {
            type: [Object],
        }
    });
    
definePageMeta({
  key: route => route.fullPath
})

    const player = props.player;

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