/* eslint-disable no-debugger */
function uuid() {
	return "xxxx-xxxx-4xx-yxxx-xxxx".replace(/[xy]/g, function (c) {
		let r = (Math.random() * 16) | 0,
			v = c == "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

class LessonPlan {
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
	constructor(name, user) {
		this.id = uuid();
		this.name = name;
		this.user = user;
		let questions = LessonPlan.DefaultQuestion;
		this.questions = [];
		for (let question in questions) {
			let newQuestion = new Question(questions[question]);
			this.questions.push(newQuestion);
		}
	}
	addQuestion() {
		let newQuestion = new Question(LessonPlan.NewQuestion.NEW_QUESTION);
		this.questions.push(newQuestion);
	}
	deleteQuestion(index) {
		this.questions.splice(index, 1);
	}
}
class Question {
    static hydrate(questionData){
        let questionText = questionData.text
        let questionType = questionData.type
        let choices = questionData.choices
        let newQuestion = new Question(questionText, questionType)
        let newChoices = [];
		for (let choice in choices) {
			let newChoice = new Choice(choices[choice].text);
			newChoices.push(newChoice);
		}
        newQuestion.choices = newChoices
        return newQuestion
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
		this.text = text;
		this.type = type;
		let choices = Question.DefaultChoice;
		this.choices = [];
		for (let choice in choices) {
			let newChoice = new Choice(choices[choice]);
			this.choices.push(newChoice);
		}
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
    static hydrate(choiceData){
        let choiceText = choiceData.text        
        let newChoice = new Choice(choiceText)
        return newChoice
    }
	constructor(text) {
		this.text = text;
		this.type = null;
	}
}

class StopWatch {}

class Clicker {}

module.exports = {
	LessonPlan,
	Question,
	Choice,
	StopWatch,
	Clicker,
};
