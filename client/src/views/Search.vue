<template>
  <div class="bodys">
    <header class="conatiners">
      <nav class="navbar">
        <div class="logo"><router-link to="/">WORDSMITH LIBRARY</router-link></div>
      </nav>
      <div class="content">
        <p>
          Oops, imagine traveling to the library, only to discover your desired book has vanished. But fret not! Our
          innovative library service has you covered. With our magical search bar, finding books is a breeze. Say goodbye
          to aimless wandering and hello to laughter-filled adventures. Unleash the magic of our library—where books await
          your discovery!
          <br><br>
        </p>
      </div>

      <div class="search-container">
        <input type="text" placeholder="Search Books" class="search-input" v-model="searchTerm" />
      </div>

      <div v-if="count === undefined || count > 0" class="title">
        <p style="margin-left:15%;">Book Name</p>
        <p style="margin-left:25%;">Author</p>
        <p style="margin-left:23%;">Availability</p>
      </div>
      <div v-else class="content">
        <p>
          Oops! It seems our library shelves are experiencing a temporary vacancy for the book you're seeking. But fear not! Our team of book-loving wizards is on a quest to bring it back soon. In the meantime, we invite you to explore our vast collection of other captivating reads that are sure to ignite your imagination. Happy reading!
        </p>
      </div>
      <div class="container">
        <div class="book"></div>
        <div class="glass" v-for="book in filteredBooks" :key="book.bcode">
          <h4>{{ book.name }}</h4>
          <h4>{{ book.author }}</h4>
          <h4>{{ book.availability }}</h4>
        </div>
      </div>
    </header>
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