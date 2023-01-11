const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User } = require("../../client/src/data/Internal");


router.post("/createNewInternalUser", async (req, res) => {
	let user = req.body;
	let password = user.password;
	const hashedPassord = await bcrypt.hashSync(password, 8);
	user.password = hashedPassord;
	let newUser = new User(user);
	const db = await usersCollection();
	db.insertOne(newUser);
});

router.post("/scheduleAppointment", async (req, res) => {
	let data = req.body
	console.log(data);
	const db = await usersCollection();
	
});

router.get("/appointmentAttendee", async (req, res) => {
	let query = req.query
	let email = query.data
	console.log('emailback', email);
	let pipeline = [
		{
		  '$match': {
			'email': `${email}`
		  }
		}, {
		  '$project': {
			'clients': '$clients', 
			'supervisors': '$supervisors',
			'_id': 0
		  }
		}
	  ]
	const db = await usersCollection();
	db.aggregate(pipeline).toArray(function(err, result){
		let attendee = result[0]
		console.log('found', attendee);
		res.status(200).json({result: attendee})
	})
	

	
});

router.get("/userProfile", async (req, res) => {
	let query = req.query
	let email = query.data
	console.log('emailback', email);
	let pipeline = [
		{
		  '$match': {
			'email': 'jmm2389@gmail.com'
		  }
		}, {
		  '$project': {
			'_id': 0,
			'password': 0,
		  }
		}
	  ]
	const db = await usersCollection();
	db.aggregate(pipeline).toArray(function(err, result){
		let userProfile = result[0]
		console.log('found', userProfile);
		res.status(200).json({result: userProfile})
	})
	

	
});




async function usersCollection() {
	const client = await mongodb.MongoClient.connect(
		"mongodb+srv://newUser:AppleSandwhich@cluster0.lm2at.mongodb.net/?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
		}
	);

	return client.db("ABA").collection("users");
}
module.exports = router;
