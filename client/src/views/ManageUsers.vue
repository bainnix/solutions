<template>
	<div>
		<AppTopBar />
		<div>Manage Users</div>
        <div>Select User</div> 
        
	</div>
</template>

<script>
import AppTopBar from "@/components/AppTopBar.vue";
import { readCookie } from "@/utils/cookies";
import {ActiveUser} from "@/data/ActiveUser.js"

export default {
	data() {
		let cookies = readCookie();
		return {
			email: cookies.email,

      profile: ActiveUser.data
			
		};
	},
	methods: {
	
	},
	components: {
		AppTopBar,
	},
};
</script>

<style scoped>

</style>
