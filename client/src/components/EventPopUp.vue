<template>
	<div>
		<button @click="open = true">Open Modal</button>

		<Teleport to="body">
			<div v-if="open" class="modal">
				<p>Add Event to {{day}}</p>
				<div class="eventContainer">
					<label for="startTime">Start Time</label>
					<input v-model="data.startTime" name="startTime" type="time"/>
					<label for="endTime">End Time</label>
					<input v-model="data.endTime" name="endTime" type="time"/>
					<label for="attendee">Attendee</label>
					<DropDown />
					<div>{{client}} {{supervisors}}</div>
					<input v-model="data.attendee" name="attendee" type="text">
					<label for="event" >Event Description</label>
					<textarea v-model="data.eventDescription" name="event" id="" cols="30" rows="10"></textarea>
				</div>
				<button @click="submitData()">Submit</button>
				<button @click="open = false">Close</button>
			</div>
		</Teleport>
	</div>
</template>

<script>
import DropDown from '@/components/MenuDropDown.vue';
import { readCookie } from '@/utils/cookies';
import {scheduleAppointment} from '@/request/internalUsers'
export default {
	props:["day"],

	data() {
		let cookies = readCookie()
		return {
			open: false,
			data:{
				startTime: null,
				endTime: null,
				attendee: null,
				eventDescription: null,
				createdBy: cookies.email,
				date: this.day,				
			}

		};
	},
	methods:{
		async submitData(){
			let createdTime = Date.now()
			createdTime = new Date(createdTime)
			let time = createdTime.toUTCString()
			this.data.createdTime = time
			let submittedAppointment = await scheduleAppointment(this.data)
			console.log('submitted', submittedAppointment);
			this.open = false
		}
	},
	components:{
		DropDown
	}

};
</script>

<style scoped>
.modal {
	position: fixed;
	z-index: 999;
	top: 20%;
	left: 40%;
	width: 300px;
	margin-left: -150px;
	background: red;
	width: 500px;
	height: 350px;
}
.eventContainer{
	display: flex;
	flex-direction: column;
	padding: 20px;
}
</style>
