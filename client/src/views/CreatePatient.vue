<template>
<div>
  <div>
    <AppTopBar />
    
  </div>
    <h1>Create Patient</h1>
    <input v-model="createPatientFirstName" placeholder="First Name" />
    <input v-model="createPatientLastName" placeholder="Last Name" />
    <input v-model="createPatientMiddleName" placeholder="Middle Name" />
    <Calendar v-model="createPatientDOB" placeholder="DOB" />
    <input v-model="createPatientEmail" placeholder="Email" />
    <input v-model="createPatientPhone" placeholder="Phone" />
    <input v-model="createPatientGuardianFirstName" placeholder="Guardain First Name"/>
    <input v-model="createPatientGuardianMiddleName" placeholder="Guardain Middle Name"/>
    <input v-model="createPatientGuardianLastName" placeholder="Guardian Last Name"/>
    <input v-model="createPatientStreet" placeholder="Street Name" />
    <input v-model="createPatientCity" placeholder="City" />
    <input v-model="createPatientState" placeholder="State" />
    <input v-model="createPatientZip" placeholder="Zip" />
    <input v-model="createPatientInsuredID" placeholder="Insured ID" />
    <input v-model="createPatientRelationshipSubscriber" placeholder="Relationship Subscriber"/>
    <input v-model="createPatientAllergies" placeholder="Allergies" />
    <input v-model="createPatientMedication" placeholder="Medication" />
    <Calendar v-model="createPatientMenstruation" placeholder="Cycle Date" />
    <input v-model="createPatientDiet" placeholder="Diet" />
    <input v-model="createPatientPayorName" placeholder="PayorName" />
    <input v-model="createPatientPayorResponsibility" placeholder="Payor Responsibility"/>
    <input v-model="createPatientResponsibility" placeholder="Patient Responsibility"/>
    <Calendar v-model="createPatientInsuranceCoverageStartDate" placeholder="Start Date"/>
    <Calendar v-model="createPatientInsuranceCoverageEndDate" placeholder="End Date"/>
    <input v-model="createPatientInsuranceContactFirstName" placeholder="Insurance Contact First Name"/>
    <input v-model="createPatientInsuranceContactLastName" placeholder="Insurance Contact Last Name"/>
    <input v-model="createPatientInsuranceStatus" placeholder="Insurance Status"/>
    <input v-model="createPatientSubscriberFirstName" placeholder="Subscriber First Name"/>
    <input v-model="createPatientSubscriberLastName" placeholder="Subscriber Last Name"/>
    <Calendar v-model="createPatientSubscriberDOB" placeholder="Subscriber DOB "/>
    <input v-model="createPatientSubscriberGender" placeholder="Subscriber Gender"/>
    <input v-model="createPatientPolicy" placeholder="Subscriber Policy" />
    <input v-model="createPatientGroup" placeholder="Subscriber Group" />
    <input v-model="createPatientSubscriberInsuranceID" placeholder="Subscirber Insurance ID"/>
    <input v-model="createPatientStreetSubscriber" placeholder="Subscriber Street Name"/>
    <input v-model="createPatientCitySubscriber" placeholder="Subscriber City" />
    <input v-model="createPatientStateSubscriber" placeholder="Subscriber State"/>
    <input v-model="createPatientZipSubscriber" placeholder="Subscriber Zip" />
    <div class="photo-container">
      <h3> Profile Photo </h3>
      <ImportFile v-on:photo="emitPhoto($event)" />
    
    <button @click="addNewPatient">Create New Patient</button>
   
  </div>
      <img v-if="uploadedPhoto" :src="uploadedPhoto">
</div>
</template>
<script>
import { createNewPatient } from "@/request/routes.js";
import AppTopBar from "@/components/AppTopBar.vue";
import Calendar from "primevue/calendar";
import ImportFile from "@/components/ImportFile.vue";
import {Patient,
	PatientDemographic,
	Guardian,
	Insurance,
	EmergencyContact,
	HealthRecords,} from "@/data/Patient"

export default {
  watch:{
        uploadedPhoto(newval, oldval){
            console.log('new',newval)
             console.log('old',oldval)
             this.uploadedPhoto = newval
        }
    },
  data() {
    return {
      totalPatientsArray: null,
      value: null,
      PatientInfo: null,
      PatientFirstName: null,
      createPatientLastName: null,
      createPatientFirstName: null,
      createPatientMiddleName: null,
      createPatientDOB: null,
      createPatientDOBMonth: null,
      createPatientDOBDay: null,
      createPatientDOBYear: null,
      createPatientEmail: null,
      createPatientPhone: null,
      createPatientGuardianFirstName: null,
      createPatientGuardianMiddleName: null,
      createPatientGuardianLastName: null,
      createPatientStreet: null,
      createPatientCity: null,
      createPatientState: null,
      createPatientZip: null,
      createPatientInsuredID: null,
      createPatientRelationshipSubscriber: null,
      createPatientAllergies: null,
      createPatientMedication: null,
      createPatientMenstruation: null,
      createPatientDiet: null,
      createPatientPayorName: null,
      createPatientPayorResponsibility: null,
      createPatientResponsibility: null,
      createPatientInsuranceCoverageStartDate: null,
      createPatientInsuranceCoverageEndDate: null,
      createPatientInsuranceContactFirstName: null,
      createPatientInsuranceContactLastName: null,
      createPatientInsuranceStatus: null,
      createPatientSubscriberFirstName: null,
      createPatientSubscriberLastName: null,
      createPatientSubscriberDOB: null,
      createPatientSubscriberGender: null,
      createPatientPolicy: null,
      createPatientGroup: null,
      createPatientSubscriberInsuranceID: null,
      createPatientStreetSubscriber: null,
      createPatientCitySubscriber: null,
      createPatientStateSubscriber: null,
      createPatientZipSubscriber: null,
      createdPatient: null, 
      uploadedPhoto:null    
     
    };
  },
  methods: {
    addNewPatient: async function () {
      this.totalPatientsArray.push('new')
      let patient = new Patient()
      let newPatient = await createNewPatient({
        firstName: this.createPatientFirstName,
        lastName: this.createPatientLastName,
        middleName: this.createPatientMiddleName,
        PatientDOB: this.createPatientDOB,
        PatientDOBMonth: this.createPatientDOBMonth,
        PatientDOBDay: this.createPatientDOBDay,
        PatientDOBYear: this.createPatientDOBYear,
        PatientEmail: this.createPatientEmail,
        PatientPhone: this.createPatientPhone,
        PatientGuardianFirstName: this.createPatientGuardianFirstName,
        PatientGuardianMiddleName: this.createPatientGuardianMiddleName,
        PatientGuardianLastName: this.createPatientGuardianLastName,
        PatientStreet: this.createPatientStreet,
        PatientCity: this.createPatientCity,
        PatientState: this.createPatientState,
        PatientZip: this.createPatientZip,
        PatientInsuredID: this.createPatientInsuredID,
        PatientRelationshipSubscriber: this.createPatientRelationshipSubscriber,
        PatientAllergies: this.createPatientAllergies,
        PatientMedication: this.createPatientMedication,
        PatientMenstruation: this.createPatientMenstruation,
        PatientDiet: this.createPatientDiet,
        PatientPayorName: this.createPatientPayorName,
        PatientPayorResponsibility: this.createPatientPayorResponsibility,
        PatientResponsibility: this.createPatientResponsibility,
        PatientInsuranceCoverageStartDate: this.createPatientInsuranceCoverageStartDate,
        PatientInsuranceCoverageEndDate: this.createPatientInsuranceCoverageEndDate,
        PatientInsuranceContactFirstName: this.createPatientInsuranceContactFirstName,
        PatientInsuranceContactLastName: this.createPatientInsuranceContactLastName,
        PatientInsuranceStatus: this.createPatientInsuranceStatus,
        PatientSubscriberFirstName: this.createPatientSubscriberFirstName,
        PatientSubscriberLastName: this.createPatientSubscriberLastName,
        PatientSubscriberDOBMonth: this.createPatientSubscriberDOB,
        PatientSubscriberGender: this.createPatientSubscriberGender,
        PatientPolicy: this.createPatientPolicy,
        PatientGroup: this.createPatientGroup,
        PatientSubscriberInsuranceID: this.createPatientSubscriberInsuranceID,
        PatientStreetSubscriber: this.createPatientStreetSubscriber,
        PatientCitySubscriber: this.createPatientCitySubscriber,
        PatientStateSubscriber: this.createPatientStateSubscriber,
        PatientZipSubscriber: this.createPatientZipSubscriber,
        PatientID: (this.totalPatientsArray.length).toString(),
        profilePhoto: this.uploadedPhoto
      });
      this.createdPatient = newPatient;
      
      console.log(this.totalPatientsArray)
    },
    emitPhoto(event){
      this.uploadedPhoto = event
      
    }
   
  },

  components: {
    Calendar,
    AppTopBar,
    ImportFile
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.photo-container{
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}

h3{
  padding-right: .5rem;
}
.p-component{
  margin: 0.5rem !important;
}
</style>
