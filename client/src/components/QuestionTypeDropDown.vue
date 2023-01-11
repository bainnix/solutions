<template>
	<div v-if="showDropDown" class="dropDown">
		<template v-for="(key, item) in dropDownData" :key="item">
			<div @click="test(key)" class="item">{{ key }}</div>
		</template>
	</div>
</template>

<script>
export default {
	props: ["dropDownData", "showDropDown"],
	data() {
		return {};
	},
	methods: {
		test(key) {
            let updateQuestionType = key
			this.$emit("updateQuestionType", updateQuestionType);
		},
	},
};
</script>

<style scoped>
.dropDown {
	z-index: 200;
	background: red;
	width: 100px;
	height: auto;
	color: white;
	padding: 5px;
	position: absolute;
}
.item:hover {
	background: blue;
}
</style>
