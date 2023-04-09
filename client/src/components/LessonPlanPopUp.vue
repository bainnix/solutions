<!-- eslint-disable no-debugger -->
<template>
	<Teleport to="body">
		<div class="modal">
			<div class="title">Question Editor</div>
			<div class="questionEditorContainer">
				<div class="questionType">
					<div>Question Type</div>
					<div @click="showDropDown = !showDropDown">{{ question.type }}</div>
				</div>
				<div class="dropdown">
					<QuestionTypeDropDownVue
						@updateQuestionType="updateQuestionType"
						:showDropDown="showDropDown"
						:dropDownData="questionType"
					/>
				</div>
				<label for="question">Question Text</label>
				<label for="correct">Choose Correct Answer</label>
				<textarea name="question" v-model="question.text"></textarea>
			</div>
			<div
				v-if="question.type == questionType.MUTLIPLE"
				class="choiceEditorContainer"
			>
				<template v-for="choice of question.choices" :key="choice">
					<div>
						<label for="choice">Choice Text</label>
						<span :class="{ correctChoice: choice.correct  }" @click="choice.correct = !choice.correct" class="material-icons"> verified </span>
						<div>{{ choice.correct }}</div>
					</div>
					<textarea class="choiceInput" v-model="choice.text"></textarea>
				</template>
			</div>
			<div class="buttons">
				<button @click="updateData">Apply</button>
				<button @click="closePopUp">Close</button>
			</div>
		</div>
	</Teleport>
</template>

<script>
import { Question } from "@/data/LessonPlan";
import QuestionTypeDropDownVue from "./QuestionTypeDropDown.vue";
export default {
	props: ["lessonPlan", "index"],
	data() {
		let oldQuestion = Question.hydrate(this.lessonPlan.questions[this.index]);
		return {
			question: this.lessonPlan.questions[this.index],
			choices: this.lessonPlan.questions[this.index].choices,
			boolean: true,
			questionType: Question.QuestionType,
			showDropDown: false,
			oldQuestion: oldQuestion,
			correct: null,
		};
	},
	methods: {
		updateData() {
			this.$emit("closePopUp", this.question);
		},
		closePopUp() {
			this.$emit("closePopUp", this.oldQuestion);
		},
		updateQuestionType(updateQuestionType) {
			this.question.type = updateQuestionType;
			console.log("emitted", this.question.type);
		},
	},
	components: {
		QuestionTypeDropDownVue,
	},
};
</script>

<style scoped>
.modal {
	position: fixed;
	z-index: 100;
	top: 20%;
	left: 40%;
	margin-left: -150px;
	background: steelblue;
	width: 600px;
	height: 500px;
	color: aliceblue;
}
.buttons {
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}
.questionEditorContainer {
	display: flex;
	flex-direction: column;
}
.choiceInput {
	width: 300px;
}

.correctChoice{
	color: lightcoral;
}

.title {
	text-align: center;
	padding: 5px;
}
.choiceEditorContainer {
	display: flex;
	flex-direction: column;
}
.questionType {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
.dropdown {
	display: flex;
	justify-content: flex-end;
}
</style>
