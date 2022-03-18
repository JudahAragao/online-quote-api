const configDatabase = require('./db')
const Sequelize = require('sequelize');

const sequelize = new Sequelize(configDatabase);
 
module.exports = sequelize;