<template>
    <div class="content" data-type="dark">
		<Loading v-if="loading" />
        <section class="section" v-else>
            <div class="section-content" data-width="panel">
                <div class="[ flex-row gap-16 ] [ panel-header ]">
                    <NuxtLink :to="`/player/${ player }`" class="chip">
                        Profile
                    </NuxtLink>
                    <NuxtLink :to="`/player/${ player }/hypixel`" class="chip">
                        Hypixel
                    </NuxtLink>
                    <NuxtLink :to="`/player/${ player }/skins`" class="chip">
                        Skins
                    </NuxtLink>
                </div>
                <NuxtChild  :player="playerData" />
            </div>
        </section>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: ["softauth"],
    });
    const config = useRuntimeConfig().public
    let loading = ref(true);
    const route = useRoute();
    const player = route.params.player[0]
    let playerData = {};
    definePageMeta({
        pageTransition: {
            appear: true,
            enterFromClass: 'fade-enter-from',
            enterActiveClass: 'fade-enter-active',
            leaveToClass: 'fade-leave-to',
            leaveActiveClass: 'fade-leave-active',
            mode: 'out-in',
        }
    });

    try {
        let req = await $fetch("/api/v1/mc/player/" + player, {
            method: "GET",
        	baseURL: config.BASE_URL,
        });
        playerData = req.data;
        setTimeout(() => {
            loading.value = false;
        }, 500)
    } catch (e) {
        // error handler but im lazy lols
    }

	useHead({
		title: 'bradn stats - Panel'
	});
</script>