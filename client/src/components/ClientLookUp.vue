<template>
  <div>
    <AppTopBar />
      <h1>Client Look Up</h1>
      <input v-model="searchClientID" placeholder="Client ID" />
      <button @click="retrieveClient">Retrieve Client</button>
      <p>Client Name:{{ searchedClientFirstName }} {{ searchedClientMiddleName }} {{ searchedClientLastName }}</p>
      <p>Client DOB:{{ searchedClientDOB }}</p>
      <img v-if="uploadedPhoto" :src="uploadedPhoto">
  </div>
</template>

<script>
import { getClientData } from "@/request/routes.js";
import AppTopBar from "@/components/AppTopBar.vue";

export default {
    data(){
        return{
            searchedClientFirstName: null,
            searchedClientLastName: null,
            searchedClientMiddleName: null,
            searchedClientDOB: null,
            searchClientID: null,
            uploadedPhoto: null


        }
      
    },
    methods:{
         retrieveClient: async function () {
      
      let clientData = await getClientData({
        clientID: this.searchClientID,
      });
      this.clientInfo = clientData
      console.log('client info ',this.clientInfo)
      this.searchedClientFirstName = clientData.data.client[0].clientDemographic.clientName.firstName;
      this.searchedClientLastName = clientData.data.client[0].clientDemographic.clientName.lastName;
      this.searchedClientMiddleName = clientData.data.client[0].clientDemographic.clientName.middleName;
      this.searchedClientDOB = clientData.data.client[0].clientDemographic.DOB.slice(0,10);
      this.uploadedPhoto = clientData.data.client[0].profilePicture;
   },
    },
    components:{
      AppTopBar
    }
}
</script>

<style >


</style>
