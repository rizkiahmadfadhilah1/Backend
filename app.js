const express = require("express")
const app = express()
const rootRouters = require ("./routes")
const PORT = process.env.PORT || 3000

app.use(rootRouters)

app.listen(PORT,() => {
    console.log("server running on Port " + PORT);
})