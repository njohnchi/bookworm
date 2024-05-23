<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
})

const { status, data, token, signIn  } = useAuth()
const err = ref('');

const register = async (fields) => {
  try {
    const res = await $fetch('api/auth/register', {
      method: 'POST',
      body: JSON.stringify(fields),
    });
    if (res) {
      await signIn(fields, { callbackUrl: '/' });
    }
  } catch (error) {
    err.value = 'Invalid credentials. Please try again.'
  }
};
</script>

<template>
  <div class="card bg-neutral text-neutral-content">
    <div class="card-body items-center text-center">
      <h2 class="card-title">
        Register
      </h2>
      <FormKit
          type="form"
          submit-label="Register"
          :errors="[err]"
          @submit="register"
      >
        <FormKit
            id="name"
            type="text"
            name="name"
            validation="required"
            label="Name"
        />
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