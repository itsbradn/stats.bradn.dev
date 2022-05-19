import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'bradn stats - Game Statistic Viewer',
            meta: [
                { name: 'title', content: 'bradn stats - Game Statistic Viewer' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,400,0,0'}, // Mulish Font Family imports
            ],
            script: [
                // { src: '/js/skinview3d.js' }
            ]
        },
          
    },
    css: [
        '@/assets/styles/main.scss'
    ],
    modules: [
        "@nuxtjs/svg",
    ],
    ssr: false,
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL || 'http://localhost:5000/'
        }
    }
    
})
