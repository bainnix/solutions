<!-- eslint-disable no-unused-vars -->
<template>
	<div>
		<div v-if="showDropDown" class="dropDown">
			<template v-for="(name, id) in dropDownData" :key="id">
				<div @click="selectAttendee($event, id, name)" class="item">
					id: {{ id }} name: {{ name.firstName }} {{ name.lastName }}
				</div>
			</template>
		</div>
		<div v-if="showSelected">id: {{ id }} name: {{ name?.firstName }} {{ name?.lastName }}</div>
	</div>
</template>

<script>
export default {
	props: ["dropDownData", "showDropDown"],
	data() {
		return {
			id: null,
			name: null,
			showSelected: false,
		};
	},
	methods: {
		selectAttendee(event, id, name) {
			this.id = id;
			this.name = name;
			this.showSelected = !this.showSelected;
			console.log("id", id, name, this.showSelected);
		},
	},
};
</script>

<style>
.dropDown {
	z-index: 101;
	background: blue;
	width: auto;
	height: auto;
	color: white;
	position: absolute;
}
.item:hover {
	background: red;
}
</style>
