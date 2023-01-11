<template>
	<div>
		<button @click="open = true">Open Modal</button>

		<Teleport to="body">
			<div v-if="open" class="modal">
				<p>Add Event to {{ day }}</p>
				<div class="eventContainer">
					<label for="startTime">Start Time</label>
					<input v-model="data.startTime" name="startTime" type="time" />
					<label for="endTime">End Time</label>
					<input v-model="data.endTime" name="endTime" type="time" />
					<label for="attendee">Attendee</label>
					<input name="attendee" type="text" v-model="data.attendee" />
					<button @click="filterAttendee">test</button>
					<div v-if="data.attendee">
						<div
							class="filteredResults"
							v-for="attendees in filteredResults"
							:key="attendees"
						>
							{{ attendees }}
						</div>
					</div>

					<!-- <div> -->
					<!-- <label for="patient">Patient</label>
							<input name="patient" type="checkbox" value="Patient">
							<label for="patient">Client</label>
							<input name="patient" type="checkbox" value="Patient">
							<label for="patient">Supervisor</label>
							<input name="patient" type="checkbox" value="Patient"> -->
					<!-- </div> -->
					<!-- <div @click="showDropDownAttendee = !showDropDownAttendee">
							<label for="attendee">Attendee</label>
						<DropDown :dropDownData="attendeeData.clients" :showDropDown="showDropDownAttendee"/>
					</div> -->
					<!-- <input v-model="data.attendee" name="attendee" type="text"> -->
					<label for="event">Event Description</label>
					<textarea
						v-model="data.eventDescription"
						name="event"
						id=""
						cols="30"
						rows="10"
					></textarea>
					<div>{{data.eventDescription}}</div>
				</div>
				<button @click="submitData()">Submit</button>
				<button @click="open = false">Close</button>
			</div>
		</Teleport>
	</div>
</template>

<script>
// import DropDown from "@/components/DropDown.vue";
import { readCookie } from "@/utils/cookies";
import { scheduleAppointment } from "@/request/internalUsers";
export default {
	props: ["day", "attendeeData"],

	data() {
		let cookies = readCookie();

		return {
			open: false,
			showDropDownAttendee: false,
			data: {
				startTime: null,
				endTime: null,
				eventDescription: null,
				createdBy: cookies.email,
				date: this.day,
				attendee: "",
			},
		};
	},
	computed: {
		clientList() {
			let arrayClients = [];
			let clients = this.attendeeData.clients;
			let clientLastNameData = {};
			let clientDOBData = {};
			for (let key in clients) {
				let lastName = clients[key].lastName;
				let DOB = clients[key].DOB;
				clientLastNameData[lastName] = clients[key];
				clientDOBData[DOB] = clients[key];
			}
			arrayClients.push(clientDOBData, clientLastNameData);
			return arrayClients;
		},

		filteredResults() {
			let query = this.data.attendee;
			let newRegex = new RegExp(query, "i");
			let clientList = this.clientList;
			let displayArray = [];			
			let map = new Map();
			

			for (let lastName in clientList[1]) {
				map.set(lastName, clientList[1][lastName]);
			}
			for (let DOB in clientList[0]) {
				map.set(DOB);
			}
			for (let lastName in clientList[1]) {
				displayArray.push(lastName);
			}
			for (let DOB in clientList[0]) {
				displayArray.push(DOB);
			}
		
			if (query?.length > 0) {
				let filtered = displayArray.filter((attendee) =>
					newRegex.test(attendee)
				);
	
				let newAttendee = map.get(filtered[0]);
		
				return newAttendee;

			} else if (query.length === 0) {
				return this.clientList;
			}
			return "";
		},
	},
	methods: {
		async submitData() {
			let createdTime = Date.now();
			createdTime = new Date(createdTime);
			let time = createdTime.toUTCString();
			this.data.createdTime = time;
			let submittedAppointment = await scheduleAppointment(this.data);
			console.log("submitted", submittedAppointment);
			this.open = false;
		},
	},
	components: {
		// DropDown,
	},
};
</script>

<style scoped>
.modal {
	position: fixed;
	z-index: 100;
	top: 20%;
	left: 40%;
	width: 300px;
	margin-left: -150px;
	background: red;
	width: 500px;
	height: 350px;
}
.eventContainer {
	display: flex;
	flex-direction: column;
	padding: 20px;
}

.filteredResults {
	background: blue;
	color: white;
	width: auto;
	height: 200px;
	z-index: 102;
	position: absolute;
}
</style>
