const express = require ('express');
const route = express.Router()
const authRoutes = require ("./auth-route")
const userRoutes = require ("./user-route")
const todoRoutes = require ("./todo-route")
const verifyToken = require ("../middleware/auth")



route.get ("/", (req,res) => {
    res.json({
        massage : "Selamat Datang di server"
    })
})

route.use("/auth", authRoutes)
route.use("/user", userRoutes)
route.use("/todos", todoRoutes)

// route.use("/todos",verifyToken, todoRoutes)
module.exports = route