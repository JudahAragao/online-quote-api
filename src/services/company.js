class CompanyService {
    constructor(CompanyModel){
        this.company = CompanyModel
    }

    async get(){
        const companies = await this.company.findAll()
        return companies
    }

    async getId(id) {
        const company = await this.company.findOne({ where: { companyId: id } })
        return company
    }

    async add(companyDTO){
        try {
            await this.company.create(companyDTO)
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    async updateAll(companyDTO, referent){
        try {
            await referent.update(companyDTO)
        } catch (err) {
            throw err
        }
    }

    async delete(companyDTO){
        try {
            await companyDTO.destroy()
        } catch (err) {
            throw err
        }
    }
}

module.exports = CompanyService