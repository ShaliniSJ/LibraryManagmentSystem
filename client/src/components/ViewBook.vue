<template>
    <div class="search-container">
        <input type="text" placeholder="Search Books" class="search-input" v-model="searchTerm" />
    </div>

    <div v-if="count === undefined || count > 0" class="title">
        <p style="margin-left:5%;">Bcode</p>
        <p style="margin-left:13%;">Book Name</p>
        <p style="margin-left:20%;">Author</p>
        <p style="margin-left:8%;">Availability</p>
        <p style="margin-left:3%;">Holdby</p>

    </div>
    <div v-else class="content">
        <p>Book not found</p>
    </div>
    <div class="container">
        <!-- <div class="book"></div> -->
        <div class="glass" v-for="book in filteredBooks" :key="book.bcode">
            <p style="margin-left:0px; width:10%;">{{ book.bcode }}</p>
            <p style="margin-left:0px; width:37%;">{{ book.name }}</p>
            <p style="margin-left:0px; width:30%">{{ book.author }}</p>
            <p style="margin-left:0px; width:10%">{{ book.availability }}</p>
            <p style="margin-left:0px; width:10%">{{ book.holdby }}</p>
        </div>
    </div>
</template>
<script>

</script>
<style scoped src="@/assets/css/Search.css"></style>

<script>
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    const books = ref([])
    const searchTerm = ref('')

    onMounted(async () => {
      const response = await axios.get('http://localhost:5000/books')
      books.value = response.data
    })

    const filteredBooks = computed(() => {
      return books.value.filter((book) => {
        return book.name.toLowerCase().includes(searchTerm.value.toLowerCase())
      })
    })
    let count = computed(() => {
      return filteredBooks.value.length
    })
    
    
    return {
      books,
      searchTerm,
      filteredBooks,
      count
      
    }
  },
  components: { RouterLink }
}
</script>
