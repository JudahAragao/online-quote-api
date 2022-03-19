class ServiceService {
    constructor(ServiceModel){
        this.service = ServiceModel
    }

    async get(){
        const services = await this.service.findAll()
        return services
    }

    async getId(id) {
        const service = await this.service.findOne({ where: { serviceId: id } })
        return service
    }

    async add(serviceDTO){
        try {
            await this.service.create(serviceDTO)
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    async updateAll(serviceDTO, referent){
        try {
            await referent.update(serviceDTO)
        } catch (err) {
            throw err
        }
    }

    async disable(serviceDTO, referent){
        try {
            await referent.update(serviceDTO)
        } catch (err) {
            throw err
        }
    }

    async delete(serviceDTO){
        try {
            await serviceDTO.destroy()
        } catch (err) {
            throw err
        }
    }
}

module.exports = ServiceService