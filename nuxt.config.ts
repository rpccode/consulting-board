// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt','@nuxtjs/color-mode','@pinia/nuxt','@sidebase/nuxt-auth'],
  shadcn: {

    prefix: '',
    componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  auth: {
    origin: process.env.AUTH_ORIGIN || "http://localhost:3000",
    baseURL: '/api/auth', 
    isEnabled: true,
    provider: {
      type: "authjs", 
    },
  },
})