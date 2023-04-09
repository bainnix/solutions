<!-- eslint-disable no-debugger -->
<template>
	<div>
		<AppTopBar />
		<div v-if="open">
			<LessonPlanPopUp
				@closePopUp="closePopUp"
				@updateData="updateData"
				:lessonPlan="currentlessonPlan"
				:index="index"
			/>
		</div>
		<div v-if="openFrequency">
			<FrequencyPopUp
				@closeFrequencyPopUp="closeFrequencyPopUp"
				@updateFrequencyData="updateFrequencyData"
				:lessonPlan="currentlessonPlan"
				:index="index"
			/>
		</div>
		<div v-if="openDuration">
			<DurationPopUp
				@closeDurationPopUp="closeDurationPopUp"
				@updateDurationData="updateDurationData"
				:lessonPlan="currentlessonPlan"
				:index="index"
			/>
		</div>
		<div v-if="openCreatePlan">
			<NewLessonPlanPopUp
				@closeNewLessonPlanPopUp="closeNewLessonPlanPopUp"
				@updateNewLessonPlanData="updateNewLessonPlanData"
				:lessonPlan="currentlessonPlan"
				:index="index"
			/>
		</div>
	<div class="lessonPlanView">
			<div class="builderContainer">
				<LessonPlanBuilderVue
					@lessonPlan="lessonPlan"
					@editQuestion="editQuestion"
					@deleteQuestion="deleteQuestion"
					@editFrequencyTracker="editFrequencyTracker"
					@editDurationTracker="editDurationTracker"
				/>
			</div>
			<div class="previewContainer">
				<LessonPlanPreview :lessonPlan="currentlessonPlan" />
			</div>
		</div>
	</div>
</template>

<script>
import DurationPopUp from "@/components/DurationPopUp.vue";
import FrequencyPopUp from "@/components/FrequencyPopUp.vue";
import AppTopBar from "@/components/AppTopBar.vue";
import LessonPlanPreview from "@/components/LessonPlanPreview.vue";
import LessonPlanBuilderVue from "@/components/LessonPlanBuilder.vue";
import LessonPlanPopUp from "@/components/LessonPlanPopUp.vue";
import NewLessonPlanPopUp from "@/components/NewLessonPlanPopUp.vue"
export default {
	data() {
		return {
			open: false,
			question: null,
			currentlessonPlan: null,
			choice: null,
			openFrequency: false,
			openDuration: false,
			openCreatePlan: false
		};
	},
	methods: {
		lessonPlan(lessonPlan) {
			this.currentlessonPlan = lessonPlan;
			this.openCreatePlan = true
		},
		editQuestion(index) {
			this.open = true;
			this.index = index;
		},
		editFrequencyTracker(index) {
			this.openFrequency = true;
			this.index = index;
		},
		editDurationTracker(index) {
			this.openDuration = true;
			this.index = index;
		},

		deleteQuestion(question) {
			console.log("emit delete", question);
		},
		closePopUp(closePopUp) {
			this.open = false;
			this.currentlessonPlan.questions[this.index] = closePopUp;
		},
		closeFrequencyPopUp(closeFrequencyPopUp) {
			this.openFrequency = false;
			this.currentlessonPlan.frequencyTrackers[this.index] =
				closeFrequencyPopUp;
		},
		closeDurationPopUp(closeDurationPopUp) {
			this.openDuration = false;
			this.currentlessonPlan.durationTrackers[this.index] = closeDurationPopUp;
			console.log("lesson", this.currentNessonPlan);
		},
		closeNewLessonPlanPopUp(){			
			this.openCreatePlan = false;
			
		},
		updateNewLessonPlanData(updateNewLessonPlanData){
			this.openCreatePlan = false;
			console.log('data', updateNewLessonPlanData);
			this.currentlessonPlan.name = updateNewLessonPlanData
			console.log("lesson", this.currentlessonPlan);
		}
	},

	components: {
		AppTopBar,
		LessonPlanBuilderVue,
		LessonPlanPreview,
		LessonPlanPopUp,
		FrequencyPopUp,
		DurationPopUp,
		NewLessonPlanPopUp
	},
};
</script>

<style scoped>
.lessonPlanView {
	display: flex;
	justify-content: center;
	margin: 20px !important;
}
.builderContainer {
	border: 2px solid red;
	margin: 20px !important;
}

.previewContainer {
	border: 2px solid blue;
	margin: 20px !important;
}
</style>
