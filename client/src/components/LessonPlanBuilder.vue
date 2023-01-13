<template>
	<div>
		<div>Builder</div>
		<button @click="createNewLessonPlan">Create New</button>
		<button>Load Previous</button>
        <button v-if="newLessonPlan">Save</button>
		<div class="questionContainer">
			<div v-if="newLessonPlan"> 
				<template v-for="(question, index) of newLessonPlan.questions" :key="index">
					<div>
						{{ question.text}}
						<span @click="editQuestion(index)" class="material-icons editIcon"> edit </span>
						<span @click="deleteQuestion(index)" class="material-icons deleteIcon"> delete_forever </span>
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
import { LessonPlan } from "@/data/LessonPlan";
export default {
	data() {
		return {
			newLessonPlan: null,
		};
	},
	methods: {
        addQuestion(){
            this.newLessonPlan.addQuestion()
        },
		createNewLessonPlan(name, user) {
			let lessonPlan = new LessonPlan(name, user);
			this.newLessonPlan = lessonPlan;
			this.$emit("lessonPlan", this.newLessonPlan);
		},
        deleteQuestion(index){
            this.newLessonPlan.deleteQuestion(index)            
        },
        editQuestion(index){
            this.$emit("editQuestion", index);
        },
        addDurationTracker(){
			this.newLessonPlan.addDurationTracker()
			console.log(this.newLessonPlan);
        },
		addFrequencyCounter(){
			this.newLessonPlan.addFrequencyTracker()
			console.log(this.newLessonPlan);
		}
	},
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
