<template>
	<div>
		<AppTopBar />
		<div>new internal user</div>
		<input v-model="user.firstName" placeholder="First Name" />
		<input v-model="user.lastName" placeholder="Last Name" />
		<input v-model="user.middleName" placeholder="Middle Name" />
		<input v-model="user.DOB" placeholder="DOB" />
        <input v-model="user.role" placeholder="Role" />
		<input v-model="user.licenseNumber" placeholder="License Number" />
		<input v-model="user.email" placeholder="Email" />
		<input v-model="user.password" placeholder="Password" />
		<input v-model="user.phone" placeholder="Phone" />
		<input v-model="user.street" placeholder="
		Street Name" />
		<input v-model="user.city" placeholder="City" />
		<input v-model="user.state" placeholder="State" />
		<input v-model="user.zip" placeholder="Zip" />
		<button @click="addNewInternalUser">Create New Internal User</button>
    <div>{{newUser}}</div>
	</div>
</template>

<script>
import AppTopBar from "@/components/AppTopBar.vue";
import {createNewInternalUser} from "@/request/internalUsers.js"
export default {
	data() {
		return {
            user: {
                firstName: null,
                lastName: null,
                middleName: null,
                DOB: null,
                role: null,
				supervisorID: null,
                licenseNumber: null,
                email: null,
                phone: null,
                password: null,
                street: null,
                city: null,
                state: null,
                zip: null,
            },
      newUser: null,
		};
	},
	methods: {
		addNewInternalUser: async function () {
			let newUser = await createNewInternalUser(this.user);
      this.NewUser = newUser
		},
	},
	components: {
		AppTopBar,
	},
};
</script>

<style></style>
