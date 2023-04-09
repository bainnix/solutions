const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();



router.post("/save", async (req, res) => {
    let recordedFieldData = req.body;	
    console.log('hit', recordedFieldData);
	const db = await RecordedFieldDataCollection();
	db.insertOne(recordedFieldData);
});

router.get("/behaviorGraphDateRange", async (req, res) => {
	let query = req.query
	
	let patientID = query.patientID
	let startDate = parseInt(query.startDate)
	let endDate = parseInt(query.endDate)
	let behavior = query.behavior
	console.log('data', req.query);
	let pipeline = [
		{
		  '$match': {
			'patientID': patientID, 
			'date': {
			  '$gt': startDate, 
			  '$lt': endDate
			}
		  }
		}, {
		  '$unwind': {
			'path': '$questions'
		  }
		}, {
		  '$project': {
			'_id': 0, 
			'behavior': '$questions.text', 
			'percentBaseline': {
			  '$multiply': [
				{
				  '$divide': [
					'$questions.numberCorrectBaseline', '$questions.numberPresentedBaseline'
				  ]
				}, 100
			  ]
			}, 
			'percentIntervention': {
			  '$multiply': [
				{
				  '$divide': [
					'$questions.numberCorrectIntervention', '$questions.numberPresentedIntervention'
				  ]
				}, 100
			  ]
			}, 
			'date': '$date'
		  }
		}, {
		  '$match': {
			'behavior': behavior
		  }
		}, {
		  '$sort': {
			'date': 1
		  }
		}
	  ]
	const db = await RecordedFieldDataCollection();
	db.aggregate(pipeline).toArray(function(err, result){
		let graphData = result
		console.log('found', graphData);
		res.status(200).json(graphData)
	})
	

	
});

async function RecordedFieldDataCollection() {
	const client = await mongodb.MongoClient.connect(
		"mongodb+srv://newUser:AppleSandwhich@cluster0.lm2at.mongodb.net/?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
		}
	);

	return client.db("ABA").collection("RecordedFieldData");
}





module.exports = router;
