<template>
	<div>
		<AppTopBar />
		<div>Profile</div>
		<div class="navigate" @click="navigateCalendar">Set Schedule</div>
		<div class="navigate" @click="navigateCreateLessonPlan" >Create Lesson Plan</div>
		<div class="navigate" @click="navigateDataCollection" >Data Collection</div>
		<div class="navigate" @click="navigateGraphData" >Graph Data</div>
		<div class="profileInfo">
			<div>Name: 
        {{profile.firstName}} 
        {{profile.middleName}}
        {{profile.lastName}}
      </div>

      <div>License Number: {{profile.licenseNumber}}</div>
      <div>Email: {{profile.email}}</div>
      <div>Address: {{`${Object.values(profile.address).join(" ")}`}}</div>
			
		</div>
	</div>
</template>

<script>
import AppTopBar from "@/components/AppTopBar.vue";
import { readCookie } from "@/utils/cookies";
import {ActiveUser} from "@/data/ActiveUser.js"

export default {
	data() {
		let cookies = readCookie();
		return {
			email: cookies.email,

      profile: ActiveUser.data
			
		};
	},
	methods: {
		navigateCalendar() {
			this.$router.push("/CalendarScheduler");
		},
		navigateCreateLessonPlan() {
			this.$router.push("/CreateLessonPlan");
		},
		navigateDataCollection(){
			this.$router.push("/DataCollection");
		},
		navigateGraphData(){
			this.$router.push("/GraphData");
		}
	},
	components: {
		AppTopBar,
	},
};
</script>

<style scoped>

.navigate:hover {
	cursor: pointer;
	background: lightblue;
}
.profileInfo {
  display: flex;
  align-items: flex-start;
  padding: 30px;
  margin: 30px;
  flex-direction: column;
  border: 2px solid red;
}
.profileInfo > div {
  margin: 10px !important;
}
</style>
