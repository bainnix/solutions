<template>
<div>
  <div>
    <AppTopBar />
    
  </div>
    <h1>Create Client</h1>
    <input v-model="createClientFirstName" placeholder="First Name" />
    <input v-model="createClientLastName" placeholder="Last Name" />
    <input v-model="createClientMiddleName" placeholder="Middle Name" />
    <Calendar v-model="createClientDOB" placeholder="DOB" />
    <input v-model="createClientEmail" placeholder="Email" />
    <input v-model="createClientPhone" placeholder="Phone" />
    <input v-model="createClientGuardianFirstName" placeholder="Guardain First Name"/>
    <input v-model="createClientGuardianMiddleName" placeholder="Guardain Middle Name"/>
    <input v-model="createClientGuardianLastName" placeholder="Guardian Last Name"/>
    <input v-model="createClientStreet" placeholder="Street Name" />
    <input v-model="createClientCity" placeholder="City" />
    <input v-model="createClientState" placeholder="State" />
    <input v-model="createClientZip" placeholder="Zip" />
    <input v-model="createClientInsuredID" placeholder="Insured ID" />
    <input v-model="createClientRelationshipSubscriber" placeholder="Relationship Subscriber"/>
    <input v-model="createClientAllergies" placeholder="Allergies" />
    <input v-model="createClientMedication" placeholder="Medication" />
    <Calendar v-model="createClientMenstruation" placeholder="Cycle Date" />
    <input v-model="createClientDiet" placeholder="Diet" />
    <input v-model="createClientPayorName" placeholder="PayorName" />
    <input v-model="createClientPayorResponsibility" placeholder="Payor Responsibility"/>
    <input v-model="createClientResponsibility" placeholder="Client Responsibility"/>
    <Calendar v-model="createClientInsuranceCoverageStartDate" placeholder="Start Date"/>
    <Calendar v-model="createClientInsuranceCoverageEndDate" placeholder="End Date"/>
    <input v-model="createClientInsuranceContactFirstName" placeholder="Insurance Contact First Name"/>
    <input v-model="createClientInsuranceContactLastName" placeholder="Insurance Contact Last Name"/>
    <input v-model="createClientInsuranceStatus" placeholder="Insurance Status"/>
    <input v-model="createClientSubscriberFirstName" placeholder="Subscriber First Name"/>
    <input v-model="createClientSubscriberLastName" placeholder="Subscriber Last Name"/>
    <Calendar v-model="createClientSubscriberDOB" placeholder="Subscriber DOB "/>
    <input v-model="createClientSubscriberGender" placeholder="Subscriber Gender"/>
    <input v-model="createClientPolicy" placeholder="Subscriber Policy" />
    <input v-model="createClientGroup" placeholder="Subscriber Group" />
    <input v-model="createClientSubscriberInsuranceID" placeholder="Subscirber Insurance ID"/>
    <input v-model="createClientStreetSubscriber" placeholder="Subscriber Street Name"/>
    <input v-model="createClientCitySubscriber" placeholder="Subscriber City" />
    <input v-model="createClientStateSubscriber" placeholder="Subscriber State"/>
    <input v-model="createClientZipSubscriber" placeholder="Subscriber Zip" />
    <div class="photo-container">
      <h3> Profile Photo </h3>
      <ImportFile v-on:photo="emitPhoto($event)" />
    
    <button @click="addNewClient">Create New Client</button>
   
  </div>
      <img v-if="uploadedPhoto" :src="uploadedPhoto">
</div>
</template>
<script>
import { createNewClient, getTotalNumberOfClients } from "@/request/routes.js";
import AppTopBar from "@/components/AppTopBar.vue";
import Calendar from "primevue/calendar";
import ImportFile from "@/components/ImportFile.vue";
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
      totalClientsArray: null,
      value: null,
      clientInfo: null,
      clientFirstName: null,
      createClientLastName: null,
      createClientFirstName: null,
      createClientMiddleName: null,
      createClientDOB: null,
      createClientDOBMonth: null,
      createClientDOBDay: null,
      createClientDOBYear: null,
      createClientEmail: null,
      createClientPhone: null,
      createClientGuardianFirstName: null,
      createClientGuardianMiddleName: null,
      createClientGuardianLastName: null,
      createClientStreet: null,
      createClientCity: null,
      createClientState: null,
      createClientZip: null,
      createClientInsuredID: null,
      createClientRelationshipSubscriber: null,
      createClientAllergies: null,
      createClientMedication: null,
      createClientMenstruation: null,
      createClientDiet: null,
      createClientPayorName: null,
      createClientPayorResponsibility: null,
      createClientResponsibility: null,
      createClientInsuranceCoverageStartDate: null,
      createClientInsuranceCoverageEndDate: null,
      createClientInsuranceContactFirstName: null,
      createClientInsuranceContactLastName: null,
      createClientInsuranceStatus: null,
      createClientSubscriberFirstName: null,
      createClientSubscriberLastName: null,
      createClientSubscriberDOB: null,
      createClientSubscriberGender: null,
      createClientPolicy: null,
      createClientGroup: null,
      createClientSubscriberInsuranceID: null,
      createClientStreetSubscriber: null,
      createClientCitySubscriber: null,
      createClientStateSubscriber: null,
      createClientZipSubscriber: null,
      createdClient: null, 
      uploadedPhoto:null    
     
    };
  },
  methods: {
    addNewClient: async function () {
      this.totalClientsArray.push('new')
      let newClient = await createNewClient({
        firstName: this.createClientFirstName,
        lastName: this.createClientLastName,
        middleName: this.createClientMiddleName,
        clientDOB: this.createClientDOB,
        clientDOBMonth: this.createClientDOBMonth,
        clientDOBDay: this.createClientDOBDay,
        clientDOBYear: this.createClientDOBYear,
        clientEmail: this.createClientEmail,
        clientPhone: this.createClientPhone,
        clientGuardianFirstName: this.createClientGuardianFirstName,
        clientGuardianMiddleName: this.createClientGuardianMiddleName,
        clientGuardianLastName: this.createClientGuardianLastName,
        clientStreet: this.createClientStreet,
        clientCity: this.createClientCity,
        clientState: this.createClientState,
        clientZip: this.createClientZip,
        clientInsuredID: this.createClientInsuredID,
        clientRelationshipSubscriber: this.createClientRelationshipSubscriber,
        clientAllergies: this.createClientAllergies,
        clientMedication: this.createClientMedication,
        clientMenstruation: this.createClientMenstruation,
        clientDiet: this.createClientDiet,
        clientPayorName: this.createClientPayorName,
        clientPayorResponsibility: this.createClientPayorResponsibility,
        clientResponsibility: this.createClientResponsibility,
        clientInsuranceCoverageStartDate: this.createClientInsuranceCoverageStartDate,
        clientInsuranceCoverageEndDate: this.createClientInsuranceCoverageEndDate,
        clientInsuranceContactFirstName: this.createClientInsuranceContactFirstName,
        clientInsuranceContactLastName: this.createClientInsuranceContactLastName,
        clientInsuranceStatus: this.createClientInsuranceStatus,
        clientSubscriberFirstName: this.createClientSubscriberFirstName,
        clientSubscriberLastName: this.createClientSubscriberLastName,
        clientSubscriberDOBMonth: this.createClientSubscriberDOB,
        clientSubscriberGender: this.createClientSubscriberGender,
        clientPolicy: this.createClientPolicy,
        clientGroup: this.createClientGroup,
        clientSubscriberInsuranceID: this.createClientSubscriberInsuranceID,
        clientStreetSubscriber: this.createClientStreetSubscriber,
        clientCitySubscriber: this.createClientCitySubscriber,
        clientStateSubscriber: this.createClientStateSubscriber,
        clientZipSubscriber: this.createClientZipSubscriber,
        clientID: (this.totalClientsArray.length).toString(),
        profilePhoto: this.uploadedPhoto
      });
      this.createdClient = newClient;
      
      console.log(this.totalClientsArray)
    },
    emitPhoto(event){
      this.uploadedPhoto = event
      
    }
   
  },
  mounted: async function (){
      let total = await getTotalNumberOfClients()
      this.totalClientsArray = total.data.client
      console.log(this.totalClientsArray)
      
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
