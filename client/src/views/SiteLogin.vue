<template>
	<div>
		<h2>Login</h2>

		<input v-model="email" placeholder="Email Address" required />
		<input type="password" v-model="password" placeholder="Password" required />
		<button @click="request_login">Login</button>
		<div>
			<canvas id="logo"></canvas>
		</div>
	</div>
</template>

<script>
import { siteLogin } from "@/request/login.js";
import { writeCookie, readCookie } from "@/utils/cookies";
import jwt_decode from "jwt-decode";
export default {
	data() {
		let cookies = readCookie();
    let innerWidth = 350;
    let innerHeight = 300
		return {
			email: null,
			password: null,
			userEmail: cookies ? cookies.username : null,
      innerWidth: 350,
      innerHeight: 300,
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      dx: 1,
      dy: 1,
      pi: Math.PI * 2 ,
      radius: 30,
      startingAngle: 0,
      counterClockWise: false,
      numberCircles: 0
		};
	},
	mounted: async function () {
		
		this.animate();
	},

	methods: {
		animate() {
      if(this.numberCircles < 5){
        this.createCircle()
      }
			requestAnimationFrame(this.animate)
			let canvas = document.getElementById("logo");      
			canvas.width = this.innerWidth ;
			canvas.height = this.innerHeight;
			let cb = canvas.getContext("2d");
			cb.beginPath();
			cb.arc(this.x, this.y, this.radius, this.startingAngle,  this.pi , this.counterClockWise);
			cb.strokeStyle = "blue";
			cb.stroke();
      if (this.x + this.radius > this.innerWidth || this.x - this.radius < 0 ){
        this.dx = -this.dx     
      }
			if (this.y + this.radius > this.innerHeight || this.y - this.radius < 0 ){
        this.dy = -this.dy     
      }
      this.x += this.dx
      this.y += this.dy
		},

		async request_login() {
			let email = this.email;
			let password = this.password;
			let loggedIn = await siteLogin({
				email: email,
				password: password,
			});
			if (loggedIn) {
				let decode = jwt_decode(loggedIn.data.access_token);
				let data = {
					email: decode.email,
				};
				writeCookie(data, { d: 1 });
				this.$router.push("/HomePage");
			}
		},
	},
};
</script>

<style scoped>
#logo {
	max-width: 300px;
	max-height: 300px;
  border: 1px solid red;
}
</style>
>
