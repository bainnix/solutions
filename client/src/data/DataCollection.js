class DataCollection{
    constructor(lessonPlan){
        this.lessonPlanID = lessonPlan.id
        this.patientID = lessonPlan.patient.id
        this.createdBy = lessonPlan.createdBy
        this.name = lessonPlan.name
        this.date = Date.now()
        this.questions = lessonPlan.questions
        this.durationTrackers = lessonPlan.durationTrackers
        this.frequencyTrackers = lessonPlan.frequencyTrackers
    }
    addDurationData(duration){
		let newDurationData = new DurationData(duration)
		this.durationData.push(newDurationData)
	}
}

class QuestionResponses{
    constructor(question){
        this.id = question.id
        this.question = question.text
        this.type = question.type;
        this.recordedDataBaseline = [null]
		this.recordedDataIntervention = [null]
		this.numberPresentedBaseline = 0;
		this.numberCorrectBaseline = 0;
		this.numberPresentedIntervention = 0;
		this.numberCorrectIntervention = 0;

    }
}

class DurationData{
	constructor(duration){
		this.duration = duration
		this.time = 0
	}
}

class FrequencyData{
	constructor(frequency){
		this.frequency = frequency
		this.count = 0
	}
}
module.exports = {
    DataCollection,
    QuestionResponses,
    DurationData,
	FrequencyData

}
