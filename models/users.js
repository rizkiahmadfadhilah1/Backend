const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require("../config/db")
const Todo = require('../models/Todo')

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING
    }

},{
    freezeTableName : true,
    timestamps : false
});

User.hasMany(Todo, { foreignKey: 'user_id'})

module.exports = User;