<template>
	<div class="card">
		<canvas :id="`skin-container-${props.skinid}-${nodeNum}`"></canvas>
	</div>
</template>

<script setup>
	import { SkinViewer, createOrbitControls } from "skinview3d";
	const config = useRuntimeConfig().public;
	const props = defineProps({
		skinid: String,
	});
    let nodeNum = 0;
    checkAvailable();

    function checkAvailable() {
        if (document.getElementById(`skin-container-${props.skinid}-${nodeNum}`)) {
            nodeNum++
            return checkAvailable();
        };
        return true;
    }


	onMounted(() => {
        setTimeout(() => {
            let canvas = document.getElementById(`skin-container-${props.skinid}-${nodeNum}`);
            console.log(canvas);
			let skinViewer = new SkinViewer({
				canvas: canvas,
				width: 280,
				height: 380,
				skin: `${config.BASE_URL}api/v1/mc/texture/${props.skinid}`,
			});

			const WalkingAnimation = (player, time) => {
				const skin = player.skin;
				// Multiply by animation's natural speed
				time *= 8;
				skin.rotation.y = 0.5;
				skin.rotation.x = 0.4;

				// Leg swing
				skin.leftLeg.rotation.x = Math.sin(time) * 0.5;
				skin.rightLeg.rotation.x = Math.sin(time + Math.PI) * 0.5;

				// Arm swing
				skin.leftArm.rotation.x = Math.sin(time + Math.PI) * 0.5;
				skin.rightArm.rotation.x = Math.sin(time) * 0.5;

				// Always add an angle for cape around the x axis
				const basicCapeRotationX = Math.PI * 0.06;
				player.cape.rotation.x =
					Math.sin(time / 1.5) * 0.06 + basicCapeRotationX;
			};

			let control = createOrbitControls(skinViewer);
			control.enableRotate = true;
			let walk = skinViewer.animations.add(WalkingAnimation);
			walk.speed = 0.5;
		}, 4);
	});
</script>