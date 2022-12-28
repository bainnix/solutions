let {
	Patient,
} = require("C:/Users/justi/OneDrive/Desktop/Solutions/client/src/data/Patient.js")
const fs = require("fs")  



let newPatient = new Patient(32)
newPatient.addEmergencyContact('Kaitlin', 'Morales', 'Rose', 31, '560 bern ct', null, 'deltona', 'fl', 32738, 7543329195, "jmm2389@gmail.com")
newPatient.healthRecords.addAllergy('termites')
newPatient.healthRecords.addAllergy('shellfish')
newPatient.healthRecords.addMedication('advil')
newPatient.healthRecords.addMedication('motrin')
newPatient.healthRecords.addDiet('kale')
newPatient.healthRecords.addDiet('apples')
newPatient.addGuardian('danny', 'morales', 'angelo', 62, '560 bern ct', null, 'deltona', 'fl', 32738, 7543329195, "jmm2389@gmail.com")
newPatient.addGuardian('gaby', 'morales', null, 57, '560 bern ct', null, 'deltona', 'fl', 32738, 7543329195, "jmm2389@gmail.com")
newPatient.addInsurance(700, 100, "Great Insurance Company", Date.now(), Date.now(), 'guy', 'johnson', 9545867890 )
newPatient.insurance.addSubscriberInformation('A-468-589','9999', 'Justin', "Morales", 'Matthew', 'Male', 'health policy', '560 bern ct', null, 'deltona', 'fl', 32738, 'jmm2389@gmail.com')
newPatient.schedule.setUpcomingAppointment(Date.now())
newPatient.addPatientDemographic('Justin', "Morales", 'Matthew', Date.now(), 'Male', '560 bern ct', null, 'deltona', 'fl', 32738, 'jmm2389@gmail.com')


fs.writeFileSync("C:/Users/justi/OneDrive/Desktop/Solutions/client/src/scripts/new_patient.json",JSON.stringify(newPatient, null, 2))
console.log('new patient', newPatient);
