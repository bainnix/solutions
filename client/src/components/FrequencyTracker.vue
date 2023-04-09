<template>
	<div class="frequencyContainer">
        <div>{{name }}</div>
		<div>Occurences: {{count}}</div>
		<button @click="increment">increment count</button>
		<button @click="decrement">decrement count</button>		
	</div>
</template>

<script>
export default {
	props:["name"],
	data() {
		return {
			count: 0
		};
	},
	methods: {
		increment() {
            this.count += 1;
        },
		decrement() {
			this.count -= 1;
		},
	},
};
</script>

<style scoped>
button {
	padding: 5px;
	margin: 20px !important;
}
.frequencyContainer{
    border: 2px solid red;
    width: fit-content;
}
</style>
