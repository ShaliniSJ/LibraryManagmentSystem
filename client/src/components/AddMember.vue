<template>
    <form class="form" @submit.prevent="submitHandler">
      <label>Name : </label>
      <input v-model="name" class="glass" type="text" placeholder="Enter name" required />
      <br><br>
      <label>Address : </label>
      <input v-model="address" class="glass" type="text" placeholder="Enter address" required />
      <br><br>
      <label>Phone number : </label>
      <input v-model="number" class="glass" type="number" placeholder="Enter phone number" required />
      <br><br>
      <button class="btn " type="submit">Register</button>
    </form>
    <!-- notification -->
    <div class="container mt-5" v-if="success">
      <div class="row justify-content-lg-center">
        <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6" >
          <div class="alert fade_success .fade"> <button aria-hidden="true" data-dismiss="alert" class="close"
              type="button" @click="success = !success">&times;</button> <strong>Successfully
              Registered!</strong> </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('');
    const address = ref('');
    const number = ref('');
    const success = ref(false);
    async function submitHandler() {
      console.log("submitting");
      try {
        const response = await axios.post("http://localhost:5000/members", {
          name: name.value,
          address: address.value,
          ph: number.value,
        });
        console.log(response, "working");
        console.log(name.value, address.value, number.value);
        name.value = "";
        address.value = "";
        number.value = "";
        success.value = true;
      }
      catch {
        console.log("error");
        success.value = false;
      }
    }

    return {
      name,
      address,
      number, success,
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
  -webkit-appearance: none;
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

</style>