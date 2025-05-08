// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-lucide-icons'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    config: 'tailwind.config.js',
  },
  app: {
    head: {
      title: 'Dzulkifli Anwar | Software Engineer Portofolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],
    },
  }
})