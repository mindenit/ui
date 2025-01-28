export default defineNuxtConfig({
  modules: ['@midenit/ui/nuxt'],
  css: ['~/assets/css/main.css'],
  mindenit: {
    prefix: 'U',
  },
  compatibilityDate: '2025-01-28',
  devtools: { enabled: true },
})
