const budget = require('./budget')

module.exports = app => {
    app.use('/budget', budget)
}