<template>
<div>
  <h2>Login</h2>
 
  <input v-model="email" placeholder="Email Address" required>
  <input type="password" v-model="password" placeholder="Password" required>
  <button @click="request_login">Login</button>
 
</div>

</template>

<script>
import {siteLogin} from "@/request/login.js"
import { writeCookie, readCookie } from "@/utils/cookies"
import jwt_decode from "jwt-decode"
export default {

  data(){
    let cookies = readCookie()
    return{
      email: null,
      password: null,
      userEmail: cookies ? cookies.username : null
    }
  },
  methods:{
    async request_login(){
      let email = this.email
      let password = this.password
        let loggedIn = await siteLogin({
          email: email,
          password: password
        })
      if(loggedIn){
        let decode = jwt_decode(loggedIn.data.access_token)
        let data = {
          email: decode.email
        }
        writeCookie(data, {d: 1})
        this.$router.push("/createClient") 
      }
    }
  }
}
</script>

<style scoped>

</style>>
