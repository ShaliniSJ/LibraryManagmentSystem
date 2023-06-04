<template>
  <div v-if="alert" class="main" style="margin-bottom:0;">
    <div class="alert error" style="margin-bottom:0;">
      <input type="checkbox" id="alert1" />
      <label class="close" title="close" for="alert1">
        <i class="icon-remove" @click="alert = !alert">&times;</i>
      </label>
      <p class="text">
        <strong>Error!</strong> Invalid Credentials.
      </p>
    </div>
  </div>
  <section class="h-100 gradient-form" style="margin-top: 0px;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6 card">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    <h4a class="mt-1 mb-5 pb-1">Login</h4a>
                  </div>
                  <form @submit.prevent="submitHandler">
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example11">Login ID</label>
                      <input type="text" id="form2Example11" class="form-control" placeholder="Enter your login ID"
                        v-model="loginid" required />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example22">Password</label>
                      <input type="password" id="form2Example22" class="form-control" v-model="Password"
                        placeholder="Enter your password" required />
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                      <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 pt-2 pb-2 px-5" type="submit">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">Wordsmith Library</h4>
                  <p class="middium mb-0">
                    This login page is only for librarian who present in the
                    library. Please head to the search page if you want more
                    info about books present in the library. You can get more
                    info about the library
                    <a href="/" style="font-weight: 900; color: #66fcf1">here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
const axios = require("axios");

export default {
  setup() {
    const alert = ref(false);
    let flag = false;
    const submitHandler = async () => {
      try {
        let userdatas = await axios.get('http://localhost:5000/Signin')
        // console.log(userdatas)
        for (const userdata of userdatas.data) {
          if (userdata.idno == loginid.value && userdata.pass == Password.value) {
            console.log("login success")
            loginid.value = "";
            Password.value = "";
            flag = true;
            window.location.href = "/Dashboard";
            break;

          }
        }
        if(!flag) {
          alert.value = true;
          console.log(alert.value)
          console.log("login failed")
        }
      }
      catch (err) {
        console.log(err)
      }
    };

    const loginid = ref("");
    const Password = ref("");
    return { submitHandler, loginid, Password,alert };
  },
};
</script>
<style scoped src="../assets/css/Signin.css"></style>
