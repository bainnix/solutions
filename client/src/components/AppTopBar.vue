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
		<h4 class="nav-bar-links" @click="navigateCreateDocument">
			Create Document
		</h4>
	</div>
</template>

<script>
import MenuDropDown from "@/components/DropDown.vue";
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
