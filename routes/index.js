const express = require ('express');
const route = express.Router()
const TodoRoutes = require ("./Todo-route")


route.get ("/", (req,res) => {
    res.json({
        massage : "Selamat Datang di server"
    })
})

route.use("/todos", TodoRoutes)

module.exports = route