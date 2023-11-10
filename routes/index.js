const express = require ('express');
const route = express.Router()
const todoRoutes = require ("./Todo-route")


route.get ("/", (req,res) => {
    res.json({
        massage : "Selamat Datang di server"
    })
})

route.use("/todos", todoRoutes)

module.exports = route