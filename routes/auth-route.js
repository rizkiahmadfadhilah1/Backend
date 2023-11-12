const express = require("express");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/users')
const route = express.Router()



route.post('/login', (req, res) => {
    let data = req.body
    const user = User.find(item => item.email == data.email)
    
    if(!user){
        res.json({
            massage: "Anda iki sopo"
        })
        return
    }
    if(bcrypt.compareSync(data.password, user.password)){
        const token = jwt.sign({email : data.email}, "hahaha")
        res.json({
            massage: "anda berhasil login",
            token
        })
        return
    }

    res.json({
        massage: "password salah woi"
    })
})


route.post('/regis', (req, res) => {
    let data = req.body
    let saltRound = 10
    let hashpassword = bcrypt.hashSync(data.password, saltRound)
    data.password = hashpassword
    User.push(data)

    res.json({
        massage: "regis berhasil"
    })
})

module.exports = route