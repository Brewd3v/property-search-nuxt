// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {},
  nitro: {
    routeRules: {
      "/api/pedder": {
        swr: true,
      },
      "/api/dexters": {
        swr: true,
      },
      "/api/rightmove": {
        swr: true,
      },
    },
  },
});
