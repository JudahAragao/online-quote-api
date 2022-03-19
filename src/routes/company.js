const Router = require('express-promise-router')

const { company } = require('../models')
const CompanyService = require('../services/company')

const companyService = new CompanyService(company)

const router = new Router()
module.exports = router

router.get('/', async (req, res) => {
    const companies = await companyService.get()
    res.status(200).json(companies)
})

router.get('/:id', async (req, res) => {
    const company = await companyService.getId(req.params.id)
    res.status(200).json(company)
})

router.post('/', async (req, res) => {

    const {
        companyName,
        companyCnpj,
        companyAddress,
        companyTelephone,
        companyEmail
    } = req.body

    try {
        await categoryService.add({
            companyName,
            companyCnpj,
            companyAddress,
            companyTelephone,
            companyEmail
        })
        res.status(200).json({ success_msg: 'página cadastrada com sucesso!' })
    } catch (error) {
        res.status(400).json({ error_msg: 'erro na requisição!:    ' + error })
    }

})

router.put('/:id', async (req, res) => {
    const company = await companyService.getId(req.params.id)

    const {
        companyName,
        companyCnpj,
        companyAddress,
        companyTelephone,
        companyEmail
    } = req.body

    try {
        await companyService.updateAll(
            {
                companyName,
                companyCnpj,
                companyAddress,
                companyTelephone,
                companyEmail
            },
            company
        )
        res.status(200).json({ success_msg: 'atualizado com sucesso!' })
    } catch (error) {
        res.status(400).json({ error_msg: 'erro na requisição!' + error })
    }
})

router.delete('/:id', async (req, res) => {
    const company = await companyService.getId(req.params.id)
    await companyService.delete(company)
    return res.status(200).json({ success_msg: "Excluido com sucesso" })
})