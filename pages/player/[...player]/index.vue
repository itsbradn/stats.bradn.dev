<template>
	<div class="panel">
		<h2 class="[ text-primary-500 ]">{{player.username}}</h2>
		<div class="panel__content">
			<div>
				<SkinCard :skinid="skinid" />
			</div>
            <div>
                <div class="width-fill card">
							<h4
								class="[ text fw-500 text-primary-500 margin-bottom-16 ]"
								data-size="L"
                                data-weight="XB"
							>
								Profile Details
							</h4>
							<div class="card__content">
								<div class="row">
									<div>UUID</div>
									<div>{{ player.uuid }}</div>
									<div><a>copy</a></div>
								</div>
								<div class="divider"></div>
								<div class="row">
									<div>Location</div>
									<div>United States of America 🇺🇸</div>
								</div>
								<div class="row">
									<div>Views</div>
									<div>384 / month</div>
								</div>
							</div>
                </div>
                <div class="width-fill card">
							<h4
								class="[ text fw-500 text-primary-500 margin-bottom-16 ]"
								data-size="L"
                                data-weight="XB"
							>
								Username History
							</h4>
							<div class="card__content max-height-250">
								<div class="row" v-for="name in player.usernameHistory" :key="name">
									<div>{{ name.username }}</div>
									<div>{{ new Intl.DateTimeFormat("en-GB", {
												year: "numeric",
												month: "2-digit",
												day: "2-digit",
												hour: 'numeric',
												hour12: true,
												minute: 'numeric',
												second: 'numeric',
											}).format(new Date(name.usernameApplicationDate)) }}</div>
									<div><a>copy</a></div>
								</div>
							</div>
                </div>
            </div>
		</div>
	</div>
</template>

<script setup>
	const user = useUser();
    const props = defineProps({
        player: {
            type: [Object],
        }
    });
    
definePageMeta({
  key: route => route.fullPath
})

    const player = props.player; 
	const skinid = props.player.skinHistory[props.player.skinHistory.length - 1].textureId;
</script>