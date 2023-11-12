const jwt = require("jsonwebtoken")

const KEY = "hahaha" 

const verifyToken = (req,res,next) => {
    const header = req.headers.authorization

    if(!header){
        res.json({
            massage: "undifined header"
        })
        return
    }

    const token = header.split(" ")[1]

    if(!token){
        res.json({
            massage: "invalid token"
        })
        return
    }

    const payload = jwt.verify(token, KEY)
    req.payload = payload

    next()

}

module.exports = verifyToken