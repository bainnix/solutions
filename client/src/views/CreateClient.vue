<template>
	<div>
		<AppTopBar />
		<div>new client</div>
		<input v-model="createClientFirstName" placeholder="First Name" />
		<input v-model="createClientLastName" placeholder="Last Name" />
		<input v-model="createClientMiddleName" placeholder="Middle Name" />
		<Calendar v-model="createClientDOB" placeholder="DOB" />
		<input v-model="createClientEmail" placeholder="Email" />
		<input v-model="createClientPassword" placeholder="Password" />
		<input v-model="createClientPhone" placeholder="Phone" />
		<input v-model="createClientStreet" placeholder="Street Name" />
		<input v-model="createClientCity" placeholder="City" />
		<input v-model="createClientState" placeholder="State" />
		<input v-model="createClientZip" placeholder="Zip" />
		<input v-model="createPatientFirstName" placeholder="Patient First Name" />
		<input v-model="createPatientLastName" placeholder="Patient Last Name" />
		<input
			v-model="createPatientMiddleName"
			placeholder="Patient Middle Name"
		/>
		<Calendar v-model="createPatientDOB" placeholder="Patient DOB" />
		<button @click="addNewClient">Create New Patient</button>
    <div>{{newClient}}</div>
	</div>
</template>

<script>
import AppTopBar from "@/components/AppTopBar.vue";
import {createNewClient} from "@/request/routes.js"
export default {
	data() {
		return {
			createClientFirstName: null,
			createClientLastName: null,
			createClientMiddleName: null,
			createClientDOB: null,
			createClientEmail: null,
			createClientPassword: null,
			createClientPhone: null,
			createClientStreet: null,
			createClientCity: null,
			createClientState: null,
			createClientZip: null,
			createPatientFirstName: null,
			createPatientLastName: null,
			createPatientMiddleName: null,
			createPatientDOB: null,
      newClient: null,
		};
	},
	methods: {
		addNewClient: async function () {
			let newClient = await createNewClient({
				ClientFirstName: this.createClientFirstName,
				ClientLastName: this.createClientLastName,
				ClientMiddleName: this.createClientMiddleName,
				ClientDOB: this.createClientDOB,
				ClientEmail: this.createClientEmail,
				ClientPassword: this.createClientPassword,
				ClientPhone: this.createClientPhone,
				ClientStreet: this.createClientStreet,
				ClientCity: this.createClientCity,
				ClientState: this.createClientState,
				ClientZip: this.createClientZip,
				PatientFirstName: this.createPatientFirstName,
				PatientLastName: this.createPatientLastName,
				PatientMiddleName: this.createPatientMiddleName,
				PatientDOB: this.createPatientDOB,
			});
      this.newClient = newClient
		},
	},
	components: {
		AppTopBar,
	},
};
</script>

<style></style>
