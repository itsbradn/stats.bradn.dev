<template>
    <div class="app">
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<script setup>
const route = useRoute()

const darkMode = true;
if (darkMode === true) {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}


useHead({
  meta: [{ name: 'og:title', content: `App Name - ${route.meta.title}` }]
})
    definePageMeta({
        middleware: ["softauth"],
        pageTransition: {
            appear: true,
            enterFromClass: 'fade-enter-from',
            enterActiveClass: 'fade-enter-active',
            leaveToClass: 'fade-leave-to',
            leaveActiveClass: 'fade-leave-active',
            mode: 'out-in',
        }
    });
</script>