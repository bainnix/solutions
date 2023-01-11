let jwt = require("jsonwebtoken")

function checkToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== "undefined"){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403)
    }
}

async function verifyToken(req){
    let phrase = process.env.secret
    let data = await jwt.verify(req.token, phrase, async function(err, data){
        if(err) {
            return false;
        }
        return true
    })
    return data
}


function makeToken(data){
    let secret = process.env.SECRET
    let token = jwt.sign(data, secret, {expiresIn: "1d"})
    return token
}

module.exports = {
    checkToken,
    verifyToken,
    makeToken
}
