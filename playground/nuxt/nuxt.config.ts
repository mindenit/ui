export default defineNuxtConfig({
  modules: ['@vee-validate/nuxt', '@midenit/ui/nuxt', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  mindenit: {
    prefix: 'U',
  },
  compatibilityDate: '2025-01-28',
  devtools: { enabled: true },
})