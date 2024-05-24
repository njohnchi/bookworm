<script setup lang="ts">
import useBooks from "~/composables/books";

const { books } = useBooks();
const route = useRoute()

const book = computed(() => books.value.find((book) => book.id === route.params.id));

</script>

<template>
  <div class="max-w-3xl mx-auto p-6 bg-base-200 shadow-lg rounded-lg relative">
    <div class="absolute top-4 right-4 z-10">
      <button class="btn btn-sm bg-base-100" @click="$router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
          <path fill="#1d4cd7" fill-rule="evenodd" stroke="#1d4cd7" stroke-linejoin="round" stroke-width="4" d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <div class="card lg:card-side bg-base-200 shadow-xl">
      <figure class="lg:w-1/3 p-4">
        <img :src="book.volumeInfo.imageLinks.thumbnail" alt="Book Cover" class="rounded-md">
      </figure>
      <div class="card-body lg:w-2/3">
        <h2 class="card-title text-3xl font-bold">{{ book.volumeInfo.title }}</h2>
        <p class="text-lg">by <span class="font-semibold">{{ book.volumeInfo.authors.join(', ') }}</span></p>
        <p class="text-gray-600">Published by {{ book.volumeInfo.publisher }} on {{ book.volumeInfo.publishedDate }}</p>
        <p class="mt-4 text-gray-700">{{ book.volumeInfo.description }}</p>
        <div class="card-actions justify-end mt-4">
          <a :href="book.volumeInfo.previewLink" target="_blank" class="btn btn-primary">View</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>