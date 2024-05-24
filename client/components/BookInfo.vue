<script setup lang="ts">
defineProps({
  book: Object
})
</script>

<template>
  <div class="card card-side bg-base-200 shadow-2xl max-w-xl">
    <figure><img :src="book.volumeInfo.imageLinks.thumbnail" alt="Movie"/></figure>
    <div class="card-body w-3/6">
      <h2 class="card-title">{{ book.volumeInfo.title }}</h2>
      <p class="line-clamp-6">{{ book.volumeInfo.description.slice(0, 100) }}</p>
      <div class="card-actions justify-end">
        <a :href="book.volumeInfo.previewLink" class="btn btn-sm btn-primary">Preview</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>