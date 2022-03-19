const costumer = (sequelize, DataTypes) => {
    const Costumer = sequelize.define('Costumer', {
        costumerId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        costumerCompanyName: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        costumerName: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        costumerCpfOrCnpj: {
            type: DataTypes.STRING(14),
            allowNull: true
        },
        costumerAddress: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        costumerEmail: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        costumerCity: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        costumerZipCode: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        costumerState: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tableName: 'costumers'
    })

    return Costumer
}
 
module.exports = costumer;