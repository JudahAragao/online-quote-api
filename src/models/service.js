const service = (sequelize, DataTypes) => {
    const Service = sequelize.define('Service', {
        serviceId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        serviceDescription: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        serviceVariation: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        serviceUnitPrice: {
            type: DataTypes.FLOAT,
            allowNull: true
        }
    }, {
        tableName: 'service'
    })

    return Service
}
 
module.exports = service;