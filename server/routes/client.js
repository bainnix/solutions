const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const router = express.Router();
const { Client } = require("../../client/src/data/Client");



router.post("/createNewClient", async (req, res) => {
	let client = req.body;
	let password = client.password;
	const hashedPassord = await bcrypt.hashSync(password, 8);
	client.password = hashedPassord;
    let newClient = new Client(client)
	const db = await clientCollection();
	db.insertOne(newClient);
});


async function clientCollection() {
	const client = await mongodb.MongoClient.connect(
		"mongodb+srv://newUser:AppleSandwhich@cluster0.lm2at.mongodb.net/?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
		}
	);

	return client.db("ABA").collection("Client");
}




module.exports = router;
