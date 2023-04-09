<template>
	<div>
		<AppTopBar />
		Graph
		<div class="selectedPatient" >
			<div @click="showDropDownUser = !showDropDownUser">Patient:</div>
			<div v-if="this.selectedPatient">{{ selectedPatient.firstName }} {{ selectedPatient.lastName }}</div>
		</div>
		<DropDownUser
			@choosenUser="choosenUser"
			:dropDownData="profile.patients"
			:showDropDown="showDropDownUser"
		/>
		<div v-if="this.selectedPatient">
			<Calendar
				v-model="dateRange"
				selectionMode="range"
				:minDate="minDateValue"
				:maxDate="maxDateValue"
			/>
		</div>
		<div v-if="this.dateRange"
			
			@click="showDropDownBehavior = !showDropDownBehavior"
		>Behavior: {{this.selectedBehavior}}</div>
		<DropDownBehavior
			@choosenBehavior="choosenBehavior"
			:dropDownData="activePlan"
			:showDropDown="showDropDownBehavior"
		/>
	
	<button @click="graphChart">Graph Data</button>
	<div class="graphContainer">
		<canvas id="graph"></canvas>
	</div>
</div>
</template>

<script>
import Calendar from "primevue/calendar";
import AppTopBar from "@/components/AppTopBar.vue";
import DropDownBehavior from "@/components/DropDownSelectBehavior.vue";
import DropDownUser from "@/components/DropDownSelectData.vue";
import { ActiveUser } from "@/data/ActiveUser.js";
import { readCookie } from "@/utils/cookies";
import { chartData1 } from "@/request/recordedFieldData";
import { getLessonPlan } from "@/request/lessonPlans";
export default {
	data() {
		let cookies = readCookie();

		return {
			selectedPatient: null,
			selectedBehavior: null,
			user: cookies.email,
			profile: ActiveUser.data,
			showDropDownUser: false,
			showDropDownBehavior: false,
			dateRange: null,
			minDateValue: null,
			maxDateValue: null,
			chartData: null,
			activePlan: null,
		};
	},
	methods: {
	
		choosenBehavior(behavior){
			this.selectedBehavior = behavior
			if (this.showDropDownBehavior) {
				this.showDropDownBehavior = false;
			}
			console.log('start', this.dateRange[0].getTime());
		},
		graphData() {
			//baseline graph
			let baselineData = [];
			let interventionData = [];
			console.log('chart', this.chartData);
			for (let dataPlots in this.chartData) {
				baselineData.push(this.chartData[dataPlots].percentBaseline);
				interventionData.push(this.chartData[dataPlots].percentIntervention);
			}
			let canvas = document.getElementById("graph");
			canvas.width = 1000;
			canvas.height = 700;
			let cb = canvas.getContext("2d");
			let graphSize = 250;

			// x reference
			cb.beginPath();
			cb.lineWidth = 2;
			cb.strokeStyle = "lightgrey";
			for (let i = 0; i < 10; i++) {
				let y = i;
				y *= 25;
				y += 50;

				// font to label y axis reference
				cb.font = "10px Arial";
				let percent = (10 - i) * 10;
				percent = percent.toString() + "%";
				
				cb.fillText(percent, 250 - 80, y);
			}

			// y axis label
			cb.font = "15px Arial";
			cb.fillText("Selected Behavior", 0, 50);
			cb.fillText(this.selectedBehavior, 0, 70);

			//baseline label 1
			cb.font = "15px Arial";
			cb.fillText("Baseline", 320, 40);

			// y reference
			cb.beginPath();
			cb.lineWidth = 2;
			cb.strokeStyle = "lightgrey";
			for (let i = 0; i < this.chartData.length; i++) {
				let x = i;
				let date = this.chartData[i].date;
				x *= 50;
				x += 250;
				let newDay = new Date(date);
				//font to label x axis reference
				cb.font = "10px Arial";

				let month = newDay.getMonth();
				let year = newDay.getFullYear();
				let day = newDay.getDate();
				cb.fillText(`${month + 1}/${day}/${year}`, x - 25, 300 + 30);
			}

			// x axis label
			cb.font = "20px Arial";
			cb.fillText("Observation Days", 300, 360);

			// figure lable
			cb.font = "15px Arial";
			cb.fillText(`Figure 1: this figure is a graph for ferny ${this.selectedBehavior}`, 0, 380);

			//plot data
			cb.beginPath();
			cb.lineWidth = 1;
			cb.strokeStyle = "black";
			for (let i = 0; i < baselineData.length; i++) {
				let y = baselineData[i];
				let x = i;
				y = y * 2;
				y = graphSize - y;
				x *= 50;
				x += 250;
				cb.fillRect(x, y, 5, 5);
				if (i == 0) {
					cb.moveTo(250, 250);
				} else {
					let y2 = baselineData[i - 1];
					y2 = y2 * 2;
					y2 = graphSize - y2;
					let x2 = i - 1;
					x2 *= 50;
					x2 += 250;
					cb.moveTo(x2, y2);
					cb.lineTo(x, y);
					cb.stroke();
				}
			}
			// create x axis
			cb.beginPath();
			cb.lineWidth = 5;
			cb.strokeStyle = "black";
			cb.moveTo(200, 300);
			cb.lineTo(500, 300);
			cb.stroke();

			//create y axis
			cb.beginPath();
			cb.lineWidth = 5;
			cb.strokeStyle = "black";
			cb.moveTo(200, 300);
			cb.lineTo(200, 50);
			cb.stroke();

			//intervention graph
			let ci = canvas.getContext("2d");

			//create x axis reference points
			ci.beginPath();
			ci.lineWidth = 2;
			ci.strokeStyle = "lightgrey";
			ci.font = "15px Arial";
			ci.fillText("Visual Reminder", 640, 40);

			//create y axis reference
			ci.beginPath();
			ci.lineWidth = 2;
			ci.strokeStyle = "lightgrey";
			for (let i = 0; i < 5; i++) {
				let x = i;
				x *= 50;
				cb.font = "10px Arial";
				let day = new Date();
				let month = day.getMonth();
				let year = day.getFullYear();
				day = day.getDate();
				cb.fillText(`${month}/${day + i}/${year}`, x + 525, 300 + 30);
			}

			// plot data intervention
			cb.beginPath();
			cb.lineWidth = 1;
			cb.strokeStyle = "black";
			for (let i = 0; i < interventionData.length; i++) {
				let y = interventionData[i];
				let x = i;
				y = y * 2;
				y = graphSize - y;
				x *= 50;
				x += 550;
				cb.fillRect(x, y, 5, 5);
				if (i == 0) {
					cb.moveTo(550, 550);
				} else {
					let y2 = interventionData[i - 1];
					y2 = y2 * 2;
					y2 = graphSize - y2;
					let x2 = i - 1;
					x2 *= 50;
					x2 += 550;
					cb.moveTo(x2, y2);
					cb.lineTo(x, y);
					cb.stroke();
				}
			}

			// create x axis
			ci.beginPath();
			ci.lineWidth = 5;
			ci.strokeStyle = "black";
			ci.moveTo(500, 300);
			ci.lineTo(800, 300);
			ci.stroke();

			// create y axis
			ci.beginPath();
			ci.lineWidth = 5;
			ci.strokeStyle = "black";
			ci.moveTo(500, 300);
			ci.lineTo(500, 50);
			ci.stroke();

			//closing y axis
			ci.beginPath();
			ci.lineWidth = 5;
			ci.strokeStyle = "black";
			ci.moveTo(800, 300);
			ci.lineTo(800, 50);
			ci.stroke();
		},
		async choosenUser(selected) {
			this.selectedPatient = selected;
			if (this.showDropDownUser) {
				this.showDropDownUser = false;
			}
			let patientID = this.selectedPatient.id;
			this.getActivePlan(patientID);			
			
		},
		async getActivePlan(patientID) {
			let activeLessonPlan = await getLessonPlan(patientID);
			this.activePlan = activeLessonPlan.data.result;
			
		},
		async graphChart(){
			let patientID = this.selectedPatient.id;
			let chartData = await chartData1({
				patientID: patientID,
				startDate: this.dateRange[0].getTime(),
				endDate: this.dateRange[1].getTime(),
				behavior: this.selectedBehavior,
			});
				this.chartData = chartData.data;
				this.graphData()
		}
	},
	components: {
		AppTopBar,
		DropDownUser,
		Calendar,
		DropDownBehavior,
	},
};
</script>

<style scoped>
.graphContainer {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 20px !important;
}
.selectedPatient{
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-right: 10px !important;
}
</style>
