const express = require("express");
const bcrypt = require('bcrypt')
const User = require('../models/users')
const route = express.Router()



route.get('/', (req, res) => {
    res.json({
        data: User
    })
})


// route.getById('/regis', (req, res) => {
    
// })

module.exports = route