// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@sidebase/nuxt-auth", '@formkit/nuxt'],
  auth: {
    baseURL: '/api/auth',
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        signUp: { path: '/register', method: 'post' },
        getSession: { path: '/session', method: 'post' }
      },
      token: { signInResponseTokenPointer: '/token/accessToken' },
      pages: {
        login: '/login',
        register: '/register',
      },
    },
    globalAppMiddleware: true
  }
})