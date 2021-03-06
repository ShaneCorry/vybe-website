
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Vybe - Modern DeFi Platform',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'social-site-name', property: 'og:site_name', content: 'Vybe - Modern DeFi Platform' },
      { hid: 'social-property', property: 'og:type', content: 'website' },
      { hid: 'social-title', property: 'og:title', content: 'Vybe - Modern DeFi Platform with Loans & Staking' },
      { hid: 'social-description', property: 'og:description', content: 'Vybe is a new, modern take on decentralized finance. Our first product, Vybe Loans, is a cryptographically secure way to loan VYBE, where every loan is guaranteed to be paid back in full.' },
      { hid: 'social-image', property: 'og:image', content: '/og-social-image.jpg' },
      { hid: 'social-image', property: 'twitter:image', content: '/og-social-image.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700;900&display=swap'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],

  i18n: {
    // locales: ['ar', 'da', 'de', 'dut', 'el', 'en', 'es', 'fa', 'fr', 'he', 'hu', 'id', 'ko', 'pl', 'ro', 'zh'],
    locales: ['en'],
    defaultLocale: 'en',
    detectBrowserLanguage: {
        fallbackLocale: 'en',
        onlyOnRoot: true,
        alwaysRedirect: true,
        useCookie: false
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        // ar: require('./lang/ar.json'),
        // da: require('./lang/da.json'),
        // de: require('./lang/de.json'),
        // dut: require('./lang/dut.json'),
        // el: require('./lang/el.json'),
        en: require('./lang/en.json')
        // es: require('./lang/es.json'),
        // fa: require('./lang/fa.json'),
        // fr: require('./lang/fr.json'),
        // he: require('./lang/he.json'),
        // hu: require('./lang/hu.json'),
        // id: require('./lang/id.json'),
        // ko: require('./lang/ko.json'),
        // pl: require('./lang/pl.json'),
        // ro: require('./lang/ro.json'),
        // zh: require('./lang/zh.json'),
      }
    }
  },

  axios: {

  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
