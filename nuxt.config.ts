// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt',"@nuxt/ui", ],
  ui: {
    icons: ['fontisto']
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})