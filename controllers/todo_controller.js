const bcrypt = require('bcrypt')
const Todo = require("../models/Todo")

module.exports = {
    getAllTodo: async (req, res) => {
        try {
            const todos = await Todo.findAll(); // Pastikan Todo diawali dengan huruf besar
            console.log(todos.every(todo => todo instanceof Todo)); // true
            console.log("All todos:", JSON.stringify(todos, null, 2));
    
            res.json({
                message: "berhasil mendapatkan data",
                todos: todos
            });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({
                message: "gagal mendapatkan data",
                error: error.message
            });
        }
    },
    

    getTodoById: async (req, res) => {
        const todoId = req.params.id;
        try {
            const todo = await Todo.findByPk(todoId); // Pastikan Todo diawali dengan huruf besar
    
            if (todo === null) {
                console.log('Todo not found!');
                res.status(404).json({
                    message: 'Todo not found'
                });
            } else {
                console.log(todo instanceof Todo); // true
                console.log('Todo:', JSON.stringify(todo, null, 2));
    
                res.json({
                    message: 'Berhasil mendapatkan data todo',
                    todo: todo
                });
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({
                message: 'Gagal mendapatkan data todo',
                error: error.message
            });
        }
    },
    

    createTodo: async (req, res) => {
    let data = req.body;

    // hash password
    try {
        await Todo.create(data); // Pastikan Todo diawali dengan huruf besar

        // status
        res.status(201).json({
            message: "Berhasil menambahkan todo"
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            message: "Gagal menambahkan data",
            error: error.message
        });
    }
},


}