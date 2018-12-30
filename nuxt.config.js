const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "Francesco Brachini Web Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Web Developer Javascript Developer "
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:700"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#FFFFFF" },

  /*
  ** Global CSS
  */
  css: ["~assets/styles/style.css"],
  transition: {
    name: "fade",
    mode: "out-in"
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ['nuxt-fontawesome', {
      component: 'fa', 
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebook']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faMapMarker']
        }
      ]
    }]
  ],
  serverMiddleware: ["~/api/contact"],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    "postcss-cssnext": {
      browsers: ["Firefox > 20", "ie <= 5"]
    },
    extend(config, ctx) {}
  }
};
