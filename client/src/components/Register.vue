<template>
  <form class="form" @submit.prevent="submitHandler">
    <label>Bcode : </label>
    <input v-model="bcode" class="glass" type="text" placeholder="Enter name" required />
    <br><br>
    <label>Idno : </label>
    <input v-model="idno" class="glass" type="text" placeholder="Enter idno of the member" required />
    <br><br>

    <button class="btn " type="submit">Register</button>
  </form>
  <!-- notification -->
  <div class="container mt-5">
    <div class="row justify-content-lg-center">
      <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
        <div class="alert fade_success .fade" v-if="success"> <button aria-hidden="true" data-dismiss="alert"
            class="close" type="button" @click="success = !success">&times;</button> <strong>Successfully
            Registered!</strong> </div>
        <div class="alert fade_error .fade" v-if="success==false"> <button aria-hidden="true" data-dismiss="alert" class="close"
            type="button" @click="success = undefined">&times;</button > <strong>Sorry the book is not available !</strong> </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from 'vue'
export default {
  setup() {
    const bcode = ref('');
    const idno = ref('');
    const success = ref();
    async function submitHandler() {
      console.log("submitting");
      try {
        const response = await axios.post(`http://localhost:5000/books/${bcode.value}`, {
          idno: idno.value,
        });
        console.log(response, "working");
        bcode.value = "";
        idno.value = "";
        if(response.data == "Book not available")
        success.value = false;
        else  
        success.value = true;
      }
      catch {
        console.log("error");
        success.value = false;
      }
    }

    return {
      bcode,
      idno,
      success,
      submitHandler
    }
  },
}
</script>
<style scoped>
.form {
  margin: 30px 0 10px 20px;
  width: 100%;
  padding-bottom: 0px;
}

.form label {
  color: black;
  /* font-weight: bold; */
  font-size: 14px;
  display: block;
}

.form input {
  width: 80%;
  color: #1f2833;
  font-weight: bolder;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-size: 14px;
  background-color: transparent;
}

.btn:hover {
  background-color: #66fcf1;
  color: #1f2833;
}

.btn {
  background-color: #1f2833;
  color: #66fcf1;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/*error*/

button.close {
  /* -webkit-appearance: none; */
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
}

.close {
  font-size: 20px;
  color: #fff;
  opacity: 0.9;
  font-weight: normal;
}


.fade_success {
  background-color: #c9ffe5;
  border: 1px solid #09c97f;
}

.fade_success .close {
  color: #09c97f;
}

.fade_success strong {
  color: #09c97f;
}

.fade_error .close {
  color: #f95668
}

.fade_error strong {
  color: #f95668
}

.fade_error {
  background-color: #ffdbdb;
  border: 1px solid #f95668
}

.fade_error .close {
  color: #f95668
}

.glass {
  /* display: flex; */
  width: 70%;
  color: #ecf0f1;
  border-radius: 25px;
  /* padding: 20px; */
  background: rgba(255, 255, 255, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.3);
  background-clip: padding-box;
  backdrop-filter: blur(10px);
  margin-top: 10px;
}</style>