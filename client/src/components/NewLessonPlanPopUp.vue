<!-- eslint-disable no-debugger -->
<template>
	<Teleport to="body">
		<div class="modal">
			<div class="title">{{ name }}</div>
			<div class="newPlanEditorContainer">
				<label for="newPlan">Title</label>
				<textarea v-model="name" name="newPlan"></textarea>
			</div>
			<div class="buttons">
				<button @click="updateNewLessonPlanData">Apply</button>
				<button @click="closeNewLessonPlanPopUp">Close</button>
			</div>
		</div>
	</Teleport>
</template>

<script>
export default {
	props: ["lessonPlan"],
	data() {
		return {			
            name: this.lessonPlan.name
			
		};
	},
	methods: {
		updateNewLessonPlanData() {
			console.log('new plan popup', this.name);
			this.$emit("updateNewLessonPlanData", this.name) ;
		},
		closeNewLessonPlanPopUp() {
			console.log('close');
			this.$emit("closeNewLessonPlanPopUp");
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
.newPlanEditorContainer {
	display: flex;
	flex-direction: column;
}

.dropdown {
	display: flex;
	justify-content: flex-end;
}
</style>
