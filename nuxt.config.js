export default {
  server:{
    port: 4444,
  },
  publicRuntimeConfig:{
    BASEURL: process.env.BASEURL,
    NAME: process.env.NAME || "Mailmaxx",
    DESCRIPTION: process.env.DESCRIPTION || "Smart Email Solutions for Individuals, Teams & Organizations", 
  },

  head: {
    titleTemplate: '%s - Mailmaxx',
    title: 'Mailmaxx',
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' }
    ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  "~/assets/styles/app.scss",
  ],


  plugins: [
  ],

  components: {
    dirs: [
    '@/components',
    '@/components/Domains',
    '@/components/Mailboxes',
    '@/components/Mailboxes/Forms',
    '@/components/Navigations',
    '@/components/SetUp',
    '@/components/SetUp/Steps',
    '@/components/SetUp/Modals',
    '@/components/Partials',
    ]
  },
  buildModules: [
  '@nuxtjs/vuetify',
  ],
  modules: [
  '@nuxtjs/axios',
  '@nuxtjs/auth-next',
  ],
  axios: {
    baseURL: process.env.BASEURL
  },
  auth: {
    strategies: {
      local:{
        token:{
          type: 'Token',
          property: 'token',
          maxAge : 86400,
        },
        user:{
          property : false
        },
        endpoints: {
          login: { url: "/auth/", method: "post", propertyName: 'token'},
          user : {url: "/profile", method: "get", propertyName : false }
        },

      },

    },
    redirect: {
      login: "/login",
      logout: '/login',
      home : false
    },
    plugins: [
    '@/plugins/auth',
    '@/plugins/appConfig',
    {src:"@/plugins/darkMode"},
    {src:"@/plugins/otp", mode: 'client'},
    {src:"@/plugins/filters", mode: 'client'},
    {src:"@/plugins/tel", mode: 'client'},
    {src:"@/plugins/toast", mode: 'client'},
    ],
    localStorage: false
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.config.js'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
