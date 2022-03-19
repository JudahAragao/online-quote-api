const Router = require('express-promise-router')

const { costumer } = require('../models')
const CostumerService = require('../services/costumer')

const costumerService = new CostumerService(costumer)

const router = new Router()
module.exports = router

router.get('/', async (req, res) => {
    const costumers = await costumerService.get()
    res.status(200).json(costumers)
})

router.get('/:id', async (req, res) => {
    const costumer = await costumerService.getId(req.params.id)
    res.status(200).json(costumer)
})

router.post('/', async (req, res) => {

    const {
        costumerCompanyName,
        costumerName,
        costumerCpfOrCnpj,
        costumerAddress,
        costumerEmail,
        costumerCity,
        costumerZipCode,
        costumerState
    } = req.body

    try {
        await categoryService.add({
            costumerCompanyName,
            costumerName,
            costumerCpfOrCnpj,
            costumerAddress,
            costumerEmail,
            costumerCity,
            costumerZipCode,
            costumerState
        })
        res.status(200).json({ success_msg: 'página cadastrada com sucesso!' })
    } catch (error) {
        res.status(400).json({ error_msg: 'erro na requisição!:    ' + error })
    }

})

router.put('/:id', async (req, res) => {
    const costumer = await costumerService.getId(req.params.id)

    const {
        costumerCompanyName,
        costumerName,
        costumerCpfOrCnpj,
        costumerAddress,
        costumerEmail,
        costumerCity,
        costumerZipCode,
        costumerState
    } = req.body

    try {
        await costumerService.updateAll(
            {
                costumerCompanyName,
                costumerName,
                costumerCpfOrCnpj,
                costumerAddress,
                costumerEmail,
                costumerCity,
                costumerZipCode,
                costumerState
            },
            costumer
        )
        res.status(200).json({ success_msg: 'atualizado com sucesso!' })
    } catch (error) {
        res.status(400).json({ error_msg: 'erro na requisição!' + error })
    }
})

router.delete('/:id', async (req, res) => {
    const costumer = await costumerService.getId(req.params.id)
    await costumerService.delete(costumer)
    return res.status(200).json({ success_msg: "Excluido com sucesso" })
})