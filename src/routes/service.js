const Router = require('express-promise-router')

const { service } = require('../models')
const ServiceService = require('../services/service')

const serviceService = new ServiceService(service)

const router = new Router()
module.exports = router

router.get('/', async (req, res) => {
    const services = await serviceService.get()
    res.status(200).json(services)
})

router.get('/:id', async (req, res) => {
    const service = await serviceService.getId(req.params.id)
    res.status(200).json(service)
})

router.post('/', async (req, res) => {

    const {
        serviceDescription,
        serviceVariation,
        serviceUnitPrice
    } = req.body

    try {
        await categoryService.add({
            serviceDescription,
            serviceVariation,
            serviceUnitPrice
        })
        res.status(200).json({ success_msg: 'página cadastrada com sucesso!' })
    } catch (error) {
        res.status(400).json({ error_msg: 'erro na requisição!:    ' + error })
    }

})

router.put('/:id', async (req, res) => {
    const service = await serviceService.getId(req.params.id)

    const {
        serviceDescription,
        serviceVariation,
        serviceUnitPrice
    } = req.body

    try {
        await serviceService.updateAll(
            {
                serviceDescription,
                serviceVariation,
                serviceUnitPrice
            },
            service
        )
        res.status(200).json({ success_msg: 'atualizado com sucesso!' })
    } catch (error) {
        res.status(400).json({ error_msg: 'erro na requisição!' + error })
    }
})

router.delete('/:id', async (req, res) => {
    const service = await serviceService.getId(req.params.id)
    await serviceService.delete(service)
    return res.status(200).json({ success_msg: "Excluido com sucesso" })
})