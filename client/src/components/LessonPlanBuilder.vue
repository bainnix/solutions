<template>
	<div>
		<div>Builder</div>
		<div v-if="!selectedPatient">
			<div @click="showDropDown = !showDropDown">Select Patient</div>
			<DropDown @choosenUser="choosenUser" :dropDownData="profile.patients" :showDropDown="showDropDown"/>
		</div>
		<div v-if="selectedPatient">
			<button @click="createNewLessonPlan">Create New</button>
			<button>Load Previous</button>
		</div>
        <button @click="save" v-if="newLessonPlan">Save</button>
		<div class="questionContainer">
			<div v-if="newLessonPlan"> 
				<template v-for="(question, index) of newLessonPlan.questions" :key="index">
					<div>
						{{ question.text}}
						<span @click="editQuestion(index)" class="material-icons editIcon"> edit </span>
						<span @click="deleteQuestion(index)" class="material-icons deleteIcon"> delete_forever </span>
					</div>
				</template>
				<template v-for="(durationTracker, index) of newLessonPlan.durationTrackers" :key="index">
					<div>
						{{ durationTracker.name}}
						<span @click="editDurationTracker(index)" class="material-icons editIcon"> edit </span>
						<span @click="deleteDurationTracker(index)" class="material-icons deleteIcon"> delete_forever </span>
					</div>
				</template>
				<template v-for="(frequencyTracker, index) of newLessonPlan.frequencyTrackers" :key="index">
					<div>
						{{ frequencyTracker.name}}
						<span @click="editFrequencyTracker(index)" class="material-icons editIcon"> edit </span>
						<span  @click="deleteFrequencyTracker(index)" class="material-icons deleteIcon"> delete_forever </span>
					</div>
				</template>
                <button @click="addQuestion">Add Question</button>
                <button @click="addDurationTracker">Add Duration Tracker</button>
                <button @click="addFrequencyCounter">Add Frequency Tracker</button>
            </div>
		</div>
	</div>
</template>

<script>
import { readCookie } from "@/utils/cookies";
import { LessonPlan } from "@/data/LessonPlan";
import {ActiveUser} from "@/data/ActiveUser.js"
import DropDown from "@/components/DropDownSelectData.vue"
import {saveNewLessonPlan} from "@/request/lessonPlans.js"

export default {
	data() {
		let cookies = readCookie();
		return {
			newLessonPlan: null,
			selectedPatient:null,
			user: cookies.email,
			profile: ActiveUser.data,
			showDropDown: false,			
		};
	},
	methods: {
		async save(){
			let savedPlan = await saveNewLessonPlan(this.newLessonPlan)
			console.log('saved', savedPlan);
		},
		choosenUser(selected){
			this.selectedPatient = selected		
		},
		addQuestion(){
			this.newLessonPlan.addQuestion()
		},
		addDurationTracker(){
			this.newLessonPlan.addDurationTracker()
			console.log(this.newLessonPlan);
		},
		addFrequencyCounter(){
			this.newLessonPlan.addFrequencyTracker()
			console.log(this.newLessonPlan);
		},
		createNewLessonPlan() {
			console.log('selected', this.selectedPatient);
			let lessonPlan = new LessonPlan(LessonPlan.DefaultName.NEWLESSONPLAN,this.user, this.selectedPatient);
			this.newLessonPlan = lessonPlan;
			this.$emit("lessonPlan", this.newLessonPlan);
		},
		editFrequencyTracker(index){			
            this.$emit("editFrequencyTracker", index);
		},
		editDurationTracker(index){			
			this.$emit("editDurationTracker", index);
		},
		editQuestion(index){
			this.$emit("editQuestion", index);
		},
		deleteFrequencyTracker(index){
			this.newLessonPlan.deleteFrequencyTracker(index)
		},
		deleteDurationTracker(index){
			this.newLessonPlan.deleteDurationTracker(index)
		},
		deleteQuestion(index){
			this.newLessonPlan.deleteQuestion(index)            
		},
	},
	components:{
		DropDown
	}
};
</script>

<style scoped>
.questionContainer {
	display: flex;
	padding: 5px;
	margin: 5px !important;
}
.editIcon:hover{
    cursor: pointer;
    color: green;
}
.deleteIcon:hover{
    cursor: pointer;
    color: red;
}
</style>
