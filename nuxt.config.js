
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Agência Consilio | Comunicação que reúne relacionamentos e resultados.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0' },
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
  plugins: [
    {
      src: '@/plugins/parallax.js'
    },
    {
      src: '@/plugins/svg-icon.js'
    },
    {
      src: '@/plugins/carousel.js', mode: 'client'
    }
  ],
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
  ],
  /*
  ** Bootstrap configuration
  */
  /*
  ** Build configuration
  */
  build: {
    extend(config, context) {
      config.resolve.alias["vue$"] = "vue/dist/vue.esm.js"
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = /(\/assets\/icons\/svg)/

      config.module.rules.push({
        test: /\.svg$/,
        include: /(\/assets\/icons\/svg)/,
        use: [{ loader: 'svg-sprite-loader', options: { symbolId: 'icon-[name]' } }]
      })
    },
    extractCSS: true
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
  axios: {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  },
  generate: {
    dir: 'consilio'
  },
}
