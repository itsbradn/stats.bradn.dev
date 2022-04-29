import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        link: [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
            { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap'}, // Mulish Font Family import
        ]
    },
    css: [
        '@/assets/styles/main.scss'
    ],
    modules: [
        "@nuxtjs/svg"
    ]
    
})
