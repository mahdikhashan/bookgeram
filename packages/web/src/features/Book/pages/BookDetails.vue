<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBookStore } from '../store';

const bookList = useBookStore()
const { books } = storeToRefs(bookList)

</script>

<template>
  <div>
    <p>Book Details</p>
    <div v-for="book in books" :key="book.id">{{ book.name }}</div>
  </div>
</template>
