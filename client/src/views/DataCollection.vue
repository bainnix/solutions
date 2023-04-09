
<template>
	<div>
		<AppTopBar />
		Data Collection
		
			<div @click="showDropDown = !showDropDown">Select Patient</div>
			<DropDown
				@choosenUser="choosenUser"
				:dropDownData="profile.patients"
				:showDropDown="showDropDown"
			/>
		<div>
            <DataCollector :lessonPlan="activePlan" />
        </div>
	</div>
</template>

<script>
import AppTopBar from "@/components/AppTopBar.vue";
import DropDown from "@/components/DropDownSelectData.vue";
import { ActiveUser } from "@/data/ActiveUser.js";
import { getLessonPlan } from "@/request/lessonPlans";
import DataCollector from "@/components/DataCollector.vue"
import { readCookie } from "@/utils/cookies";
export default {
	data() {
		let cookies = readCookie();
		return {
			selectedPatient: null,
			user: cookies.email,
			profile: ActiveUser.data,
			showDropDown: false,
            activePlan: null
		};
	},
	methods: {
		async choosenUser(selected) {
			this.selectedPatient = selected;
			if (this.showDropDown) {
				this.showDropDown = false;
			}
			let patientID = this.selectedPatient.id;            
			this.getActivePlan(patientID);
			console.log("selected", this.selectedPatient, this.showDropDown);
		},
		async getActivePlan(patientID) {
			let activeLessonPlan = await getLessonPlan(patientID);
            this.activePlan = activeLessonPlan.data.result
			console.log("activePlan", activeLessonPlan);
		},
	},
	components: {
		AppTopBar,
		DropDown,
        DataCollector
	},
};
</script>

<style></style>
