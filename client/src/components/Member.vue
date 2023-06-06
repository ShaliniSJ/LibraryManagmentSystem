<template>
  <div class="search-container">
    <input type="text" placeholder="Search Books" class="search-input" v-model="searchTerm" />
  </div>

  <div v-if="count === undefined || count > 0" class="title">
    <p style="margin-left:5%;">Idno</p>
    <p style="margin-left:10%;">Name</p>
    <p style="margin-left:24%;">Address</p>
    <p style="margin-left:17%;">Phone number</p>

  </div>
  <div v-else class="content">
    <p>Member not found</p>
  </div>
  <div class="container">
    <!-- <div class="book"></div> -->
    <div class="glass" v-for="mem in filteredMembers" :key="mem.idno">
      <p style="margin-left:0px; width:10%;">{{ mem.idno }}</p>
      <p style="margin-left:0px; width:20%;">{{ mem.name }}</p>
      <p style="margin-left:0px; width:50%">{{ mem.address }}</p>
      <p style="margin-left:0px; width:10%">{{ mem.ph }}</p>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/Search.css"></style>

<script>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const members = ref([])
    const searchTerm = ref('')

    onMounted(async () => {
      const response = await axios.get('http://localhost:5000/members')
      members.value = response.data
    })

    const filteredMembers = computed(() => {
      return members.value.filter((mem) => {
        return mem.name.toLowerCase().includes(searchTerm.value.toLowerCase())
      })
    })
    let count = computed(() => {
      return filteredMembers.value.length
    })


    return {
      members,
      searchTerm,
      filteredMembers,
      count

    }
  },
}
</script>
