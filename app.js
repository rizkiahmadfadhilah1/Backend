const db = require('./config/db')
const Todo = require('./models/Todo')
const express = require("express")
const app = express()


const rootRouters = require("./routes")

const PORT = process.env.PORT || 3000

async function testConection() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');

        // await Todo.sync({force: true})
        console.log("The table for the User model was just (re)created!");
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConection()

app.use(express.json())
app.use(rootRouters)

app.listen(PORT, () => {
    console.log("server running on Port " + PORT);
})