<template>
	<div class="stopWatchContainer">
        <div>Stop Watch</div>
		<div>{{ hours }}:{{ min }}:{{ seconds }}</div>
		<button @click="startTimer">Start</button>
		<button @click="stopTimer">Stop</button>
		<button @click="resetTimer">Reset</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			seconds: 0,
			min: 0,
			hours: 0,
			timer: null,
		};
	},
	methods: {
		startTimer() {
			this.timer = setInterval(() => {
				if (this.seconds < 59) {
					this.seconds++;
				} else {
					this.seconds = 0;
					if (this.min < 59) {
						this.min++;
					} else {
						this.min = 0;
						this.hours++;
					}
				}
			}, 1000);
			console.log("start");
		},
		stopTimer() {
			clearInterval(this.timer);
		},
		resetTimer() {
			this.seconds = 0;
			this.min = 0;
			this.hours = 0;
			this.stopTimer();
		},
	},
};
</script>

<style scoped>
button {
	padding: 5px;
	margin: 20px !important;
}
.stopWatchContainer{
    border: 2px solid red;
    width: fit-content;
}
</style>
