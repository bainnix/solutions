<!-- eslint-disable no-debugger -->
<template>
	<div>
        <div class="questionContainer">
            <div v-if="lessonPlan">
				<div>{{ lessonPlan.name }}</div>
                <button @click="submitResponses" >Submit Response Data</button>
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
					<!-- <div>avg {{ (question.numberCorrect / question.numberPresented) * 100 }} %</div>
					<div>order of responses {{question.recordedData }}</div> -->
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
						<button
							@click="intervention(question)"
							class="intervention material-icons"
						>
							info_outline
						</button>
					</div>
					<div v-if="question.type == questionType.MUTLIPLE">
						<template v-for="choice of question.choices" :key="choice">
							<label for="choosen">{{ choice.text }}</label>
							<input
                                class="radio"
								v-model="choosen"
								type="radio"
								name="choosen"
								:value="choice"
                                
							/>
						</template>
						<div>
							<button
								@click="correctAnswerMultiple(question)"
								class="material-icons correct"
							>
								done
							</button>

							<button @click="undo(question)" class="material-icons undo">
								undo
							</button>
							<button
								@click="intervention(question)"
								class="intervention material-icons"
							>
								info_outline
							</button>
						</div>
					</div>
					<div v-if="question.type == questionType.FREEANSWER">
						<label for="freeAnswer">Free Response</label>
						<input name="freeAnser" type="text" />
						<div>
							<button
								@click="correctAnswer(question)"
								class="material-icons correct"
							>
								done
							</button>

							<button @click="undo(question)" class="material-icons undo">
								undo
							</button>
							<button
								@click="intervention(question)"
								class="intervention material-icons"
							>
								info_outline
							</button>
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
import { DataCollection } from "@/data/DataCollection";
import {saveRecordedData} from "@/request/recordedFieldData"

export default {
	props: ["lessonPlan"],
	data() {
		return {
			questionType: Question.QuestionType,
			choosen: null,
		};
	},
	methods: {
       async submitResponses(){
            let collectedData = new DataCollection(this.lessonPlan)
			let recordedFieldData = await saveRecordedData(collectedData)
            console.log('submitted', recordedFieldData);
        },
		correctAnswerMultiple(question) {
            if(!this.choosen){
                return
            }
			let correct = this.choosen.correct;
            let resetRadio = document.getElementsByClassName('radio')
            for(let radioBtn of resetRadio){
                radioBtn.checked = false
            }			
			if (!question.intervention) {
				if (correct) {
					question.numberCorrectBaseline += 1;
					question.numberPresentedBaseline += 1;
					question.recordedDataBaseline.push(true);
				} else {
					question.numberPresentedBaseline += 1;
					question.recordedDataBaseline.push(false);
				}
				question.choicesBaseline.push(this.choosen);
			} else {
				if (correct) {
					question.numberCorrectIntervention += 1;
					question.numberPresentedIntervention += 1;
					question.recordedDataIntervention.push(true);
				} else {
					question.numberPresentedIntervention += 1;
					question.recordedDataBaseline.push(false);
				}
				question.choicesIntervention.push(this.choosen);
			}
            this.choosen = null
		},
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
				if (question.type == Question.QuestionType.MUTLIPLE) {
					question.choicesBaseline.pop();
				}
			} else {
				question.numberCorrectIntervention -= 1;
				question.numberPresentedIntervention -= 1;
				question.recordedDataIntervention.pop();
				if (question.type == Question.QuestionType.MUTLIPLE) {
					question.choicesIntervention.pop();
				}
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
				for (
					let i = question.recordedDataIntervention.length - 1;
					i >= 0;
					i--
				) {
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
