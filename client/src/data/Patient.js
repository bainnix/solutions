class Patient {
	constructor(patientID,) {
		//::TODO:: uuid for patient id
		this.activityLog = null;
		this.emergencyContacts = [];
		this.healthRecords = new HealthRecords();
		this.guardian = [];
		this.insurance = null
		this.patientID = patientID;
		this.profilePicture = null;
		this.schedule = new Schedule()
		this.patientDemographic = null
	}
	addEmergencyContact(firstName, lastName, middleName, DOB, street, aptNumber, city, state, zip, phone, email){
		let newEmergencyContact = new EmergencyContact(firstName, lastName, middleName, DOB, street, aptNumber, city, state, zip, phone, email)
		this.emergencyContacts.push(newEmergencyContact)
	}
	addProfilePicture(profilePicture){
		this.profilePicture = profilePicture
	}
	addGuardian(firstName, lastName, middleName, DOB, street, aptNumber, city, state, zip, phone, email){
		let newGuardian = new Guardian(firstName, lastName, middleName, DOB, street, aptNumber, city, state, zip, phone, email)
		this.guardian.push(newGuardian)
	}
	addInsurance(payorResponsibility, clientResponsibility, payor, startDate, expirationDate, firstName, lastName, phone){
		let newInsurance = new Insurance(payorResponsibility, clientResponsibility, payor, startDate, expirationDate, firstName, lastName, phone)
		this.insurance = newInsurance
	}	
	addPatientDemographic(firstName, lastName, middleName, DOB, street, aptNumber, city, state, zip, phone, email){
		let patientDemographic = new PatientDemographic(firstName, lastName, middleName, DOB, street, aptNumber, city, state, zip, phone, email)
		this.patientDemographic = patientDemographic
	}
}

class EmergencyContact {
	constructor(firstName, lastName, middleName, DOB, street, aptNumber, city, state, zip, phone, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.middleName = middleName;
		this.DOB = DOB;
		this.street = street;
		this.aptNumber = aptNumber;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.phone = phone;
		this.email = email;
	}
}
class Guardian {
	constructor(firstName, lastName, middleName, DOB, street, aptNumber, city, state, zip, phone, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.middleName = middleName;
		this.DOB = DOB;
		this.street = street;
		this.aptNumber = aptNumber;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.phone = phone;
		this.email = email;
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

class Insurance {
	constructor(payorResponsibility, clientResponsibility, payor, startDate, expirationDate, firstName, lastName, phone) {
		this.clientResponsibility = clientResponsibility;
		this.contact = {
			contactFirstName: firstName,
			contactLastName: lastName,
			phone: phone,
		};
		this.coverageDate ={
			expirationDate: expirationDate,
			startDate: startDate
		}
		this.payor = payor;
		this.payorResponsibility = payorResponsibility;
		this.subscriberInformation = null
	}
	addSubscriberInformation(insuranceID, groupID, firstName, lastName, gender, policy, street, city, state, zip, email ){
		let newSubscriberInformation = new Subscriber(insuranceID, groupID, firstName, lastName, gender, policy, street, city, state, zip, email)
		this.subscriberInformation = newSubscriberInformation
	}
}

class PatientDemographic {
	constructor(firstName, lastName, middleName, DOB, street, aptNumber, city, state, zip, phone, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.middleName = middleName;
		this.DOB = DOB;
		this.street = street;
		this.aptNumber = aptNumber;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.phone = phone;
		this.email = email;
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
	constructor(insuranceID, groupID, firstName, lastName, middleName, gender, policy, street, city, state, zip ){
				this.insuranceID = insuranceID,
				this.groupID = groupID,
				this.firstName = firstName,
				this.lastName = lastName,
				this.middleName = middleName
				this.gender = gender,
				this.policy = policy,
				this.address = {
					street: street,
					city: city,
					state: state,
					zip: zip,
				}

	}
}

module.exports = {
	EmergencyContact,
	Guardian,
	HealthRecords,
	Insurance,
	Patient,
	PatientDemographic,
	Subscriber
};
