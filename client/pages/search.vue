<script setup lang="ts">
import BookInfo from "~/components/BookInfo.vue";
import useBooks from "~/composables/books";

const { books, preference } = useBooks();
const isFetching = ref(false)
const error = ref('')

const getRecommendations = async () => {
  isFetching.value = true
  try {
    const response = await fetch('http://127.0.0.1:3001/books/search?q=' + preference.value, {
      method: 'GET',
    })
    if (!response.ok) {
      throw new Error('An error occurred while searching for books')
    }
    const data = await response.json()
    console.log(data)
    books.value = data.items
  } catch (err) {
    console.error(err)
    error.value = 'An error occurred while searching for books'
  }
  isFetching.value = false
}
</script>

<template>
  <div class="flex flex-col">
    <div class="mb-3">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">What are you looking for?</span>
        </div>
        <div class="join w-full">
          <input v-model="preference" class="input input-bordered join-item grow" placeholder="Type here"/>
          <button @click="getRecommendations" class="btn join-item bg-blue-800" :disabled="isFetching">Search</button>
        </div>
        <div class="label">
          <span v-if="error" class="label-text-alt text-red-600">{{ error }}</span>
        </div>
      </label>
    </div>
    <div class="grid grid-cols-1 gap-8 mb-8">
<!--      //loading-->
      <div v-if="isFetching" class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
          <circle cx="18" cy="12" r="0" fill="#1d4cd7">
            <animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
          </circle>
          <circle cx="12" cy="12" r="0" fill="#1d4cd7">
            <animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
          </circle>
          <circle cx="6" cy="12" r="0" fill="#1d4cd7">
            <animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" />
          </circle>
        </svg>
      </div>
      <BookInfo v-else v-for="book in books" :key="book.id" :book="book"/>
    </div>
  </div>
</template>

<style scoped>

</style>