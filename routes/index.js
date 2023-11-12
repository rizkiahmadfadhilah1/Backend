const express = require ('express');
const route = express.Router()
const todoRoutes = require ("./Todo-route")
const authRoutes = require ("./auth-route")
const userRoutes = require ("./user-route")
const verifyToken = require ("../middleware/auth")



route.get ("/", (req,res) => {
    res.json({
        massage : "Selamat Datang di server"
    })
})

route.use("/auth", authRoutes)
route.use("/user", userRoutes)
route.use("/todos",verifyToken, todoRoutes)
module.exports = route