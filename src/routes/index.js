const budget = require('./budget')
const company = require('./company')
const costumer = require('./costumer')

module.exports = app => {
    app.use('/budget', budget)
    app.use('/company', company)
    app.use('/costumer', costumer)
}