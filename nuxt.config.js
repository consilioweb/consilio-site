const axios = require("axios");

const glob = require("glob");
const path = require("path");

var getDynamicRoutes = function() {
  return [].concat(
    glob
      .sync("*.md", { cwd: "blog/" })
      .map(filepath => `/blog/${path.basename(filepath, ".md")}`)
  );
};

var dynamicPaths = getDynamicRoutes();

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
  /*
   ** SVG Sprite configuration
   */
  svgSprite: {
    input: "~/assets/svg",
    output: "~/assets/svg/sprite",
    publicPath: process.env.NODE_ENV === "development" ? "/_nuxt/" : "/public/",
    defaultSprite: "icons"
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
    headers: {
      "Access-Control-Allow-Origin": "*,*"
    },
    proxyHeaders: false,
    credentials: false
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
    interval: 1000,
    routes() {
      return Promise.all([
        axios.get(process.env.baseUrl + "/posts?per_page=100&page=1&_embed=1"),
        axios.get(process.env.baseUrl + "/pages?per_page=100&page=1&_embed=1")
      ]).then(data => {
        const posts = data[0];
        const pages = data[1];
        return posts.data
          .map(post => {
            return {
              route: "/blog/" + post.slug,
              payload: post
            };
          })
          .concat(
            pages.data.map(page => {
              return {
                route: page.slug,
                payload: page
              };
            })
          );
      });
    }
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
    splitChunks: {
      layouts: true
    },
    publicPath: process.env.NODE_ENV === "development" ? "/_nuxt/" : "/public/",
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.devtool = ctx.isClient ? "source-map" : "inline-source-map";
        config.module.rules.push({
          enforce: "pre",
          test: /.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
        const svgRule = config.module.rules.find(rule =>
          rule.test.test(".svg")
        );
        svgRule.test = /\.(png|jpe?g|gif|webp)$/;
      }
      //config.module.rules.map(rule => console.log(">>>>>>>>>>>>", rule));
    }
  },
  /*
   ** ENV
   */
  env: {
    baseUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:8000/api/wp-json/wp/v2/"
        : "https://api.consilio.com.br/wp-json/wp/v2/"
  }
};
