const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const router = express.Router();
const { checkToken, verifyToken, makeToken } = require("./TokenHandler");



router.post("/login", async function (req, res) {
	let data = req.body
	if (!data?.email || !data?.password) {
		return res.status(401).send({message: "Username and Password required." });
	}
	const usersDb = await usersCollection();
    
	try {
		let user = await usersDb.findOne({ email: data.email });
		let userInfo = {
			email: data.email,
		};
        let passwordIdValid = bcrypt.compareSync(
			req.body.password,
            user.password
			)
			if(passwordIdValid && userInfo.email == user.email){
				let token = makeToken(userInfo);
				res.status(200).json({
					access_token: token,
					token_type: "bearer",
				});		
				return true
			} else {
				return res.status(401).send({message: "Username or Password is invalid." });
			}
			
		} catch (e) {
			console.log(e);
		}
	});
	
	async function usersCollection() {
		const users = await mongodb.MongoClient.connect(
			"mongodb+srv://newUser:AppleSandwhich@cluster0.lm2at.mongodb.net/?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
			}
		);
	
		return users.db("ABA").collection("users");
	}
	module.exports = router;
	