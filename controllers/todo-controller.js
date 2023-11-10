const Todos = require("../models/Todos");
const Todo = require("../models/Todos")

module.exports = {
    getAllTodo: (req, res) => {
        res.json({
            massage: "Berhasil Mendapatkan data Todos",
            data : Todo
        })
    },
    getTodoById: (req, res) => {
        const todoId = req.params.id;
        const selectId = Todo.find((Todo) => Todo.id == todoId)

        if(selectId){
            res.status(200).json({
                massage: "Berhasil mengambil data by id",
                data: selectId
            })
        } else {
            res.status(404).json({
                massage: "Id not found"
            })
        }
       
    },
    addTodo: (req, res) => {
        const data = req.body
        const newTodo = {
            id: Todos[Todos.length-1].id + 1,nama: data.nama,
            value: data.value
        }

        Todos.push(newTodo);

            res.status(201).json({
                message: "Berhasil menambahkan Todo",
                data: newTodo,
              });
    



    },
    editTodoById: (req, res) => {
        const editId = req.params.id;
        const newDataEdit = req.body;

        const todoUpdate = Todo.find((todo)=> todo.id == editId)

        if(!todoUpdate){
            return res.status(404).json({
                massage: "id not found"
            })
        }

        Object.assign(todoUpdate, newDataEdit);

        res.json({
            massage: "Data berhasil di perbarui",
            data:todoUpdate
        })

    },
    deleteTodoById: (req, res) => {
        const hapusId = req.params.id;
        const hapusIndex = Todo.findIndex(todo => todo.id == hapusId);  

        if(hapusIndex === -1){
            return res.status(404).json({
                massage : "id not found"
            })
        }

        const hapusTodo = Todo.slice(hapusIndex, 1)[0];

        res.status(200).json({
            massage: "Berhasil menghapus Todo",
            data : hapusTodo
        })
    }
}