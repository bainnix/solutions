<!-- eslint-disable no-debugger -->
<template>
	<div>
		<div>Preview</div>
		<div class="questionContainer">
			<div v-if="lessonPlan">
				<template v-for="question of lessonPlan.questions" :key="question">
					<div class="questions">
						<div>{{ question.text }}</div>
					</div>
					<div>Presented {{ question.numberPresented }}</div>
					<div>Correct {{ question.numberCorrect }}</div>
					<div v-if="question.type == questionType.BOOLEAN" class="choices">
						<button
							@click="correctAnswer(question)"
							class="material-icons correct"
						>
							done
						</button>
						<button
							@click="incorrectAnswer(question)"
							class="material-icons incorrect"
						>
							close
						</button>
						<button @click="undo(question)" class="material-icons undo">
							undo
						</button>

						<div v-if="question.type == questionType.MUTLIPLE">
							<template v-for="choice of question.choices" :key="choice">
								<label :for="choice.text">{{ choice.text }}</label>
								<input type="radio" :name="choice.text" />
							</template>
						</div>
						<div v-if="question.type == questionType.FREEANSWER">
							<label for="freeAnswer">Free Response</label>
							<input name="freeAnser" type="text" />
						</div>
					</div>
				</template>
				<div>
					<template
						v-for="durationTracker of lessonPlan.durationTrackers"
						:key="durationTracker"
					>
						<DurationTracker :name="durationTracker.name" />
					</template>
				</div>
				<div>
					<template
						v-for="frequencyTracker of lessonPlan.frequencyTrackers"
						:key="frequencyTracker"
					>
						<FrequencyTracker :name="frequencyTracker.name" />
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Question } from "@/data/LessonPlan";
import DurationTracker from "@/components/DurationTracker.vue";
import FrequencyTracker from "@/components/FrequencyTracker.vue";

export default {
	props: ["lessonPlan"],
	data() {
		return {
			questionType: Question.QuestionType,
			lastAction: [null],
		};
	},
	methods: {
		correctAnswer(question) {
			question.numberCorrect += 1;
			question.numberPresented += 1;
			this.lastAction.push(true);
		},
		undoCorrectAnswer(question) {
			question.numberCorrect -= 1;
			question.numberPresented -= 1;
			this.lastAction.pop();
		},
		incorrectAnswer(question) {
			question.numberPresented += 1;
			this.lastAction.push(false);
		},
		undoIncorrectAnswer(question) {
			question.numberPresented -= 1;
			this.lastAction.pop();
		},
		undo(question) {
			for (let i = this.lastAction.length - 1; i >= 0; i--) {
				switch (this.lastAction[i]) {
					case true: {
						this.undoCorrectAnswer(question);
						return;
					}
					case false: {
						this.undoIncorrectAnswer(question);
						return;
					}
				}
			}
		},
	},
	components: {
		DurationTracker,
		FrequencyTracker,
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

label {
	margin: 5px !important;
}
.undo:hover {
	background: rgb(237, 212, 24);
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
	background: lightgreen;
}
button {
	margin: 5px !important;
}

.incorrect:hover {
	background: red;
}
</style>
