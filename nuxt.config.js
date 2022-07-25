import { firestore } from "firebase-admin";
require('dotenv').config()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'serverless',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt_hands_on',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/firebase'
  ],

  // firebase configs
  firebase: 
    {
      config: {
        apiKey: "AIzaSyDbdihJ-QVJ0jEVg3nzKSvQUMfouGbeThU",
        authDomain: "nuxt-hands-on.firebaseapp.com",
        projectId: "nuxt-hands-on",
        storageBucket: "nuxt-hands-on.appspot.com",
        messagingSenderId: "600523337449",
        appId: "1:600523337449:web:7e13f577c1b21127308a78"
      },
      services: {
        auth: {
            persistence: 'local',
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChanged',
            },
            ssr: false
          },
        firestore: true,
        storage: true,
      }
  },
  
  firestore: {
    memoryOnly: false, // default
    chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
    enablePersistence: true,
    emulatorPort: 8080,
    emulatorHost: 'localhost',
    settings: {
      // Firestore Settings - currently only works in SPA mode
    }
  },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
