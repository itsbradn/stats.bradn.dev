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
</script>