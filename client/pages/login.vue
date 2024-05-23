<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
})

const { token, signIn  } = useAuth();
const err = ref('');
const login = async (fields) => {
  try {
    await signIn(fields, { callbackUrl: '/' });
    err.value = '';
  } catch (error) {
    err.value = 'Invalid email or password';
  }
}
</script>

<template>
  <div class="card bg-neutral text-neutral-content">
    <div class="card-body items-center text-center">
      <h2 class="card-title">
        Login
      </h2>
      <FormKit
          type="form"
          submit-label="Login"
          :errors="[err]"
          @submit="login"
      >
        <FormKit
            id="email"
            type="email"
            name="email"
            validation="required|email"
            label="Email"
        />
        <FormKit
            id="password"
            type="password"
            name="password"
            validation="required"
            label="Password"
        />
      </FormKit>
    </div>
  </div>
</template>

<style scoped>

</style>