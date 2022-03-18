const Router = require('express-promise-router')

const { budget } = require('../models')
const BudgetService = require('../services/budget')

const budgetService = new BudgetService(budget)

const router = new Router()
module.exports = router

router.get('/', async (req, res) => {
    const budgets = await budgetService.get()
    res.status(200).json(budgets)
})

router.get('/:id', async (req, res) => {
    const archive = await budgetService.getId(req.params.id)
    res.status(200).json(archive)
})

router.post('/', async (req, res) => {

    try {
        await budgetService.add(file)
        res.status(200).json({success_msg: 'página cadastrada com sucesso!'})
    } catch (error) {
        res.status(400).json({error_msg: 'erro na requisição!'})
    }

})

router.delete('/:id', async (req, res) => {
    const archive = await budgetService.getId(req.params.id)
    await budgetService.delete(archive)
    return res.status(200).json({ success_msg: "Excluido com sucesso" })
})