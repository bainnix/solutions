<template>
  <div>
    <AppTopBar />
      <h1>Patient Look Up</h1>
      <input v-model="searchPatientID" placeholder="Patient ID" />
      <button @click="retrievePatient">Retrieve Patient</button>
      <p>Patient Name:{{ searchedPatientFirstName }} {{ searchedPatientMiddleName }} {{ searchedPatientLastName }}</p>
      <p>Patient DOB:{{ searchedPatientDOB }}</p>
      <img v-if="uploadedPhoto" :src="uploadedPhoto">
  </div>
</template>

<script>
import { getPatientData } from "@/request/routes.js";
import AppTopBar from "@/components/AppTopBar.vue";

export default {
    data(){
        return{
            searchedPatientFirstName: null,
            searchedPatientLastName: null,
            searchedPatientMiddleName: null,
            searchedPatientDOB: null,
            searchPatientID: null,
            uploadedPhoto: null


        }
      
    },
    methods:{
         retrievePatient: async function () {
      
      let patientData = await getPatientData({
        patientID: this.searchPatientID,
      });
      this.patientInfo = patientData
      console.log('patient info ',this.patientInfo)
      this.searchedPatientFirstName = patientData.data.patient[0].patientDemographic.patientName.firstName;
      this.searchedPatientLastName = patientData.data.patient[0].patientDemographic.patientName.lastName;
      this.searchedPatientMiddleName = patientData.data.patient[0].patientDemographic.patientName.middleName;
      this.searchedPatientDOB = patientData.data.patient[0].patientDemographic.DOB.slice(0,10);
      this.uploadedPhoto = patientData.data.patient[0].profilePicture;
   },
    },
    components:{
      AppTopBar
    }
}
</script>

<style >


</style>
