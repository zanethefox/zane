import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-10',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  router: {
    options: {
      strict: true
    }
  },
  app: {
    head: {
      title: 'ZaneTheFox.com',
      htmlAttrs: {
        lang: 'en'
      }
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', 'shadcn-nuxt', 'floating-vue/nuxt', '@vueuse/nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  routeRules: {
    //'/blog/**': { ssr: false },
    // Redirects
    '/qr': { redirect: '/socials?utm_source=qr_code&utm_medium=qr_code&utm_campaign=badge' },
    '/boop': { redirect: '/socials?utm_source=boop&utm_medium=nfc_tap&utm_campaign=badge' }
  }
});
