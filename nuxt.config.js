import axios from "axios";
require("dotenv").config();

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
      { name: "HandheldFriendly", content: "true" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
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
    },
    {
      src: "@/plugins/mask.js"
    },
    {
      src: "@/plugins/lazyload.js"
    },
    {
      src: "@/plugins/mautic.js",
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
    "@nuxtjs/dotenv",
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    "@nuxtjs/proxy",
    "@nuxtjs/axios",
    "@nuxtjs/svg-sprite",
    "@nuxtjs/style-resources",
    "@nuxtjs/onesignal",
    [
      "@nuxtjs/recaptcha",
      {
        hideBadge: true,
        lang: "pt-BR",
        siteKey: process.env.RECAPTCHA_SITEKEY,
        version: 2,
        size: "invisible"
      }
    ]
  ],
  /**
   * Options oneSignal configuration
   */
  oneSignal: {
    init: {
      appId: process.env.ONE_SIGNAL,
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false
      }
    }
  },
  /*
   ** Render configuration
   */
  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      setHeaders(res, path) {
        if (path.includes("sw.js")) {
          res.setHeader("Cache-Control", "public, max-age=0");
        }
      }
    }
  },
  /*
   ** Router configuration
   */
  /*
  router: {
    middleware: ["mautic"]
  },
  */
  /**
   * Style Resources configuration
   */
  styleResources: {
    scss: ["./assets/scss/_flexbox.scss", "./assets/scss/_variables.scss"]
  },
  /*
   ** SVG Sprite configuration
   */
  svgSprite: {
    input: "~/assets/svg",
    output: "~/assets/svg/sprite",
    publicPath: process.env.NODE_ENV === "development" ? "/_nuxt/" : "/public/"
  },
  /*
   ** Sitemap configuration
   */
  sitemap: {
    routes: callback => {
      return axios
        .get(process.env.API_URL + "routes")
        .then(res => {
          const routes = res.data.map(post => {
            var entries;
            if (post.type == "post") {
              entries = `/blog/${post.slug}`;
            }
            if (post.type == "case") {
              entries = `/case/${post.slug}`;
            }
            if (post.type == "page") {
              entries = `/${post.slug}`;
            }
            if (post.type == "category") {
              entries = `/blog/categoria/${post.slug}`;
            }
            if (post.type == "tag") {
              entries = `/blog/tag/${post.slug}`;
            }
            return entries ? entries : "";
          });
          callback(null, routes);
        })
        .catch(callback);
    },
    exclude: ["/contact", "/about", "/_icons"],
    hostname: process.env.BASE_URL,
    path: "/sitemap.xml",
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    generate: false
  },
  /**
   * PWA configuration
   */
  pwa: {
    meta: {
      viewport: "width=device-width, initial-scale=1, user-scalable=no",
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
    publicPath: process.env.NODE_ENV === "development" ? "/_nuxt/" : "/public/",
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
      },
      {
        src: "/favicon/512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    viewport:
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
  },
  /*
   ** Server configuration
   */
  server: {
    port: process.env.PORT,
    host: process.env.HOST
  },
  /*
   ** Server Middleware configuration
   */
  serverMiddleware: ["~/servermiddleware/seo.js"],
  /*
   ** Axios configuration
   */
  axios: {
    proxy: process.env.NODE_ENV === "development" ? true : false,
    credentials: false,
    baseUrl: process.env.API_URL
  },
  proxy: {
    "/api/": {
      target: process.env.PROXY_URL,
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
    skipWaiting: false,
    clientsClaim: true,
    //offline: false,
    //dev: true,
    publicPath: process.env.NODE_ENV === "development" ? "/_nuxt/" : "/public/",
    runtimeCaching: [
      {
        urlPattern: process.env.PROXY_URL + ".*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        handler: "cacheFirst",
        urlPattern:
          process.env.NODE_ENV === "development" ? "/_nuxt/" : "/public/",
        strategyOptions: {
          cacheName: "bundle-files",
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 7,
            maxEntries: 30
          }
        }
      },
      {
        urlPattern: ".*fonts.googleapis.com/.*",
        method: "GET",
        strategyOptions: {
          cacheName: "google-fonts-stylesheets"
        }
      },
      {
        handler: "cacheFirst",
        urlPattern: ".*fonts.gstatic.com/.*",
        method: "GET",
        strategyOptions: {
          cacheName: "google-fonts-webfonts",
          cacheableResponse: {
            statuses: [0, 200]
          },
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365,
            maxEntries: 30
          }
        }
      },
      {
        urlPattern: "/*",
        handler: "networkFirst",
        method: "GET"
      }
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    //analyze: true,
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].js" : "[chunkhash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].js" : "[id].[chunkhash].js"),
      img: ({ isDev }) => (isDev ? "[path][name].[ext]" : "img/[hash:7].[ext]")
    },
    dir: "consilio",
    publicPath: process.env.NODE_ENV === "development" ? "/_nuxt/" : "/public/",
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? "source-map" : "inline-source-map";
      }
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true
          }
        }
      }
    }
    //extractCSS: true
  }
};
