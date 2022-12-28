<template>
	<div>
		<AppTopBar />
		<div>new client</div>
		<input v-model="client.firstName" placeholder="First Name" />
		<input v-model="client.lastName" placeholder="Last Name" />
		<input v-model="client.middleName" placeholder="Middle Name" />
		<input v-model="client.DOB" placeholder="DOB" />
		<input v-model="client.email" placeholder="Email" />
		<input type="password" v-model="client.password" placeholder="Password" />
		<input v-model="client.phone" placeholder="Phone" />
		<input v-model="client.street" placeholder="Street Name" />
		<input v-model="client.city" placeholder="City" />
		<input v-model="client.state" placeholder="State" />
		<input v-model="client.zip" placeholder="Zip" />
		<input v-model="client.patient.firstName" placeholder="Patient First Name" />
		<input v-model="client.patient.lastName" placeholder="Patient Last Name" />
		<input
			v-model="client.patient.middleName"
			placeholder="Patient Middle Name"
		/>
		<input v-model="client.patient.DOB" placeholder="Patient DOB" />
		<input v-model="client.patient.ID" placeholder="Patient ID" />
		<button @click="addNewClient">Create New Patient</button>
		<div>{{ newClient }}</div>
	</div>
</template>

<script>
import AppTopBar from "@/components/AppTopBar.vue";
import { createNewClient } from "@/request/client.js";
export default {
	data() {
		return {
			client: {
				firstName: null,
				lastName: null,
				middleName: null,
				DOB: null,
				email: null,
				password: null,
				phone: null,
				street: null,
				city: null,
				state: null,
				zip: null,
				patient:{
					firstName: null,
					lastName: null,
					middleName: null,
					DOB: null,
					ID: null
				},
			},
			newClient: null,
		};
	},
	methods: {
		addNewClient: async function () {
			let newClient = await createNewClient(this.client);
			this.newClient = newClient;
		},
	},
	components: {
		AppTopBar,
	},
};
</script>

<style></style>
