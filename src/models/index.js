const sequelize = require('../../config')
const Sequelize = require('sequelize')

const Budget = require('./budget')

const budget = Budget(sequelize, Sequelize.DataTypes)

const db = {
    sequelize,
    budget
}

module.exports = db