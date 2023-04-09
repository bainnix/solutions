<!-- eslint-disable no-debugger -->
<template>
	<Teleport to="body">
		<div class="modal">
			<div class="title">Duration Tracker Editor</div>
			<div class="durationEditorContainer">
				<label for="durationTracker">Title</label>
				<input v-model="durationTracker.name" name="durationTracker" type="text"/>
			</div>
			<div class="buttons">
				<button @click="updateDurationData">Apply</button>
				<button @click="closeDurationPopUp">Close</button>
			</div>
		</div>
	</Teleport>
</template>

<script>
export default {
	props: ["lessonPlan", "index"],
	data() {
		return {
			durationTracker: this.lessonPlan.durationTrackers[this.index]
			
		};
	},
	methods: {
		updateDurationData() {
			console.log('duration', this.durationTracker);
			this.$emit("closeDurationPopUp", this.durationTracker) ;
		},
		closeDurationPopUp() {
			console.log('close');
			this.$emit("closeDurationPopUp");
		},
		
	},
	components: {
		
	},
};
</script>

<style scoped>
.modal {
	position: fixed;
	z-index: 100;
	top: 20%;
	left: 40%;
	margin-left: -150px;
	background: steelblue;
	width: 500px;
	height: 350px;
	color: aliceblue;
}
.buttons {
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}


.title {
	text-align: center;
	padding: 5px;
}
.durationEditorContainer {
	display: flex;
	flex-direction: column;
}

.dropdown {
	display: flex;
	justify-content: flex-end;
}
</style>
