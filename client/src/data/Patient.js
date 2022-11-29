class Patient {
	constructor(patientID,) {
		//::TODO:: uuid for patient id
		this.activityLog = null;
		this.emergencyContacts = [];
		this.healthRecords = new HealthRecords();
		this.guardian = [];
		this.insurance = new Insurance();
		this.patientID = patientID;
		this.profilePicture = null;
		this.schedule = new Schedule();
		this.patientDemographic = new PatientDemographic();
	}
	addEmergencyContact(){
		let newEmergencyContact = new EmergencyContact()
		this.emergencyContacts.push(newEmergencyContact)
	}
	addProfilePicture(profilePicture){
		this.profilePicture = profilePicture
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
}

class Insurance {
	constructor(payorResponsibility, clientResponsibility, payor, startDate, expirationDate, firstName, lastName, phone, ) {
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
		this.subscriberInformation = new Subscriber()
	}
}

class PatientDemographic {
	constructor() {
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
        this.upcomingAppointmentDate = upcomingAppointment;
        this.pastAppointmentDate = []
    }
}
class Subscriber {
	constructor(){
				this.insuranceID = insuranceID,
				this.groupID = groupID,
				this.subscriberFirstName = subscriberFirstName,
				this.subscriberLastName = subscriberLastName,
				this.gender = gender,
				this.policy = policy,
				this.address = {
					street: street,
					city: city,
					state: state,
					zip: zip,
				},

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
