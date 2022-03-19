class ProductService {
    constructor(ProductModel){
        this.product = ProductModel
    }

    async get(){
        const products = await this.product.findAll()
        return products
    }

    async getId(id) {
        const product = await this.product.findOne({ where: { productId: id } })
        return product
    }

    async add(productDTO){
        try {
            await this.product.create(productDTO)
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    async updateAll(productDTO, referent){
        try {
            await referent.update(productDTO)
        } catch (err) {
            throw err
        }
    }

    async disable(productDTO, referent){
        try {
            await referent.update(productDTO)
        } catch (err) {
            throw err
        }
    }

    async delete(productDTO){
        try {
            await productDTO.destroy()
        } catch (err) {
            throw err
        }
    }
}

module.exports = ProductService