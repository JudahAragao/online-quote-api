const Router = require('express-promise-router')

const { product } = require('../models')
const ProductService = require('../services/product')

const productService = new ProductService(product)

const router = new Router()
module.exports = router

router.get('/', async (req, res) => {
    const products = await productService.get()
    res.status(200).json(products)
})

router.get('/:id', async (req, res) => {
    const product = await productService.getId(req.params.id)
    res.status(200).json(product)
})

router.post('/', async (req, res) => {

    const {
        productDescription,
        productVariation,
        productUnitPrice
    } = req.body

    try {
        await categoryService.add({
            productDescription,
            productVariation,
            productUnitPrice
        })
        res.status(200).json({ success_msg: 'página cadastrada com sucesso!' })
    } catch (error) {
        res.status(400).json({ error_msg: 'erro na requisição!:    ' + error })
    }

})

router.put('/:id', async (req, res) => {
    const product = await productService.getId(req.params.id)

    const {
        productDescription,
        productVariation,
        productUnitPrice
    } = req.body

    try {
        await productService.updateAll(
            {
                productDescription,
                productVariation,
                productUnitPrice
            },
            product
        )
        res.status(200).json({ success_msg: 'atualizado com sucesso!' })
    } catch (error) {
        res.status(400).json({ error_msg: 'erro na requisição!' + error })
    }
})

router.delete('/:id', async (req, res) => {
    const product = await productService.getId(req.params.id)
    await productService.delete(product)
    return res.status(200).json({ success_msg: "Excluido com sucesso" })
})