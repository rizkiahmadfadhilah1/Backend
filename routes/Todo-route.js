const express = require("express");
const bcrypt = require('bcrypt')
const User = require('../models/users');
const { getAllTodo, getTodoById, createTodo } = require("../controllers/todo_controller");

const route = express.Router()

route.get('/', getAllTodo)
route.get('/:id', getTodoById)
route.post('/', createTodo)

module.exports = route