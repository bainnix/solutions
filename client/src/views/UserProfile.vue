<template>
  <div>
    <AppTopBar />
    <div>Profile</div>
    <div class="navigate" @click="navigateCalendar"> Set Schedule </div>
    <div>Create Lesson Plan</div>

  </div>
</template>

<script>
import AppTopBar from "@/components/AppTopBar.vue";

export default {
  

  methods: {
		navigateCalendar() {
			this.$router.push("/CalendarScheduler");
		}
  },
  components:{
    AppTopBar
  }
}
</script>

<style>
.navigate:hover{
  cursor: pointer;
  background: lightblue;
}

</style>
