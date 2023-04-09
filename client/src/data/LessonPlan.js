/* eslint-disable no-debugger */
function uuid() {
	return "xxxx-xxxx-4xx-yxxx-xxxx".replace(/[xy]/g, function (c) {
		let r = (Math.random() * 16) | 0,
			v = c == "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

class LessonPlan {
	static hydrate(lessonPlanData) {
		let newLessonPlan = new LessonPlan(
			lessonPlanData.name,
			lessonPlanData.user
		);
		newLessonPlan.id = lessonPlanData.id;
		newLessonPlan.durationTrackers = lessonPlanData.durationTrackers;
		newLessonPlan.frequencyTrackers = lessonPlanData.frequencyTrackers;
		for (let question in lessonPlanData.questions) {
			let hydratedQuestion = Question.hydrate(question);
			newLessonPlan.push(hydratedQuestion);
		}

		return newLessonPlan;
	}

	static DefaultQuestion = {
		DEFUALT_0: "Question 0",
		DEFUALT_1: "Question 1",
		DEFUALT_2: "Question 2",
		DEFUALT_3: "Question 3",
		DEFUALT_4: "Question 4",
	};
	static NewQuestion = {
		NEW_QUESTION: "New Question",
	};
	static DefaultTracker = {
		DURATION: "Duration Tracker",
		FREQUENCY: "Frequency Tracker",
	};
	static DefaultName = {
		NEWLESSONPLAN: "New Lesson Plan"
	}
	constructor(name = LessonPlan.DefaultName.NEWLESSONPLAN, user, patient) {
		this.id = uuid();
		this.createdBy = user
		this.lastEditedby = null
		this.userEditHistory = []
		this.name = name;
		this.date = Date.now()
		this.patient = patient;
		this.durationTrackers = [];
		this.frequencyTrackers = [];
		this.intervention = false;
		let questions = LessonPlan.DefaultQuestion;
		this.questions = [];
		this.status = {
			active: false,
			activeStartDate: null,
			activeEndDate: null
		} 
		for (let question in questions) {
			let newQuestion = new Question(questions[question]);
			this.questions.push(newQuestion);
		}
	}
	addFrequencyTracker() {
		let frequencyTrackers = this.frequencyTrackers;
		let newFrequencyTracker = new FrequencyTracker(
			LessonPlan.DefaultTracker.FREQUENCY
		);
		frequencyTrackers.push(newFrequencyTracker);
	}
	addDurationTracker() {
		let durationTrackers = this.durationTrackers;
		let newDurationTracker = new DurationTracker(
			LessonPlan.DefaultTracker.DURATION
		);
		durationTrackers.push(newDurationTracker);
	}
	addQuestion() {
		let newQuestion = new Question(LessonPlan.NewQuestion.NEW_QUESTION);
		this.questions.push(newQuestion);
	}
	deleteQuestion(index) {
		this.questions.splice(index, 1);
	}
	deleteFrequencyTracker(index) {
		this.frequencyTrackers.splice(index, 1);
	}
	deleteDurationTracker(index) {
		this.durationTrackers.splice(index, 1);
	}
}
class Question {
	static hydrate(questionData) {
		let questionText = questionData.text;
		let questionType = questionData.type;
		let choices = questionData.choices;
		let newQuestion = new Question(questionText, questionType);
		let newChoices = [];
		for (let choice in choices) {
			let newChoice = Choice.hydrate(choice.text)
			newChoices.push(newChoice);
		}
		newQuestion.choices = newChoices;
		return newQuestion;
	}
	static DefaultChoice = {
		DEFUALT_1: "Choice 1",
		DEFUALT_2: "Choice 2",
		DEFUALT_3: "Choice 3",
		DEFUALT_4: "Choice 4",
	};
	static QuestionType = {
		BOOLEAN: "Right or Wrong",
		MUTLIPLE: "Mutliple Choice",
		FREEANSWER: "Free Answer",
	};
	constructor(text, type = Question.QuestionType.BOOLEAN) {
		let choices = Question.DefaultChoice;
		this.choices = []
		this.choicesBaseline = [];
		this.choicesIntervention = [];
		for (let choice in choices) {
			let newChoice = new Choice(choices[choice]);
			this.choices.push(newChoice);
		}
		this.text = text;
		this.type = type;
		this.intervention = false
		this.recordedDataBaseline = []
		this.recordedDataIntervention = []
		this.numberPresentedBaseline = 0;
		this.numberCorrectBaseline = 0;
		this.numberPresentedIntervention = 0;
		this.numberCorrectIntervention = 0;
	}
	addChoices(choice) {
		let choices = this.choices;
		let inChoices = false;
		for (let c of choices) {
			if (c == choice) {
				inChoices = true;
			}
		}
		if (!inChoices) {
			choices.push(choice);
		}
	}
}
class Choice {
	static hydrate(choiceData) {
		let choiceText = choiceData?.text;
		let newChoice = new Choice(choiceText);
		return newChoice;
	}
	constructor(text = null) {
		this.id = uuid()
		this.text = text;
		this.type = null; 		
		this.correct = false		
	}
}

class DurationTracker {
	constructor(name) {
		this.name = name;
		this.durationData = [];
		this.durationData = 0
	}
}



class FrequencyTracker {
	constructor(name) {
		this.name = name;
		this.frequency = [];
		this.frequencyCount = 0
	}
}


module.exports = {
	LessonPlan,
	Question,
	Choice,
	DurationTracker,
	FrequencyTracker,
	
};
