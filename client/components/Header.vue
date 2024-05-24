<script setup lang="ts">
const { status, data, signOut  } = useAuth()
</script>

<template>
  <div class="navbar bg-base-100 mb-3 px-8">
    <div class="navbar-start"></div>
    <div class="navbar-center">
      <NuxtLink
        to="/"
        class="btn btn-ghost text-xl"
      >
        Bookworm
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <template v-if="status !== 'authenticated'">
        <NuxtLink
          to="/login"
          class="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 15 15"
          ><path
            fill="currentColor"
            fill-rule="evenodd"
            d="M7 1h7v13H7v-1h6V2H7zm.854 3.146l3.34 3.34l-3.327 3.603l-.734-.678L9.358 8H1V7h8.293L7.146 4.854z"
            clip-rule="evenodd"
          /></svg>
        </NuxtLink>
        <NuxtLink
          to="/register"
          class="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M15 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 1.9a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 12.9 8A2.1 2.1 0 0 1 15 5.9M4 7v3H1v2h3v3h2v-3h3v-2H6V7zm11 6c-2.67 0-8 1.33-8 4v3h16v-3c0-2.67-5.33-4-8-4m0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H8.9V17c0-.64 3.1-2.1 6.1-2.1"
          /></svg>
        </NuxtLink>
      </template>
      <template v-else>
        <p>
          {{ data?.fullname }}
        </p>
        <NuxtLink
            to="search"
            class="btn btn-ghost btn-circle"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
        </NuxtLink>
        <button
          class="btn btn-ghost btn-circle"
          @click="signOut({ callbackUrl: '/login' })"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
          /></svg>
        </button>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>