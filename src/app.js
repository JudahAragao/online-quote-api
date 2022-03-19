const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { sequelize } = require('./models')

const app = express()

const PORT = 4000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({'success_msg':'Api de controle de orçamentos'})
})

sequelize.sync({ force:true })
    .then(() => console.log('conectado'))
    .catch(e => console.log('error: ' + e))

app.listen(PORT, () => console.log('funfou'))