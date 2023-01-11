const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();
const { Patient } = require("../../client/src/data/Patient");

router.post("/createNewPatient", async (req, res) => {
	let data = req.body;
	let patient = data.patient;
	let guardian = data.guardain;
	let subscriber = data.subscriber;
	let subscriberInsurance = data.insuranceSubscriber;
	let healthRecords = data.healthRecords;
	let paitentInsurance = data.insurancePatient;
	let insuranceContact = data.insuranceContact;
	let emergencyContact = data.emergencyContact;
	let newPatient = new Patient();

	newPatient.addEmergencyContact(emergencyContact);
	newPatient.healthRecords.addAllergy(healthRecords.allergies);
	newPatient.healthRecords.addMedication(healthRecords.medication);
	newPatient.healthRecords.addDiet(healthRecords.diet);
	newPatient.addGuardian(guardian);
	newPatient.addInsurance(
		paitentInsurance,
		subscriberInsurance,
		subscriber,
		insuranceContact
	);
	newPatient.addPatientDemographic(patient);

	const db = await patientCollection();
	db.insertOne(newPatient);
});

async function patientCollection() {
	const client = await mongodb.MongoClient.connect(
		"mongodb+srv://newUser:AppleSandwhich@cluster0.lm2at.mongodb.net/?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
		}
	);

	return client.db("ABA").collection("Patient");
}


module.exports = router;
