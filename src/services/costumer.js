class CostumerService {
    constructor(CostumerModel){
        this.costumer = CostumerModel
    }

    async get(){
        const costumers = await this.costumer.findAll()
        return costumers
    }

    async getId(id) {
        const costumer = await this.costumer.findOne({ where: { costumerId: id } })
        return costumer
    }

    async add(costumerDTO){
        try {
            await this.costumer.create(costumerDTO)
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    async updateAll(costumerDTO, referent){
        try {
            await referent.update(costumerDTO)
        } catch (err) {
            throw err
        }
    }

    async disable(costumerDTO, referent){
        try {
            await referent.update(costumerDTO)
        } catch (err) {
            throw err
        }
    }

    async delete(costumerDTO){
        try {
            await costumerDTO.destroy()
        } catch (err) {
            throw err
        }
    }
}

module.exports = CostumerService