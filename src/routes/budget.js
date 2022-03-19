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
    const budget = await budgetService.getId(req.params.id)
    res.status(200).json(budget)
})

router.post('/', async (req, res) => {

    const {
        companyId,
        costumerId,
        seller,
        numberBudget,
        dateIssue,
        textBudget,
        delivary,
        costumerCompanyName,
        costumerName,
        inTheCareOf,
        costumerAddress,
        costumerCity,
        costumerCpfOrCnpj,
        costumerZipCode,
        costumerState,
        email,
        productItem,
        productDescription,
        productObs,
        productVariation,
        productAmount,
        productUnitPrice,
        productSubtotal,
        productTotalItems,
        productTotalPrice,
        serviceItem,
        serviceDescription,
        serviceObs,
        serviceVariation,
        serviceAmount,
        serviceUnitPrice,
        serviceSubtotal,
        serviceTotalItems,
        serviceTotalPrice,
        dueDate,
        totalPriceBudget,
        formToPayment,
        obsBudget
    } = req.body

    try {
        await categoryService.add({
            companyId,
            costumerId,
            seller,
            numberBudget,
            dateIssue,
            textBudget,
            delivary,
            costumerCompanyName,
            costumerName,
            inTheCareOf,
            costumerAddress,
            costumerCity,
            costumerCpfOrCnpj,
            costumerZipCode,
            costumerState,
            email,
            productItem,
            productDescription,
            productObs,
            productVariation,
            productAmount,
            productUnitPrice,
            productSubtotal,
            productTotalItems,
            productTotalPrice,
            serviceItem,
            serviceDescription,
            serviceObs,
            serviceVariation,
            serviceAmount,
            serviceUnitPrice,
            serviceSubtotal,
            serviceTotalItems,
            serviceTotalPrice,
            dueDate,
            totalPriceBudget,
            formToPayment,
            obsBudget
        })
        res.status(200).json({ success_msg: 'página cadastrada com sucesso!' })
    } catch (error) {
        res.status(400).json({ error_msg: error })
    }

})

router.put('/:id', async (req, res) => {

    const {
        companyId,
        costumerId,
        seller,
        numberBudget,
        dateIssue,
        textBudget,
        delivary,
        costumerCompanyName,
        costumerName,
        inTheCareOf,
        costumerAddress,
        costumerCity,
        costumerCpfOrCnpj,
        costumerZipCode,
        costumerState,
        email,
        productItem,
        productDescription,
        productObs,
        productVariation,
        productAmount,
        productUnitPrice,
        productSubtotal,
        productTotalItems,
        productTotalPrice,
        serviceItem,
        serviceDescription,
        serviceObs,
        serviceVariation,
        serviceAmount,
        serviceUnitPrice,
        serviceSubtotal,
        serviceTotalItems,
        serviceTotalPrice,
        dueDate,
        totalPriceBudget,
        formToPayment,
        obsBudget
    } = req.body

    try {
        const budget = await budgetService.getId(req.params.id)
        await budgetService.update(
            {
                companyId,
                costumerId,
                seller,
                numberBudget,
                dateIssue,
                textBudget,
                delivary,
                costumerCompanyName,
                costumerName,
                inTheCareOf,
                costumerAddress,
                costumerCity,
                costumerCpfOrCnpj,
                costumerZipCode,
                costumerState,
                email,
                productItem,
                productDescription,
                productObs,
                productVariation,
                productAmount,
                productUnitPrice,
                productSubtotal,
                productTotalItems,
                productTotalPrice,
                serviceItem,
                serviceDescription,
                serviceObs,
                serviceVariation,
                serviceAmount,
                serviceUnitPrice,
                serviceSubtotal,
                serviceTotalItems,
                serviceTotalPrice,
                dueDate,
                totalPriceBudget,
                formToPayment,
                obsBudget
            },
            budget
        )
        res.status(200).json({ success_msg: 'atualizado com sucesso!' })
    } catch (error) {
        res.status(400).json({ error_msg: error })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const budget = await budgetService.getId(req.params.id)
        await budgetService.delete(budget)
        res.status(200).json({ success_msg: "Excluido com sucesso" })
    } catch (error) {
        res.status(200).json({ error_msg: error })
    }
})