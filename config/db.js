const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    username:'root',
    password:'Rekayasa1_',
    database:'dbtodoo'
  });

  module.exports = sequelize