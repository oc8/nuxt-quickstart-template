// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    // '@nuxtjs/i18n',
    '@nuxt/image'
  ],
  app: {
    head: {
      title: 'Website',
      titleTemplate: "%s | Website (dev)",
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },
  site: {
    name: 'Website',
    defaultLocale: 'fr',
    url: 'http://localhost:3000',
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  css: [
    'tchds/css'
  ],
  $production: {
    app: {
      head: {
        titleTemplate: "%s | Website"
      }
    },
  }
})
