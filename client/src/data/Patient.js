function uuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
        let r = (Math.random()* 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16)
    })
}

class Patient {
	constructor() {
		this.activityLog = null;
		this.emergencyContacts = [];
		this.healthRecords = new HealthRecords();
		this.guardian = [];
		this.insurance = null
		this.patientID = uuid()
		this.profilePicture = null;
		this.schedule = null
		this.patientDemographic = null
	}
	addEmergencyContact(emergencyContact){
		let newEmergencyContact = new EmergencyContact(emergencyContact)
		this.emergencyContacts.push(newEmergencyContact)
	}
	addProfilePicture(profilePicture){
		this.profilePicture = profilePicture
	}
	addGuardian(guardian){
		let newGuardian = new Guardian(guardian)
		this.guardian.push(newGuardian)
	}
	addInsurance(patientInsurance, subscriberInsurance, subscriber, insuranceContact){
		let newPaitentInsurance = new InsuranceInfo(patientInsurance)
		let newSubscriberInsurance = new InsuranceInfo(subscriberInsurance)
		let newsubScriberInfo = new Subscriber(subscriber)
		let newInsuranceContact = new InsuranceContact(insuranceContact)
		this.insurance = {
			paitentInsurance : newPaitentInsurance,
			insuranceContact: newInsuranceContact,
			subscriber: {
				subscriberInsurance: newSubscriberInsurance,
				subscriberInfo: newsubScriberInfo,				
			}
		}
	}	
	addPatientDemographic(patient){
		let patientDemographic = new PatientDemographic(patient)
		this.patientDemographic = patientDemographic
	}
}

class EmergencyContact {
	constructor(emergencyContact) {
		this.firstName = emergencyContact.firstName;
		this.lastName = emergencyContact.lastName;
		this.middleName = emergencyContact.middleName;
		this.DOB = emergencyContact.DOB;
		this.street = emergencyContact.street;
		this.aptNumber = emergencyContact.aptNumber;
		this.city = emergencyContact.city;
		this.state = emergencyContact.state;
		this.zip = emergencyContact.zip;
		this.phone = emergencyContact.phone;
		this.email = emergencyContact.email;
		this.relationship = emergencyContact.relationship
	}
}
class Guardian {
	constructor(guardian) {
		this.firstName = guardian.firstName;
		this.lastName = guardian.lastName;
		this.middleName = guardian.middleName;
		this.DOB = guardian.DOB;
		this.street = guardian.street;
		this.aptNumber = guardian.aptNumber;
		this.city = guardian.city;
		this.state = guardian.state;
		this.zip = guardian.zip;
		this.phone = guardian.phone;
		this.email = guardian.email;
	}
}
class HealthRecords {
	constructor() {
		this.allergies = [];
		this.medications = [];
		this.diet = [];
		this.menstration = null;
	}
	addAllergy(allergy){
		this.allergies.push(allergy)
	}
	addMedication(medication){
		this.medications.push(medication)
	}
	addDiet(diet){
		this.diet.push(diet)
	}
}	

class InsuranceContact{
	constructor(insuranceContact){
		this.firstName = insuranceContact.firstName;
		this.lastName = insuranceContact.lastName;
		this.phone = insuranceContact.phone;
		this.email = insuranceContact.email;
	}
}

class InsuranceInfo {
	constructor(insurance) {
		this.payorName = insurance.payorName;
		this.id = insurance.id;
		this.group = insurance.group;
		this.PCN = insurance.PCN;
		this.BIN = insurance.BIN;
		this.payorResponsibility = insurance.payorResponsibility;
		this.clientResponsibility = insurance.clientResponsibility;
		this.coverageStart = insurance.coverageStartDate
		this.coverageEnd = insurance.coverageEndDate
		this.status = insurance.status
	}
	addSubscriberInformation(insuranceID, groupID, firstName, lastName, middleName, gender, policy, street, apt, city, state, zip, email, phone ){
		let newSubscriberInformation = new Subscriber(insuranceID, groupID, firstName, lastName, middleName, gender, policy, street, apt, city, state, zip, email, phone)
		this.subscriberInformation = newSubscriberInformation
	}
}

class PatientDemographic {
	constructor(patient) {
		this.firstName = patient.firstName;
		this.lastName = patient.lastName;
		this.middleName = patient.middleName;
		this.DOB = patient.DOB;
		this.gender = patient.gender
		this.phone = patient.phone;
		this.email = patient.email;
		this.street = patient.street;
		this.aptNumber = patient.aptNumber;
		this.city = patient.city;
		this.state = patient.state;
		this.zip = patient.zip;
	}
}
class Schedule {
    constructor(){
        this.upcomingAppointment = null;
        this.pastAppointmentDate = []
    }
	setUpcomingAppointment(newAppointment){
		if(this.upcomingAppointment){
			this.pastAppointmentDate.push(this.upcomingAppointment)
		}
		this.upcomingAppointment = newAppointment
	}
}
class Subscriber {
	constructor(subscriber){
		this.firstName = subscriber.firstName,
		this.lastName = subscriber.lastName,
		this.middleName = subscriber.middleName
		this.gender = subscriber.gender,
		this.address = {
			street: subscriber.street,
			apt: subscriber.aptNumber,
			city: subscriber.city,
			state: subscriber.state,
			zip: subscriber.zip,
		},
		this.email = subscriber.email,
		this.phone = subscriber.phone
		this.insurance = null
	}
	addInsurance(insurance){
		let newInsurance = new InsuranceInfo(insurance)
		this.insurance = newInsurance
	}	
}

module.exports = {
	EmergencyContact,
	Guardian,
	HealthRecords,
	InsuranceInfo,
	InsuranceContact,
	Patient,
	PatientDemographic,
	Subscriber,
	Schedule
};
