<template>
  <div id="app">
    <AppTopBar />
    <CalendarMonth :attendeeData="attendeeData"/>
  </div>
</template>

<script>
import CalendarMonth from "@/components/CalendarMonth.vue";
import AppTopBar from "@/components/AppTopBar.vue";
import {appointmentAttendee} from "@/request/internalUsers"
import { readCookie } from "@/utils/cookies";
export default {
  name: "App",
  data(){
    let cookies = readCookie()
    return{
      email: cookies.email,
      attendeeData: null
    }
  },

  mounted: async function(){
    let email = this.email
    let attendeeData = await appointmentAttendee(email)
    this.attendeeData = attendeeData.data.result
    console.log(this.attendeeData);
  },

  components: {
    CalendarMonth,
    AppTopBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-family: sans-serif;
  font-weight: 100;
  --grey-100: #e4e9f0;
  --grey-200: #cfd7e3;
  --grey-300: #b5c0cd;
  --grey-800: #3e4e63;
  --grid-gap: 1px;
  --day-label-size: 20px;
}

ol,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.calendar-month-header {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
}
</style>
