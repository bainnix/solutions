<template>
<div>
  <h2>Login</h2>
  <input placeholder="Email Address" required>
  <input placeholder="Password" required>
  <button @click="request_login">Login</button>
</div>
</template>

<script>
export default {
  
  methods:{
    request_login(){
      this.$router.push("/createClient")
    }
  }
}
</script>

<style scoped>

</style>>
