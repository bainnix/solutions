<template>
	<div>
		<div>Preview</div>
		<div class="questionContainer">
			<div v-if="lessonPlan">
				<template v-for="question of lessonPlan.questions" :key="question">
					<div class="questions">
						<div>{{ question.text }}</div>
					</div>
					<div class="choices">
						<button
							v-if="question.type == questionType.BOOLEAN"
							class="material-icons correct"
						>
							done
						</button>
						<button
							v-if="question.type == questionType.BOOLEAN"
							class="material-icons incorrect"
						>
							close
						</button>

						<div v-if="question.type == questionType.MUTLIPLE">
							<template v-for="choice of question.choices" :key="choice">
								<label :for="choice.text">{{
									choice.text
								}}</label>
								<input type="radio" :name="choice.text" />
							</template>
						</div>
						<div v-if="question.type == questionType.FREEANSWER">
							<label for="freeAnswer">Free Response</label>
							<input name="freeAnser" type="text" />
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import { Question } from "@/data/LessonPlan";
export default {
	props: ["lessonPlan"],
	data() {
		return {
			questionType: Question.QuestionType,
		};
	},
};
</script>

<style scoped>
.questionContainer {
	display: flex;
	padding: 5px;
	margin: 5px !important;
	width: 500px;
	justify-content: center;
}
.choices {
	display: flex;
	flex-direction: row;
	justify-content: center;
}

label{
  margin: 5px !important;
}

.multiple {
	margin: 5px !important;
}
.questions {
	display: flex;
	justify-content: flex-start;
	margin: 10px !important;
}
.correct:hover {
	background: green;
}
button {
	margin: 5px !important;
}

.incorrect:hover {
	background: red;
}
</style>
