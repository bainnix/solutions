<template>
    <div>
      <AppTopBar />
      <div>Home Page</div>
      <StopWatch/>  
    </div>
  </template>
  
  <script>
  import AppTopBar from "@/components/AppTopBar.vue";
  import {userProfile} from "@/request/internalUsers"
  import { readCookie } from "@/utils/cookies";
  import {User} from "@/data/Internal.js"
  import {ActiveUser} from "@/data/ActiveUser.js"
  import StopWatch from "@/components/StopWatch.vue";
  export default {
    data(){
    let cookies = readCookie()
    return{
      email: cookies.email,
      attendeeData: null,
      profile: null
    }
},
    mounted: async function() {
        let email = this.email
        let profile = await userProfile(email)
        let hydratedProfile = User.hydrate(profile)
        this.profile = hydratedProfile
        ActiveUser.data = hydratedProfile
        console.log('hydrated', hydratedProfile);
        console.log('profile', profile);
        console.log('active', ActiveUser.data);

    },
    components:{
    AppTopBar,
    StopWatch
}
  }
  </script>
  
  <style>
  .navigate:hover{
    cursor: pointer;
    background: lightblue;
  }

  
  </style>
  