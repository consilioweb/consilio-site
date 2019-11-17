
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Agência Consilio | Comunicação que reúne relacionamentos e resultados.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Somos uma agência para quem desejar ter resultados e vê nas mídias digitais (Google, Facebook, Instagram e outros) o seu meio de alcançar os objetivos.' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'Agência Consilio | Comunicação que reúne relacionamentos e resultados.'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@agenciaconsilio' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@agenciaconsilio' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Agência Consilio | Comunicação que reúne relacionamentos e resultados.'
      },
      { name: 'apple-mobile-web-app-title', content: 'Consilio' },
      { name: 'application-name', content: 'Consilio' },
      { name: 'msapplicaiton-TitleColor', content: '#46505e' },
      { name: 'msapplicaiton-TitleImage', content: '/mstile-144x144.png' },
      { name: 'theme-color', content: '#fff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/amp',
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Bootstrap configuration
  */
  bootstrapVue: {
    css: false,
    bvCSS: false,
    componentPlugins: [
      'FormPlugin',
      'FormCheckboxPlugin',
      'FormInputPlugin',
      'FormRadioPlugin',
      'ModalPlugin'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
  },
  manifest: {
    name: "Agência Consilio",
    short_name: "Consilio",
    lang: 'pt-BR',
    icons: [
      {
        "src": "/favicon/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/favicon/android-chrome-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone"
  },
  server: {
    port: 8000,
    host: '0.0.0.0'
  },
  env: {
    wordpressApiBaseUrl: 'http://apiconsilio.local/wp-json/wp/v2/',
    proxyApiBaseUrl: process.env.NODE_ENV === 'production' ? 'https://consilio.com.br/wp-json/wp/v2' : 'http://apiconsilio.local/wp-json/wp/v2/'
  }
}
