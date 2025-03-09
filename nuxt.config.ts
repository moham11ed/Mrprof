// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar',
      },
    },
  },
  build: {
    transpile: [
      'tailwindcss',
    ],
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.scss',
  ],
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
  ],
  colorMode: {
    preference: 'light',
  },
  ssr: false,  // تحويل المشروع إلى Static Site
  nitro: {
    preset: 'static',  // إعداد Nitro لاستخدام Static Hosting
  },
})