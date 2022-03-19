const sequelize = require('../../config')
const Sequelize = require('sequelize')

const Budget = require('./budget')
const Company = require('./company')
const Costumer = require('./costumer')
const Product = require('./product')
const Service = require('./service')

const budget = Budget(sequelize, Sequelize.DataTypes)
const company = Company(sequelize, Sequelize.DataTypes)
const costumer = Costumer(sequelize, Sequelize.DataTypes)
const product = Product(sequelize, Sequelize.DataTypes)
const service = Service(sequelize, Sequelize.DataTypes)

const db = {
    sequelize,
    budget,
    company,
    costumer,
    product,
    service
}

module.exports = db