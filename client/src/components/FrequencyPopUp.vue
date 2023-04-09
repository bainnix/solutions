<!-- eslint-disable no-debugger -->
<template>
	<Teleport to="body">
		<div class="modal">
			<div class="title">Frequency Tracker Editor</div>
			<div class="trackerEditorContainer">
				<label for="frequencyTracker">Title</label>
				<input v-model="frequencyTracker.name" name="frequencyTracker" type="text"/>
			</div>
			<div class="buttons">
				<button @click="updateFrequencyData">Apply</button>
				<button @click="closeFrequencyPopUp">Close</button>
			</div>
		</div>
	</Teleport>
</template>

<script>
export default {
	props: ["lessonPlan", "index"],
	data() {
		return {
			frequencyTracker: this.lessonPlan.frequencyTrackers[this.index]
			
		};
	},
	methods: {
		updateFrequencyData() {
			console.log('frequency', this.frequencyTracker);
			this.$emit("closeFrequencyPopUp", this.frequencyTracker) ;
		},
		closeFrequencyPopUp() {
			console.log('close');
			this.$emit("closeFrequencyPopUp");
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
.trackerEditorContainer {
	display: flex;
	flex-direction: column;
}

.title {
	text-align: center;
	padding: 5px;
}


.dropdown {
	display: flex;
	justify-content: flex-end;
}
</style>
