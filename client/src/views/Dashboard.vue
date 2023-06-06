<template>
  <body data-bs-theme="light">
    <header>
      <div class="containers">
        <div class="row">
          <div class="col-lg-10 heading"><router-link to="/"> WORDSMITH LIBRARY</router-link></div>
        </div>
        <div class="row">
          <div class="col-lg-10 sidebar">
            <div class=" "></div>
            <ul>
              <li class="" v-for="(nav, i) in navelements" :key="i" :class="{ active: activeIndex === i }"
                @click="setActiveLink(i)">
                <a href="#">{{ nav }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container glass">
        <div class="row">
          <div class="col-lg-11 heading">Dashboard</div>
        </div>
        <hr>
        <div class="body" v-if="activeIndex === undefined">
          Hello ! . Counting on you to keep our library running smoothly.
        </div>

        <div class="view" v-if="activeIndex === 0">
          <ViewBook />
        </div>

        <div class="member" v-if="activeIndex === 1">
          <Member />
        </div>

        <div class="newMember" v-if="activeIndex === 2">
          <NewMember />
        </div>

        <div class="remove" v-if="activeIndex === 3">
          <form class="form" @submit.prevent="submitHandler">
            <label>Idno : </label>
            <input v-model="idno" class="glass" type="number" placeholder="Enter the idno of the member" required />
            <br><br>
            <button class="btn " type="submit">Remove</button>
          </form>
          <div class="container mt-5" v-if="success" style="margin-left:150px ;">
            <div class="row justify-content-lg-center">
              <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                <div class="alert fade_success .fade"> <button aria-hidden="true" data-dismiss="alert" class="close"
                    type="button" @click="success = !success">&times;</button> <strong>Successfully
                    Removed the member!</strong> </div>
              </div>
            </div>
          </div>
        </div>

        <div class="addBook" v-if="activeIndex === 4">
          <Addbook />
        </div>

        <div class="register" v-if="activeIndex === 5">
          <Register />
        </div>

        <div class="Submit" v-if="activeIndex === 6">
          <Submit />
        </div>

      </div>
    </header>
  </body>
</template>

<script>
// importing components
import Submit from "@/components/Submit.vue";
import Register from "@/components/Register.vue";
import Addbook from "@/components/Addbook.vue";
import NewMember from "@/components/AddMember.vue";
import ViewBook from "@/components/ViewBook.vue";
import Member from "@/components/Member.vue";


import axios from "axios";
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  setup() {
    const idno = ref('');
    const success = ref(false);
    const navelements = ref(['View book status', 'Members info', 'Add new member', 'Remove member', 'Add new book', 'Resgister a book', 'Submit a book'])
    const activeIndex = ref();
    const setActiveLink = (index) => {
      activeIndex.value = index;
    };
    async function submitHandler() {
      console.log("submitting");
      try {
        const response = await axios.delete(`http://localhost:5000/members/${idno.value}`);
        console.log(response, "working");
        idno.value = "";
        success.value = true;
        console.log(idno.value);
      }
      catch {
        console.log("error");
        success.value = false;
      }
    }
    return {
      navelements,
      setActiveLink,
      activeIndex, idno,
      submitHandler,success
    }
  },
  components: { RouterLink, ViewBook, Member, NewMember, Addbook, Register, Submit }
}
</script>
<style scoped src="@/assets/css/dashboard.css"></style>
