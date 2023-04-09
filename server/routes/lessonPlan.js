const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();



router.post("/save", async (req, res) => {
    let lessonPlan = req.body;	
    console.log('hit', lessonPlan);
	const db = await lessonPlanCollection();
	db.insertOne(lessonPlan);
});

router.get("/activeLessonPlan", async (req, res) => {
	let query = req.query
	let id = query.id
	console.log('id back', id);
	let pipeline = [
		{
		  '$match': {
			'patient.id': id , 
			'status.active': true
		  }
		}
	  ]
	const db = await lessonPlanCollection();
	db.aggregate(pipeline).toArray(function(err, result){
		let lessonPlan = result[0]
		console.log('found', lessonPlan);
		res.status(200).json({result: lessonPlan})
	})
	

	
});

async function lessonPlanCollection() {
	const client = await mongodb.MongoClient.connect(
		"mongodb+srv://newUser:AppleSandwhich@cluster0.lm2at.mongodb.net/?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
		}
	);

	return client.db("ABA").collection("LessonPlans");
}





module.exports = router;
