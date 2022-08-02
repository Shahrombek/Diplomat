export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Diplomat",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "logo.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Load a Node.js module directly (here it's a Sass file)

    // CSS file in the project
    "swiper/css/swiper.min.css",
    "~/assets/css/main.css",
    // SCSS file in the project
    "~/assets/scss/main.scss",
    // fonts
    "~/assets/fonts/stylesheet.css",
    "~/assets/fonts/font2/stylesheet.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: `~/plugins/VueAwesomeSwiper.js`,
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/fontawesome"],
  
  fontawesome: {
    component: "Fa",
    // suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  },
  
  styleResources: {
    scss: ["~assets/scss/main.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
