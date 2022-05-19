<template>
    <div class="content" data-type="dark">
        <section class="section">
            <div class="section-content">
                {{ path }}
                <div class="[ flex-row gap-16 ] [ panel-header ]">
                    <NuxtLink to="/panel" class="chip">
                        Home
                    </NuxtLink>
                    <NuxtLink to="/panel/skins" class="chip">Skins<span class="badge" data-type="notification">99+</span></NuxtLink>
                    <NuxtLink to="/panel/emojis" class="chip">Emojis</NuxtLink>
                </div>
                <NuxtPage />
            </div>
        </section>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: ["auth"],
        pageTransition: {
            appear: true,
            enterFromClass: 'fade-enter-from',
            enterActiveClass: 'fade-enter-active',
            leaveToClass: 'fade-leave-to',
            leaveActiveClass: 'fade-leave-active',
            mode: 'out-in',
        }
    });

	useHead({
		title: 'bradn stats - Panel'
	});
</script>