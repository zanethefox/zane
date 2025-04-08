import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  app: {
    head: {
      title: 'ZaneTheFox.com',
      htmlAttrs: {
        lang: 'en'
      }
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
  }
});
