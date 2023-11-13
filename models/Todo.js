const { DataTypes } = require('sequelize')
const sequelize = require("../config/db")

const Todo = sequelize.define('todo', {
    value: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

},{
    freezeTableName : true,
    timestamps : false
})

module.exports = Todo