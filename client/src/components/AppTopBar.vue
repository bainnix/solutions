<template>
	<div class="container">
		<div class="nav-bar-links">
			<div @click="showDropDownClient = !showDropDownClient">
				<div>Client</div>
				<MenuDropDown
					class="dropDown"
					:dropDownData="clientDropDown"
					:showDropDown="showDropDownClient"
				/>
			</div>
		</div>
		<div class="nav-bar-links">
			<div @click="showDropDownCreateUser = !showDropDownCreateUser">
				<div>Create User</div>
				<MenuDropDown
					class="dropDown"
					:dropDownData="createUser"
					:showDropDown="showDropDownCreateUser"
				/>
			</div>
		</div>
		<div class="nav-bar-links" @click="navigateCreateDocument">
			Create Document
		</div>
		<div class="nav-bar-links" @click="navigateProfile">
			Profile
		</div>
	</div>
</template>

<script>
import MenuDropDown from "@/components/MenuDropDown.vue";
export default {
	data() {
		return {
			showDropDownClient: false,
			showDropDownCreateUser: false,
			clientDropDown: {
				ClientLookUp: "ClientLookUp",
			},
			createUser: {
				CreateClient: "CreateClient",
				CreatePatient: "CreatePatient",
				CreateInternalUser: "CreateInternalUser",
			},
		};
	},
	methods: {
		navigateClientLookUp() {
			this.$router.push("/ClientLookUp");
		},
		navigateCreateClient() {
			this.$router.push("/CreateClient");
		},
		navigateCreateDocument() {
			this.$router.push("/CreateDocument");
		},
		navigateCreatePatient() {
			this.$router.push("/CreatePatient");
		},
		navigateCreateInternalUser() {
			this.$router.push("/CreateInternalUser");
		},
		navigateProfile() {
			this.$router.push("/UserProfile");
		},
	},
	components: {
		MenuDropDown,
	},
};
</script>

<style scoped>
.container {
	width: 100%;
	background-color: black;
	color: whitesmoke;
	text-align: left;
	padding: 1rem;
	display: flex;
	justify-content: space-around;
}
.nav-bar-links:hover {
	cursor: pointer;
}
.dropDown {
	position: absolute;
}
</style>
