<!-- eslint-disable no-debugger -->
<template>
	<div>
		<div>Preview</div>
		<div class="questionContainer">
			<div v-if="lessonPlan">
				<div>{{ lessonPlan.name }}</div>
				<template v-for="question of lessonPlan.questions" :key="question">
					<div class="questions">
						<div>{{ question.text }}</div>
					</div>
					<div v-if="!question.intervention">
						<div>Baseline Presented {{ question.numberPresentedBaseline }}</div>
						<div>Baseline Correct {{ question.numberCorrectBaseline }}</div>
					</div>
					<div v-else-if="question.intervention">
						<div>
							Intervention Presented {{ question.numberPresentedIntervention }}
						</div>
						<div>
							Intervention Correct {{ question.numberCorrectIntervention }}
						</div>
					</div>				
					<div v-if="question.type == questionType.BOOLEAN" class="choices">
						<button
							
							class="material-icons correct"
						>
							done
						</button>
						<button
							
							class="material-icons incorrect"
						>
							close
						</button>
						<button  class="material-icons undo">
							undo
						</button>
						<button
							
							class="intervention material-icons"
						>
							info_outline
						</button>
					</div>
					<div v-if="question.type == questionType.MUTLIPLE">
						<template v-for="choice of question.choices" :key="choice">
							<label for="choosen">{{ choice.text }}</label>
							<input type="radio" name="choosen" />
						</template>
					</div>
					<div v-if="question.type == questionType.FREEANSWER">
						<label for="freeAnswer">Free Response</label>
						<input name="freeAnser" type="text" />
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
		};
	},
	methods: {
		correctAnswer(question) {
			if (!question.intervention) {
				question.numberCorrectBaseline += 1;
				question.numberPresentedBaseline += 1;
				question.recordedDataBaseline.push(true);
			} else {
				question.numberCorrectIntervention += 1;
				question.numberPresentedIntervention += 1;
				question.recordedDataIntervention.push(true);
			}
		},
		undoCorrectAnswer(question) {
			if (!question.intervention) {
				question.numberCorrectBaseline -= 1;
				question.numberPresentedBaseline -= 1;
				question.recordedDataBaseline.pop();
			} else {
				question.numberCorrectIntervention -= 1;
				question.numberPresentedIntervention -= 1;
				question.recordedDataIntervention.pop();
			}
		},
		incorrectAnswer(question) {
			if (!question.intervention) {
				question.numberPresentedBaseline += 1;
				question.recordedDataBaseline.push(false);
			} else {
				question.numberPresentedIntervention += 1;
				question.recordedDataIntervention.push(false);
			}
		},
		undoIncorrectAnswer(question) {
			if (!question.intervention) {
				question.numberPresentedBaseline -= 1;
				question.recordedDataBaseline.pop();
			} else {
				question.numberPresentedIntervention -= 1;
				question.recordedDataIntervention.pop();
			}
		},
		undo(question) {
			if (!question.intervention) {
			for (let i = question.recordedDataBaseline.length - 1; i >= 0; i--) {
				switch (question.recordedDataBaseline[i]) {
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
		} else {
			for (let i = question.recordedDataIntervention.length - 1; i >= 0; i--) {
				switch (question.recordedDataIntervention[i]) {
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
		}
		},
		intervention(question) {
			question.intervention = !question.intervention;
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

.intervention:hover {
	background: blueviolet;
	color: white;
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
