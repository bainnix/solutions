<template>
	<div>
		<div>
			<AppTopBar />
		</div>
		<h1>Create Patient</h1>
		<div>Patient</div>
		<input v-model="patient.firstName" placeholder="First Name" />
		<input v-model="patient.lastName" placeholder="Last Name" />
		<input v-model="patient.middleName" placeholder="Middle Name" />
		<Calendar v-model="patient.DOB" placeholder="DOB" />
		<input v-model="patient.gender" placeholder="Gender" />
		<input v-model="patient.email" placeholder="Email" />
		<input v-model="patient.phone" placeholder="Phone" />
		<input v-model="patient.street" placeholder="Street Name" />
		<input v-model="patient.aptNumber" placeholder="Apt" />
		<input v-model="patient.city" placeholder="City" />
		<input v-model="patient.state" placeholder="State" />
		<input v-model="patient.zip" placeholder="Zip" />
		<input v-model="healthRecords.allergies" placeholder="Allergies" />
		<input v-model="healthRecords.medication" placeholder="Medication" />
		<Calendar v-model="healthRecords.menstration" placeholder="Cycle Date" />
		<input v-model="healthRecords.diet" placeholder="Diet" />

		<div>Guardian</div>
		<input v-model="guardian.firstName" placeholder="Guardain First Name" />
		<input v-model="guardian.middleName" placeholder="Guardain Middle Name" />
		<input v-model="guardian.lastName" placeholder="Guardian Last Name" />
		<input v-model="guardian.phone" placeholder="Guardian Phone" />
		<input v-model="guardian.email" placeholder="Guardian Email" />
		<input v-model="guardian.DOB" placeholder="Guardain DOB" />
		<input v-model="guardian.street" placeholder="Guardain Street" />
		<input v-model="guardian.aptNumber" placeholder="Guardian Apt Number" />
		<input v-model="guardian.city" placeholder="Guardian City" />
		<input v-model="guardian.state" placeholder="Guardian State" />
		<input v-model="guardian.zip" placeholder="Guardian Zip" />

		<div>Subscriber</div>
		<input v-model="subscriber.firstName" placeholder="Subscriber First Name" />
		<input v-model="subscriber.lastName" placeholder="Subscriber Last Name" />
		<input
			v-model="subscriber.middleName"
			placeholder="Subscriber Middle Name"
		/>
		<Calendar v-model="subscriber.DOB" placeholder="Subscriber DOB " />
		<input v-model="subscriber.gender" placeholder="Subscriber Gender" />
		<input v-model="subscriber.phone" placeholder="Subsciber Phone" />
		<input v-model="subscriber.email" placeholder="Subsciber Email" />
		<input v-model="subscriber.street" placeholder="Subscriber Street Name" />
		<input v-model="subscriber.aptNumber" placeholder="Apt" />
		<input v-model="subscriber.city" placeholder="Subscriber City" />
		<input v-model="subscriber.state" placeholder="Subscriber State" />
		<input v-model="subscriber.zip" placeholder="Subscriber Zip" />
		<input
			v-model="subscriber.relationship"
			placeholder="Relationship Subscriber"
		/>
		<div>Insurance Subscriber</div>
		<input v-model="insuranceSubscriber.payorName" placeholder="PayorName" />
		<input
			v-model="insuranceSubscriber.ID"
			placeholder="Subscriber Insurance ID"
		/>
		<input v-model="insuranceSubscriber.group" placeholder="Subscriber Group" />
		<input v-model="insuranceSubscriber.PCN" placeholder="Subscriber PCN" />
		<input v-model="insuranceSubscriber.BIN" placeholder="Subscriber BIN" />
		<input v-model="insuranceSubscriber.payorResponsibility" placeholder="Payor Responsibility" />
		<input
			v-model="insuranceSubscriber.clientResponsibility"
			placeholder="Patient Responsibility"
		/>
		<Calendar v-model="insuranceSubscriber.coverageStartDate" placeholder="Start Date" />
		<Calendar v-model="insuranceSubscriber.coverageEndDate" placeholder="End Date" />
    <input v-model="insuranceSubscriber.status" placeholder="Insurance Status" />
		<div>Insurance Patient</div>
    <input v-model="insurancePatient.payorName" placeholder="PayorName" />
		<input
			v-model="insurancePatient.ID"
			placeholder="Patient Insurance ID"
		/>
		<input v-model="insurancePatient.group" placeholder="Patient Group" />
		<input v-model="insurancePatient.PCN" placeholder="Patient PCN" />
		<input v-model="insurancePatient.BIN" placeholder="Patient BIN" />
		<input v-model="insurancePatient.payorResponsibility" placeholder="Payor Responsibility" />
		<input
			v-model="insurancePatient.clientResponsibility"
			placeholder="Patient Responsibility"
		/>
		<Calendar v-model="insurancePatient.coverageStartDate" placeholder="Start Date" />
		<Calendar v-model="insurancePatient.coverageEndDate" placeholder="End Date" />
    <input v-model="insurancePatient.status" placeholder="Insurance Status" />
    <div>Insurance Contact</div>
    <input
			v-model="insuranceContact.firstName"
			placeholder="Insurance Contact First Name"
		/>
		<input
			v-model="insuranceContact.lastName"
			placeholder="Insurance Contact Last Name"
		/>
    <input
			v-model="insuranceContact.phoneNumber"
			placeholder="Insurance Contact First Name"
		/>
    <input
			v-model="insuranceContact.email"
			placeholder="Insurance Contact First Name"
		/>

		<div>Emergency Contact</div>

		<input
			v-model="emergencyContact.firstName"
			placeholder="Emergency Contact First Name"
		/>
		<input
			v-model="emergencyContact.lastName"
			placeholder="Emergency Contact Last Name"
		/>
		<input
			v-model="emergencyContact.middleName"
			placeholder="Emergency Contact Middle Name"
		/>
		<input v-model="emergencyContact.DOB" placeholder="Emergency Contact DOB" />
		<input
			v-model="emergencyContact.aptNumber"
			placeholder="Emergency Contact Apt Number"
		/>
		<input
			v-model="emergencyContact.city"
			placeholder="Emergency Contact City"
		/>
		<input
			v-model="emergencyContact.state"
			placeholder="Emergency Contact State"
		/>
		<input v-model="emergencyContact.zip" placeholder="Emergency Contact Zip" />
		<input
			v-model="emergencyContact.phone"
			placeholder="Emergency Contact Phone"
		/>
		<input
			v-model="emergencyContact.email"
			placeholder="Emergency Contact Email"
		/>
		<input
			v-model="emergencyContact.relationship"
			placeholder="Emergency Contact Relationship"
		/>

		<div class="photo-container">
			<h3>Profile Photo</h3>
			<ImportFile v-on:photo="emitPhoto($event)" />

			<button @click="addNewPatient">Create New Patient</button>
		</div>
		<img v-if="uploadedPhoto" :src="uploadedPhoto" />
	</div>
</template>
<script>
import { createNewPatient } from "@/request/patient.js";
import AppTopBar from "@/components/AppTopBar.vue";
import Calendar from "primevue/calendar";
import ImportFile from "@/components/ImportFile.vue";
export default {
	watch: {
		uploadedPhoto(newval, oldval) {
			console.log("new", newval);
			console.log("old", oldval);
			this.uploadedPhoto = newval;
		},
	},
	data() {
		return {
      patient: {
        firstName: null,
        lastName: null,
        middleName: null,
        DOB: null,
        gender: null,
        email: null,
        phone: null,
        street: null,
        aptNumber: null,
        city: null,
        state: null,
        zip: null,
      },
      guardian:{
        firstName: null,
        lastName: null,
        middleName: null,
        DOB: null,
        gender: null,
        email: null,
        phone: null,
        street: null,
        aptNumber: null,
        city: null,
        state: null,
        zip: null,
      },
      subscriber:{
        firstName: null,
        lastName: null,
        middleName: null,
        DOB: null,
        gender: null,
        phone: null,
        email: null,
        street: null,
        aptNumber: null,
        city: null,
        state: null,
        zip: null,
        relationship: null,
      },
      insuranceSubscriber: {
        payorName: null,
        id: null,
        group: null,
        PCN: null,
        BIN: null,
        payorResponsibility: null,
        clientResponsibility: null,
        coverageStartDate: null,
        coverageEndDate: null,
        status: null,
      },
      healthRecords:{
        allergies: null,
        medication: null,
        diet: null,
        menstration: null,
      },
      
      insurancePatient:{
        payorName: null,
        ID: null,
        group: null,
        PCN: null,
        BIN: null,
        payorResponsibility: null,
        clientResponsibility: null,
        coverageStartDate: null,
        coverageEndDate: null,
        status: null,

      },
      insuranceContact:{
        firstName: null,
        lastName: null,
        phone: null,
        email: null
      },
      emergencyContact:{
       firstName: null,
       lastName: null,
       middleName: null,
       DOB: null,
       aptNumber: null,
       city: null,
       state: null,
       zip: null,
       phone: null,
       email: null,
       relationship: null,
      },
      
			createdPatient: null,
			uploadedPhoto: null,
		};
	},
	methods: {
		addNewPatient: async function () {
			let newPatient = await createNewPatient({
				patient: this.patient,
        guardain: this.guardian,
        subscriber: this.subscriber,
        insuranceSubscriber: this.insuranceSubscriber,
        healthRecords: this.healthRecords,
        insurancePatient: this.insurancePatient,
        insuranceContact: this.insuranceContact,
        emergencyContact: this.emergencyContact
			});
      console.log('new', newPatient);
			this.createdPatient = newPatient;
		},
		emitPhoto(event) {
			this.uploadedPhoto = event;
		},
	},

	components: {
		Calendar,
		AppTopBar,
		ImportFile,
	},
};
</script>

<style scoped>
input {
	margin: 0.5rem !important;
}
.p-datepicker table {
	background-color: white !important;
}

.p-datepicker-header {
	background-color: white !important;
}

.photo-container {
	display: flex;
	justify-content: center;
	padding: 1rem 0;
}

h3 {
	padding-right: 0.5rem;
}
.p-component {
	margin: 0.5rem !important;
}
</style>
