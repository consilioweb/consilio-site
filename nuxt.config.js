export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title:
      "Agência Consilio | Comunicação que reúne relacionamentos e resultados.",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Somos uma agência para quem desejar ter resultados e vê nas mídias digitais (Google, Facebook, Instagram e outros) o seu meio de alcançar os objetivos."
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content:
          "Agência Consilio | Comunicação que reúne relacionamentos e resultados."
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@agenciaconsilio"
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@agenciaconsilio"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content:
          "Agência Consilio | Comunicação que reúne relacionamentos e resultados."
      },
      { name: "apple-mobile-web-app-title", content: "Consilio" },
      { name: "application-name", content: "Consilio" },
      { name: "msapplicaiton-TitleColor", content: "#46505e" },
      { name: "msapplicaiton-TitleImage", content: "/mstile-144x144.png" },
      { name: "theme-color", content: "#fff" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   ** Loading page: '@/components/loading.vue'
   */
  loading: {
    color: "#46505e",
    height: "3px"
  },

  /*
   ** ENV
   */
  env: {
    baseUrl:
      process.env.NODE_ENV === "development"
        ? "http://192.168.1.2:8000/"
        : "https://site.consilio.com.br/",
    apiBaseUrl:
      process.env.NODE_ENV === "development"
        ? "http://192.168.1.2:8000/api/wp-json/wp/v2/"
        : "https://api.consilio.com.br/wp-json/wp/v2/"
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/axios",
    {
      src: "@/plugins/parallax.js"
    },
    {
      src: "@/plugins/carousel.js",
      ssr: false
    },
    {
      src: "@/plugins/mixins.js"
    },
    {
      src: "@/plugins/filters.js"
    },
    {
      src: "@/plugins/infinite-loading.js",
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/router-extras"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/proxy",
    "@nuxtjs/axios",
    "@nuxtjs/svg-sprite",
    "@nuxtjs/style-resources",
    [
      "@nuxtjs/recaptcha",
      {
        hideBadge: true,
        language: "pt-br",
        siteKey: "6LfilKUUAAAAACIMCe6ExvLXHgtRv2Dq7ydnzcEN",
        version: 3
      }
    ]
  ],
  /**
   * Style Resources configuration
   */
  styleResources: {
    scss: [
      //"./assets/scss/_reset.scss",
      //"./assets/scss/_fonts.scss",
      //"./assets/scss/_flex.scss",
      "./assets/scss/_flexbox.scss",
      "./assets/scss/_variables.scss"
    ]
  },
  /*
   ** SVG Sprite configuration
   */
  svgSprite: {
    input: "~/assets/svg",
    output: "~/assets/svg/sprite",
    publicPath: process.env.NODE_ENV === "development" ? "/_nuxt/" : "/public/"
  },
  /**
   * PWA configuration
   */
  pwa: {
    meta: {
      mobileAppIOS: true,
      name: process.env.NODE_ENV.title,
      description: process.env.NODE_ENV.description,
      author: "Agência Consilio",
      lang: "pt-br"
    }
  },
  /*
   ** Manifest configuration
   */
  manifest: {
    name: "Agência Consilio",
    short_name: "Consilio",
    lang: "pt-BR",
    icons: [
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/favicon/android-chrome-256x256.png",
        sizes: "256x256",
        type: "image/png"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone"
  },
  /*
   ** Server configuration
   */
  server: {
    port: 8000,
    host: "0.0.0.0"
  },
  /*
   ** Axios configuration
   */
  axios: {
    proxy: process.env.NODE_ENV === "development" ? true : false,
    credentials: false,
    baseUrl: process.env.apiBaseUrl
  },
  proxy: {
    "/api/": {
      target: "https://api.consilio.com.br/",
      pathRewrite: { "^/api": "" },
      changeOrigin: true
    }
  },
  /*
   ** Generate configuration
   */
  generate: {
    fallback: true,
    dir: "consilio",
    interval: 1000
  },
  /*
   ** Handle external assets
   */
  workbox: {
    runtimeCaching: [
      {
        urlPattern: "https://fonts.googleapis.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: "https://fonts.gstatic.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    dir: "consilio",
    publicPath: process.env.NODE_ENV === "development" ? "/_nuxt/" : "/public/",
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? "source-map" : "inline-source-map";
      }
    }
    //extractCSS: true
  }
};
