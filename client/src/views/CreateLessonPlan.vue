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
		<div class="lessonPlanView">
			<div class="builderContainer">
				<LessonPlanBuilderVue
					@lessonPlan="lessonPlan"
					@editQuestion="editQuestion"
					@deleteQuestion="deleteQuestion"
				/>
			</div>
			<div class="previewContainer">
				<LessonPlanPreview :lessonPlan="currentlessonPlan" />
			</div>
		</div>
	</div>
</template>

<script>
import AppTopBar from "@/components/AppTopBar.vue";
import LessonPlanPreview from "@/components/LessonPlanPreview.vue";
import LessonPlanBuilderVue from "@/components/LessonPlanBuilder.vue";
import LessonPlanPopUp from "@/components/LessonPlanPopUp.vue";
export default {
	data() {
		return {
			open: false,
            question: null,
            currentlessonPlan: null,
            choice: null,
		};
	},
	methods: {
		lessonPlan(lessonPlan) {
            this.currentlessonPlan = lessonPlan
		},
		editQuestion(index) {
			this.open = true;
            this.index = index
		},
		deleteQuestion(question) {
			console.log("emit delete", question);
		},
		closePopUp(closePopUp) {
			this.open = false;
            this.currentlessonPlan.questions[this.index] = closePopUp
            console.log('close');
		},

	},

	components: {
		AppTopBar,
		LessonPlanBuilderVue,
		LessonPlanPreview,
		LessonPlanPopUp,
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
