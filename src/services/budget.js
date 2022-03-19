class BudgetService {
    constructor(BudgetModel){
        this.budget = BudgetModel
    }

    async get(){
        const budgets = await this.budget.findAll()
        return budgets
    }

    async getId(id) {
        const budget = await this.budget.findOne({ where: { budgetId: id } })
        return budget
    }

    async add(budgetDTO){
        try {
            await this.budget.create(budgetDTO)
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    async update(budgetDTO, referent){
        try {
            await referent.update(budgetDTO)
        } catch (err) {
            throw err
        }
    }

    async delete(budgetDTO){
        try {
            await budgetDTO.destroy()
        } catch (err) {
            throw err
        }
    }
}

module.exports = BudgetService